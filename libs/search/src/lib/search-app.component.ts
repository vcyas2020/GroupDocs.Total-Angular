import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SearchService} from "./search.service";
import {
  FileModel,
  ModalService,
  UploadFilesService,
  PasswordService,
  FileCredentials, CommonModals, LoadingMaskService
} from "@groupdocs.examples.angular/common-components";
import {SearchConfig} from "./search-config";
import {SearchConfigService} from "./search-config.service";
import {WindowService} from "@groupdocs.examples.angular/common-components";
import {
  SearchFileModel,
  SearchResult,
  SearchResultItemModel,
  ExtendedFileModel
} from "./search-models";

@Component({
  selector: 'gd-search',
  templateUrl: './search-app.component.html',
  styleUrls: ['./search-app.component.less']
})
export class SearchAppComponent implements OnInit, AfterViewInit {
  title = 'search';
  files: ExtendedFileModel[] = [];
  searchFiles: SearchFileModel[] = [];
  searchResultItems: SearchResultItemModel[] = [];
  indexedFiles: FileModel[] = [];
  searchConfig: SearchConfig;
  credentials: FileCredentials;
  browseFilesModal = CommonModals.BrowseFiles;
  isDesktop: boolean;
  isLoading: boolean;
  searchResult: SearchResult;

  fileWasDropped = false;

  constructor(private _searchService: SearchService,
              private _modalService: ModalService,
              configService: SearchConfigService,
              uploadFilesService: UploadFilesService,
              passwordService: PasswordService,
              private _windowService: WindowService,
              private _loadingMaskService: LoadingMaskService) {

    configService.updatedConfig.subscribe((searchConfig) => {
      this.searchConfig = searchConfig;
    });

    uploadFilesService.uploadsChange.subscribe((uploads) => {
      if (uploads) {
        let i: number;
        for (i = 0; i < uploads.length; i++) {
          this._searchService.upload(uploads.item(i), '', this.searchConfig.rewrite).subscribe((obj: FileCredentials) => {
          });
        }
      }
    });

    passwordService.passChange.subscribe((pass: string) => {
      this.selectFile(this.credentials.guid, pass, CommonModals.PasswordRequired);
    });

    this.isDesktop = _windowService.isDesktop();
    _windowService.onResize.subscribe((w) => {
      this.isDesktop = _windowService.isDesktop();
    });

    _searchService.itemToRemove.subscribe(file => {
      if (file) {
        this._searchService.removeFile(file).subscribe(() => {
          this.removeFileFromList(file);
        });
      }
    });
  }

  ngOnInit() {
    if (this.searchConfig.defaultDocument !== '') {
      this.isLoading = true;
      this.selectFile(this.searchConfig.defaultDocument, '', '');
    }
  }

  ngAfterViewInit() {
    this._loadingMaskService
      .onLoadingChanged
      .subscribe((loading: boolean) => this.isLoading = loading);
  }

  get rewriteConfig(): boolean {
    return this.searchConfig ? this.searchConfig.rewrite : true;
  }

  get uploadConfig(): boolean {
    return this.searchConfig ? this.searchConfig.upload : true;
  }

  get browseConfig(): boolean {
    return this.searchConfig ? this.searchConfig.browse : true;
  }

  openModal(id: string) {
    this._modalService.open(id);
  }

  closeModal(id: string) {
    this._modalService.close(id);
  }

  selectDir($event: string) {
    this._searchService.loadFiles($event).subscribe((files: ExtendedFileModel[]) => this.files = files || []);
  }

  clearSearchResult() {
    this.searchResult = null;
  }

  selectFile($event: string, password: string, modalId: string) {
    this.credentials = {guid: $event, password: password};
    this._searchService.loadFile(this.credentials).subscribe((file: SearchFileModel) => {
        this.searchFiles.push(file);
      }
    );
    if (modalId) {
      this._modalService.close(modalId);
    }
  }

  selectAllItems(checked: boolean) {
    this.files.forEach( (f) => {
      if (!f.isDirectory && !f.directory) f.selected = checked;
    });
  }

  loadIndexedFiles($event) {
    if (!$event) return;

    this._searchService.loadFiles(this.searchConfig.indexedFilesDirectory).subscribe((files: FileModel[]) => this.indexedFiles = files || []);
  }

  upload($event: string) {
    this._searchService.upload(null, $event, this.rewriteConfig).subscribe(() => {
      this.selectDir('');
    });
  }

  fileDropped($event, reloadFiles = false) {
    this.fileWasDropped = $event;

    if (reloadFiles)
    {
      this._searchService.loadFiles('').subscribe((files: ExtendedFileModel[]) => this.files = files || []);
    }
  }

  removeFileFromList(file: FileModel) {
    if (this.indexedFiles.length > 0) {
      this.indexedFiles.forEach( (f, index) => {
        if(f.guid === file.guid) this.indexedFiles.splice(index, 1);
      });
    }
  }

  search($event: string) {
    const creds = [];
    creds.push(this.credentials);
    this._searchService.search(creds, $event).subscribe((result: SearchResult) => {
      this.searchResult = result;
    });
  }
}
