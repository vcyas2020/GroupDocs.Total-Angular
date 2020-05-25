/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
export class Api {
}
Api.VIEWER_APP = '/viewer';
Api.SIGNATURE_APP = '/signature';
Api.ANNOTATION_APP = '/annotation';
Api.EDITOR_APP = '/editor';
Api.COMPARISON_APP = '/comparison';
Api.CONVERSION_APP = '/conversion';
Api.METADATA_APP = '/metadata';
Api.WATERMARK_APP = '/watermark';
Api.DEFAULT_API_ENDPOINT = window.location.href;
Api.LOAD_FILE_TREE = '/loadFileTree';
Api.LOAD_CONFIG = '/loadConfig';
Api.LOAD_DOCUMENT_DESCRIPTION = '/loadDocumentDescription';
Api.LOAD_DOCUMENT_PAGE = '/loadDocumentPage';
Api.LOAD_DOCUMENT_PROPERTIES = '/loadProperties';
Api.LOAD_DOCUMENT_PROPERTIES_NAMES = '/loadPropertiesNames';
Api.SAVE_PROPERTY = '/saveProperty';
Api.REMOVE_PROPERTY = '/removeProperty';
Api.ROTATE_DOCUMENT_PAGE = '/rotateDocumentPages';
Api.UPLOAD_DOCUMENTS = '/uploadDocument';
Api.DOWNLOAD_DOCUMENTS = '/downloadDocument';
Api.LOAD_PRINT = '/loadPrint';
Api.LOAD_PRINT_PDF = '/printPdf';
Api.LOAD_THUMBNAILS = '/loadThumbnails';
Api.LOAD_FORMATS = '/loadFormats';
Api.SAVE_FILE = '/saveFile';
Api.COMPARE_FILES = '/compare';
Api.CONVERT_FILE = '/convert';
Api.DELETE_SIGNATURE_FILE = '/deleteSignatureFile';
Api.SAVE_OPTICAL_CODE = '/saveOpticalCode';
Api.SAVE_TEXT = '/saveText';
Api.SAVE_IMAGE = '/saveImage';
Api.SAVE_STAMP = '/saveStamp';
Api.SIGN = '/sign';
Api.DOWNLOAD_SIGNED = '/downloadSigned';
Api.LOAD_SIGNATURE_IMAGE = '/loadSignatureImage';
Api.ANNOTATE = '/annotate';
Api.ADD_WATERMARK = '/addWatermark';
Api.httpOptionsJson = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};
Api.httpOptionsJsonResponseTypeBlob = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
    responseType: (/** @type {?} */ ('blob'))
};
if (false) {
    /** @type {?} */
    Api.VIEWER_APP;
    /** @type {?} */
    Api.SIGNATURE_APP;
    /** @type {?} */
    Api.ANNOTATION_APP;
    /** @type {?} */
    Api.EDITOR_APP;
    /** @type {?} */
    Api.COMPARISON_APP;
    /** @type {?} */
    Api.CONVERSION_APP;
    /** @type {?} */
    Api.METADATA_APP;
    /** @type {?} */
    Api.WATERMARK_APP;
    /** @type {?} */
    Api.DEFAULT_API_ENDPOINT;
    /** @type {?} */
    Api.LOAD_FILE_TREE;
    /** @type {?} */
    Api.LOAD_CONFIG;
    /** @type {?} */
    Api.LOAD_DOCUMENT_DESCRIPTION;
    /** @type {?} */
    Api.LOAD_DOCUMENT_PAGE;
    /** @type {?} */
    Api.LOAD_DOCUMENT_PROPERTIES;
    /** @type {?} */
    Api.LOAD_DOCUMENT_PROPERTIES_NAMES;
    /** @type {?} */
    Api.SAVE_PROPERTY;
    /** @type {?} */
    Api.REMOVE_PROPERTY;
    /** @type {?} */
    Api.ROTATE_DOCUMENT_PAGE;
    /** @type {?} */
    Api.UPLOAD_DOCUMENTS;
    /** @type {?} */
    Api.DOWNLOAD_DOCUMENTS;
    /** @type {?} */
    Api.LOAD_PRINT;
    /** @type {?} */
    Api.LOAD_PRINT_PDF;
    /** @type {?} */
    Api.LOAD_THUMBNAILS;
    /** @type {?} */
    Api.LOAD_FORMATS;
    /** @type {?} */
    Api.SAVE_FILE;
    /** @type {?} */
    Api.COMPARE_FILES;
    /** @type {?} */
    Api.CONVERT_FILE;
    /** @type {?} */
    Api.DELETE_SIGNATURE_FILE;
    /** @type {?} */
    Api.SAVE_OPTICAL_CODE;
    /** @type {?} */
    Api.SAVE_TEXT;
    /** @type {?} */
    Api.SAVE_IMAGE;
    /** @type {?} */
    Api.SAVE_STAMP;
    /** @type {?} */
    Api.SIGN;
    /** @type {?} */
    Api.DOWNLOAD_SIGNED;
    /** @type {?} */
    Api.LOAD_SIGNATURE_IMAGE;
    /** @type {?} */
    Api.ANNOTATE;
    /** @type {?} */
    Api.ADD_WATERMARK;
    /** @type {?} */
    Api.httpOptionsJson;
    /** @type {?} */
    Api.httpOptionsJsonResponseTypeBlob;
}
export class ConfigService {
    constructor() {
        this.apiEndpoint = Api.DEFAULT_API_ENDPOINT;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    set apiEndpoint(url) {
        this._apiEndpoint = url && url.trim().endsWith('/') ? url.substring(0, url.length - 1) : url;
    }
    /**
     * @param {?} app
     * @return {?}
     */
    getConfigEndpoint(app) {
        return (this.apiEndpoint.endsWith(app) ? this.apiEndpoint : this.apiEndpoint + app) + Api.LOAD_CONFIG;
    }
    /**
     * @return {?}
     */
    getViewerApiEndpoint() {
        return this._apiEndpoint.endsWith(Api.VIEWER_APP) ? this._apiEndpoint : this._apiEndpoint + Api.VIEWER_APP;
    }
    /**
     * @return {?}
     */
    getEditorApiEndpoint() {
        return this._apiEndpoint.trim().endsWith(Api.EDITOR_APP) ? this._apiEndpoint : this._apiEndpoint + Api.EDITOR_APP;
    }
    /**
     * @return {?}
     */
    getComparisonApiEndpoint() {
        return this._apiEndpoint.trim().endsWith(Api.COMPARISON_APP) ? this._apiEndpoint : this._apiEndpoint + Api.COMPARISON_APP;
    }
    /**
     * @return {?}
     */
    getConversionApiEndpoint() {
        return this._apiEndpoint.trim().endsWith(Api.CONVERSION_APP) ? this._apiEndpoint : this._apiEndpoint + Api.CONVERSION_APP;
    }
    /**
     * @return {?}
     */
    getMetadataApiEndpoint() {
        return this._apiEndpoint.trim().endsWith(Api.METADATA_APP) ? this._apiEndpoint : this._apiEndpoint + Api.METADATA_APP;
    }
    /**
     * @return {?}
     */
    getWatermarkApiEndpoint() {
        return this._apiEndpoint.trim().endsWith(Api.WATERMARK_APP) ? this._apiEndpoint : this._apiEndpoint + Api.WATERMARK_APP;
    }
    /**
     * @return {?}
     */
    get apiEndpoint() {
        return this._apiEndpoint;
    }
    /**
     * @return {?}
     */
    getSignatureApiEndpoint() {
        return this._apiEndpoint.endsWith(Api.SIGNATURE_APP) ? this._apiEndpoint : this._apiEndpoint + Api.SIGNATURE_APP;
    }
    /**
     * @return {?}
     */
    getAnnotationApiEndpoint() {
        return this._apiEndpoint.endsWith(Api.ANNOTATION_APP) ? this._apiEndpoint : this._apiEndpoint + Api.ANNOTATION_APP;
    }
}
ConfigService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigService.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype._apiEndpoint;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE1BQU0sT0FBTyxHQUFHOztBQUNBLGNBQVUsR0FBRyxTQUFTLENBQUM7QUFDdkIsaUJBQWEsR0FBRyxZQUFZLENBQUM7QUFDN0Isa0JBQWMsR0FBRyxhQUFhLENBQUM7QUFDL0IsY0FBVSxHQUFHLFNBQVMsQ0FBQztBQUN2QixrQkFBYyxHQUFHLGFBQWEsQ0FBQztBQUMvQixrQkFBYyxHQUFHLGFBQWEsQ0FBQztBQUMvQixnQkFBWSxHQUFHLFdBQVcsQ0FBQztBQUMzQixpQkFBYSxHQUFHLFlBQVksQ0FBQztBQUM3Qix3QkFBb0IsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM1QyxrQkFBYyxHQUFHLGVBQWUsQ0FBQztBQUNqQyxlQUFXLEdBQUcsYUFBYSxDQUFDO0FBQzVCLDZCQUF5QixHQUFHLDBCQUEwQixDQUFDO0FBQ3ZELHNCQUFrQixHQUFHLG1CQUFtQixDQUFDO0FBQ3pDLDRCQUF3QixHQUFHLGlCQUFpQixDQUFDO0FBQzdDLGtDQUE4QixHQUFHLHNCQUFzQixDQUFDO0FBQ3hELGlCQUFhLEdBQUcsZUFBZSxDQUFDO0FBQ2hDLG1CQUFlLEdBQUcsaUJBQWlCLENBQUM7QUFDcEMsd0JBQW9CLEdBQUcsc0JBQXNCLENBQUM7QUFDOUMsb0JBQWdCLEdBQUcsaUJBQWlCLENBQUM7QUFDckMsc0JBQWtCLEdBQUcsbUJBQW1CLENBQUM7QUFDekMsY0FBVSxHQUFHLFlBQVksQ0FBQztBQUMxQixrQkFBYyxHQUFHLFdB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Q0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUMxSCxDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCx1QkFBdUI7UUFDckIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNuSCxDQUFDOzs7O0lBRUQsd0JBQXdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDckgsQ0FBQzs7O1lBbkRGLFVBQVU7Ozs7Ozs7OztJQUdULHFDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBpIHtcclxuICBwdWJsaWMgc3RhdGljIFZJRVdFUl9BUFAgPSAnL3ZpZXdlcic7XHJcbiAgcHVibGljIHN0YXRpYyBTSUdOQVRVUkVfQVBQID0gJy9zaWduYXR1cmUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgQU5OT1RBVElPTl9BUFAgPSAnL2Fubm90YXRpb24nO1xyXG4gIHB1YmxpYyBzdGF0aWMgRURJVE9SX0FQUCA9ICcvZWRpdG9yJztcclxuICBwdWJsaWMgc3RhdGljIENPTVBBUklTT05fQVBQID0gJy9jb21wYXJpc29uJztcclxuICBwdWJsaWMgc3RhdGljIENPTlZFUlNJT05fQVBQID0gJy9jb252ZXJzaW9uJztcclxuICBwdWJsaWMgc3RhdGljIE1FVEFEQVRBX0FQUCA9ICcvbWV0YWRhdGEnO1xyXG4gIHB1YmxpYyBzdGF0aWMgV0FURVJNQVJLX0FQUCA9ICcvd2F0ZXJtYXJrJztcclxuICBwdWJsaWMgc3RhdGljIERFRkFVTFRfQVBJX0VORFBPSU5UID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgcHVibGljIHN0YXRpYyBMT0FEX0ZJTEVfVFJFRSA9ICcvbG9hZEZpbGVUcmVlJztcclxuICBwdWJsaWMgc3RhdGljIExPQURfQ09ORklHID0gJy9sb2FkQ29uZmlnJztcclxuICBwdWJsaWMgc3RhdGljIExPQURfRE9DVU1FTlRfREVTQ1JJUFRJT04gPSAnL2xvYWREb2N1bWVudERlc2NyaXB0aW9uJztcclxuICBwdWJsaWMgc3RhdGljIExPQURfRE9DVU1FTlRfUEFHRSA9ICcvbG9hZERvY3VtZW50UGFnZSc7XHJcbiAgcHVibGljIHN0YXRpYyBMT0FEX0RPQ1VNRU5UX1BST1BFUlRJRVMgPSAnL2xvYWRQcm9wZXJ0aWVzJztcclxuICBwdWJsaWMgc3RhdGljIExPQURfRE9DVU1FTlRfUFJPUEVSVElFU19OQU1FUyA9ICcvbG9hZFByb3BlcnRpZXNOYW1lcyc7XHJcbiAgcHVibGljIHN0YXRpYyBTQVZFX1BST1BFUlRZID0gJy9zYXZlUHJvcGVydHknO1xyXG4gIHB1YmxpYyBzdGF0aWMgUkVNT1ZFX1BST1BFUlRZID0gJy9yZW1vdmVQcm9wZXJ0eSc7XHJcbiAgcHVibGljIHN0YXRpYyBST1RBVEVfRE9DVU1FTlRfUEFHRSA9ICcvcm90YXRlRG9jdW1lbnRQYWdlcyc7XHJcbiAgcHVibGljIHN0YXRpYyBVUExPQURfRE9DVU1FTlRTID0gJy91cGxvYWREb2N1bWVudCc7XHJcbiAgcHVibGljIHN0YXRpYyBET1dOTE9BRF9ET0NVTUVOVFMgPSAnL2Rvd25sb2FkRG9jdW1lbnQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9QUklOVCA9ICcvbG9hZFByaW50JztcclxuICBwdWJsaWMgc3RhdGljIExPQURfUFJJTlRfUERGID0gJy9wcmludFBkZic7XHJcbiAgcHVibGljIHN0YXRpYyBMT0FEX1RIVU1CTkFJTFMgPSAnL2xvYWRUaHVtYm5haWxzJztcclxuICBwdWJsaWMgc3RhdGljIExPQURfRk9STUFUUyA9ICcvbG9hZEZvcm1hdHMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0FWRV9GSUxFID0gJy9zYXZlRmlsZSc7XHJcbiAgcHVibGljIHN0YXRpYyBDT01QQVJFX0ZJTEVTID0gJy9jb21wYXJlJztcclxuICBwdWJsaWMgc3RhdGljIENPTlZFUlRfRklMRSA9ICcvY29udmVydCc7XHJcbiAgcHVibGljIHN0YXRpYyBERUxFVEVfU0lHTkFUVVJFX0ZJTEUgPSAnL2RlbGV0ZVNpZ25hdHVyZUZpbGUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0FWRV9PUFRJQ0FMX0NPREUgPSAnL3NhdmVPcHRpY2FsQ29kZSc7XHJcbiAgcHVibGljIHN0YXRpYyBTQVZFX1RFWFQgPSAnL3NhdmVUZXh0JztcclxuICBwdWJsaWMgc3RhdGljIFNBVkVfSU1BR0UgPSAnL3NhdmVJbWFnZSc7XHJcbiAgcHVibGljIHN0YXRpYyBTQVZFX1NUQU1QID0gJy9zYXZlU3RhbXAnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0lHTiA9ICcvc2lnbic7XHJcbiAgcHVibGljIHN0YXRpYyBET1dOTE9BRF9TSUdORUQgPSAnL2Rvd25sb2FkU2lnbmVkJztcclxuICBwdWJsaWMgc3RhdGljIExPQURfU0lHTkFUVVJFX0lNQUdFID0gJy9sb2FkU2lnbmF0dXJlSW1hZ2UnO1xyXG4gIHB1YmxpYyBzdGF0aWMgQU5OT1RBVEUgPSAnL2Fubm90YXRlJztcclxuICBwdWJsaWMgc3RhdGljIEFERF9XQVRFUk1BUksgPSAnL2FkZFdhdGVybWFyayc7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaHR0cE9wdGlvbnNKc29uID0ge1xyXG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0pXHJcbiAgfTtcclxuICBwdWJsaWMgc3RhdGljIGh0dHBPcHRpb25zSnNvblJlc3BvbnNlVHlwZUJsb2IgPSB7XHJcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSksXHJcbiAgICByZXNwb25zZVR5cGU6ICdibG9iJyBhcyAnYmxvYidcclxuICB9O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBfYXBpRW5kcG9pbnQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmFwaUVuZHBvaW50ID0gQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UO1xyXG4gIH1cclxuXHJcbiAgc2V0IGFwaUVuZHBvaW50KHVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9hcGlFbmRwb2ludCA9IHVybCAmJiB1cmwudHJpbSgpLmVuZHNXaXRoKCcvJykgPyB1cmwuc3Vic3RyaW5nKDAsIHVybC5sZW5ndGggLSAxKSA6IHVybDtcclxuICB9XHJcblxyXG4gIGdldENvbmZpZ0VuZHBvaW50KGFwcCkge1xyXG4gICAgcmV0dXJuICh0aGlzLmFwaUVuZHBvaW50LmVuZHNXaXRoKGFwcCkgPyB0aGlzLmFwaUVuZHBvaW50IDogdGhpcy5hcGlFbmRwb2ludCArIGFwcCkgKyBBcGkuTE9BRF9DT05GSUc7XHJcbiAgfVxyXG5cclxuICBnZXRWaWV3ZXJBcGlFbmRwb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC5lbmRzV2l0aChBcGkuVklFV0VSX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLlZJRVdFUl9BUFA7XHJcbiAgfVxyXG5cclxuICBnZXRFZGl0b3JBcGlFbmRwb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC50cmltKCkuZW5kc1dpdGgoQXBpLkVESVRPUl9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5FRElUT1JfQVBQO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29tcGFyaXNvbkFwaUVuZHBvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LnRyaW0oKS5lbmRzV2l0aChBcGkuQ09NUEFSSVNPTl9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5DT01QQVJJU09OX0FQUDtcclxuICB9XHJcblxyXG4gIGdldENvbnZlcnNpb25BcGlFbmRwb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC50cmltKCkuZW5kc1dpdGgoQXBpLkNPTlZFUlNJT05fQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuQ09OVkVSU0lPTl9BUFA7XHJcbiAgfVxyXG5cclxuICBnZXRNZXRhZGF0YUFwaUVuZHBvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LnRyaW0oKS5lbmRzV2l0aChBcGkuTUVUQURBVEFfQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuTUVUQURBVEFfQVBQO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2F0ZXJtYXJrQXBpRW5kcG9pbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQudHJpbSgpLmVuZHNXaXRoKEFwaS5XQVRFUk1BUktfQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuV0FURVJNQVJLX0FQUDtcclxuICB9XHJcblxyXG4gIGdldCBhcGlFbmRwb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludDtcclxuICB9XHJcblxyXG4gIGdldFNpZ25hdHVyZUFwaUVuZHBvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LmVuZHNXaXRoKEFwaS5TSUdOQVRVUkVfQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuU0lHTkFUVVJFX0FQUDtcclxuICB9XHJcblxyXG4gIGdldEFubm90YXRpb25BcGlFbmRwb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC5lbmRzV2l0aChBcGkuQU5OT1RBVElPTl9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5BTk5PVEFUSU9OX0FQUDtcclxuICB9XHJcbn1cclxuIl19