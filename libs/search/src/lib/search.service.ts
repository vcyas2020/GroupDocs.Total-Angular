import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Api, ConfigService, FileCredentials, FileModel } from "@groupdocs.examples.angular/common-components";
import { BehaviorSubject } from 'rxjs';
import { IndexedFileModel, SearchApi } from './search-models';
import { SearchOptionsService } from './search-options.service';
import { IndexPropertiesService } from './index-properties.service';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  private _itemToRemove = new BehaviorSubject<FileModel>(null);
  itemToRemove = this._itemToRemove.asObservable();

  constructor(private _http: HttpClient,
              private _config: ConfigService,
              private _searchOptionsService: SearchOptionsService,
              private _indexPropertiesService: IndexPropertiesService) {
  }

  addFilesToIndex(filesToIndex: FileModel[]) {
    return this._http.post(this._config.getSearchApiEndpoint() + Api.ADD_FILES_TO_INDEX, filesToIndex, Api.httpOptionsJson);
  }

  loadFiles(path: string) {
    return this._http.post(this._config.getSearchApiEndpoint() + Api.LOAD_FILE_TREE, {'path': path}, Api.httpOptionsJson);
  }

  loadFile(credentials: FileCredentials) {
    return this._http.post(this._config.getSearchApiEndpoint() + Api.LOAD_DOCUMENT_DESCRIPTION, credentials, Api.httpOptionsJson);
  }

  upload(file: File, url: string, rewrite: boolean) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append('rewrite', String(rewrite));
    if (url) {
      formData.append("url", url);
    }

    return this._http.post(this._config.getSearchApiEndpoint() + Api.UPLOAD_DOCUMENTS, formData);
  }

  search(credentials: FileCredentials[], query: string) {
    const body = {
      Query: query,
      CaseSensitiveSearch: this._searchOptionsService.CaseSensitiveSearch,
      FuzzySearch: this._searchOptionsService.FuzzySearch,
      FuzzySearchMistakeCount: this._searchOptionsService.FuzzySearchMistakeCount,
      FuzzySearchOnlyBestResults: this._searchOptionsService.FuzzySearchOnlyBestResults,
      KeyboardLayoutCorrection: this._searchOptionsService.KeyboardLayoutCorrection,
      SynonymSearch: this._searchOptionsService.SynonymSearch,
      HomophoneSearch: this._searchOptionsService.HomophoneSearch,
      WordFormsSearch: this._searchOptionsService.WordFormsSearch,
      SpellingCorrection: this._searchOptionsService.SpellingCorrection,
      SpellingCorrectionMistakeCount: this._searchOptionsService.SpellingCorrectionMistakeCount,
      SpellingCorrectionOnlyBestResults: this._searchOptionsService.SpellingCorrectionOnlyBestResults,
    };
    return this._http.post(this._config.getSearchApiEndpoint() + Api.SEARCH, body, Api.httpOptionsJson);
  }

  removeFile(file: FileModel) {
    return this._http.post(this._config.getSearchApiEndpoint() + Api.REMOVE_FROM_INDEX, file, Api.httpOptionsJson);
  }

  selectedItemToRemove(file: FileModel) {
    this._itemToRemove.next(file);
  }

  getDocumentStatus(files: IndexedFileModel[]) {
    return this._http.post(this._config.getSearchApiEndpoint() + Api.GET_FILE_STATUS, files, Api.httpOptionsJson);
  }

  getIndexProperties() {
    const url = this._config.getSearchApiEndpoint() + SearchApi.GET_INDEX_PROPERTIES;
    return this._http.post(url, Api.httpOptionsJson);
  }
}
