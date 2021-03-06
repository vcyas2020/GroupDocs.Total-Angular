import { AfterViewInit, OnInit } from '@angular/core';
import { MetadataService } from "./metadata.service";
import { FileDescription, FileModel, ModalService, ZoomService, UploadFilesService, NavigateService, PagePreloadService, PasswordService, FileCredentials, LoadingMaskService } from "@groupdocs.examples.angular/common-components";
import { MetadataConfig } from "./metadata-config";
import { MetadataConfigService } from "./metadata-config.service";
import { WindowService } from "@groupdocs.examples.angular/common-components";
import { AccordionService } from './accordion.service';
import { FilePropertyModel } from './metadata-models';
export declare class MetadataAppComponent implements OnInit, AfterViewInit {
    private _metadataService;
    private _modalService;
    private _navigateService;
    private _zoomService;
    private _loadingMaskService;
    private _accrodionService;
    private _windowService;
    title: string;
    files: FileModel[];
    file: FileDescription;
    metadataConfig: MetadataConfig;
    countPages: number;
    formatDisabled: boolean;
    credentials: FileCredentials;
    browseFilesModal: string;
    isLoading: boolean;
    _zoom: number;
    _pageWidth: number;
    _pageHeight: number;
    options: any;
    fileWasDropped: boolean;
    buildInProperties: FilePropertyModel[];
    defaultProperties: FilePropertyModel[];
    addedProperty: FilePropertyModel;
    removedProperty: FilePropertyModel;
    filePropertiesNames: string[];
    disabled: boolean;
    isDesktop: boolean;
    showSidePanel: boolean;
    disabledProperties: string[];
    constructor(_metadataService: MetadataService, _modalService: ModalService, configService: MetadataConfigService, uploadFilesService: UploadFilesService, _navigateService: NavigateService, _zoomService: ZoomService, pagePreloadService: PagePreloadService, passwordService: PasswordService, _loadingMaskService: LoadingMaskService, _accrodionService: AccordionService, _windowService: WindowService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    readonly rewriteConfig: boolean;
    readonly downloadConfig: boolean;
    readonly uploadConfig: boolean;
    readonly browseConfig: boolean;
    openModal(id: string): void;
    closeModal(id: string): void;
    selectDir($event: string): void;
    selectFile($event: string, password: string, modalId: string): void;
    preloadPages(start: number, end: number): void;
    upload($event: string): void;
    fileDropped($event: any): void;
    private ptToPx;
    private getFitToWidth;
    private getFitToHeight;
    zoomOptions(): {
        value: any;
        name: string;
        separator: boolean;
    }[];
    zoom: any;
    private refreshZoom;
    downloadFile(): void;
    private clearData;
    isDisabled(): boolean;
    save(): void;
    loadProperties(): void;
    hideSidePanel($event: Event): void;
    removeProperty($event: FilePropertyModel): void;
}
