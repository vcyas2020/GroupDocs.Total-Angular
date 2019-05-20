import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {NavigateService, PageModel} from "@groupdocs-total-angular/common-components";

@Component({
  selector: 'gd-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.less']
})
export class ThumbnailsComponent implements OnInit {

  @Input() pages: PageModel[];
  @Input() isHtmlMode: boolean;

  constructor(private _navigateService: NavigateService) {
  }

  ngOnInit() {
  }

  imgData(data: string) {
    const dataImagePngBase64 = 'data:image/png;base64,';
    if (!this.isHtmlMode) {
      return dataImagePngBase64 + data;
    }
    return dataImagePngBase64;
  }

  openPage(pageNumber: number) {
    this._navigateService.navigateTo(pageNumber);
  }
}