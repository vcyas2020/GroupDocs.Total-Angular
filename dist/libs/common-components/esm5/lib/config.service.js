/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
var Api = /** @class */ (function () {
    function Api() {
    }
    Api.VIEWER_APP = '/viewer';
    Api.SIGNATURE_APP = '/signature';
    Api.ANNOTATION_APP = '/annotation';
    Api.SEARCH_APP = '/search';
    Api.EDITOR_APP = '/editor';
    Api.COMPARISON_APP = '/comparison';
    Api.CONVERSION_APP = '/conversion';
    Api.METADATA_APP = '/metadata';
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
    Api.REMOVE_FROM_INDEX = '/removeFromIndex';
    Api.SAVE_OPTICAL_CODE = '/saveOpticalCode';
    Api.SAVE_TEXT = '/saveText';
    Api.SAVE_IMAGE = '/saveImage';
    Api.SAVE_STAMP = '/saveStamp';
    Api.SIGN = '/sign';
    Api.DOWNLOAD_SIGNED = '/downloadSigned';
    Api.LOAD_SIGNATURE_IMAGE = '/loadSignatureImage';
    Api.ANNOTATE = '/annotate';
    Api.SEARCH = '/search';
    Api.ADD_FILES_TO_INDEX = '/addFilesToIndex';
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
    return Api;
}());
export { Api };
if (false) {
    /** @type {?} */
    Api.VIEWER_APP;
    /** @type {?} */
    Api.SIGNATURE_APP;
    /** @type {?} */
    Api.ANNOTATION_APP;
    /** @type {?} */
    Api.SEARCH_APP;
    /** @type {?} */
    Api.EDITOR_APP;
    /** @type {?} */
    Api.COMPARISON_APP;
    /** @type {?} */
    Api.CONVERSION_APP;
    /** @type {?} */
    Api.METADATA_APP;
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
    Api.REMOVE_FROM_INDEX;
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
    Api.SEARCH;
    /** @type {?} */
    Api.ADD_FILES_TO_INDEX;
    /** @type {?} */
    Api.httpOptionsJson;
    /** @type {?} */
    Api.httpOptionsJsonResponseTypeBlob;
}
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.apiEndpoint = Api.DEFAULT_API_ENDPOINT;
    }
    Object.defineProperty(ConfigService.prototype, "apiEndpoint", {
        get: /**
         * @return {?}
         */
        function () {
            return this._apiEndpoint;
        },
        set: /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            this._apiEndpoint = url && url.trim().endsWith('/') ? url.substring(0, url.length - 1) : url;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} app
     * @return {?}
     */
    ConfigService.prototype.getConfigEndpoint = /**
     * @param {?} app
     * @return {?}
     */
    function (app) {
        return (this.apiEndpoint.endsWith(app) ? this.apiEndpoint : this.apiEndpoint + app) + Api.LOAD_CONFIG;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getViewerApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.endsWith(Api.VIEWER_APP) ? this._apiEndpoint : this._apiEndpoint + Api.VIEWER_APP;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getEditorApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.trim().endsWith(Api.EDITOR_APP) ? this._apiEndpoint : this._apiEndpoint + Api.EDITOR_APP;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getComparisonApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.trim().endsWith(Api.COMPARISON_APP) ? this._apiEndpoint : this._apiEndpoint + Api.COMPARISON_APP;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getConversionApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.trim().endsWith(Api.CONVERSION_APP) ? this._apiEndpoint : this._apiEndpoint + Api.CONVERSION_APP;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getMetadataApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.trim().endsWith(Api.METADATA_APP) ? this._apiEndpoint : this._apiEndpoint + Api.METADATA_APP;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getSignatureApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.endsWith(Api.SIGNATURE_APP) ? this._apiEndpoint : this._apiEndpoint + Api.SIGNATURE_APP;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getAnnotationApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.endsWith(Api.ANNOTATION_APP) ? this._apiEndpoint : this._apiEndpoint + Api.ANNOTATION_APP;
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getSearchApiEndpoint = /**
     * @return {?}
     */
    function () {
        return this._apiEndpoint.endsWith(Api.SEARCH_APP) ? this._apiEndpoint : this._apiEndpoint + Api.SEARCH_APP;
    };
    ConfigService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return []; };
    return ConfigService;
}());
export { ConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype._apiEndpoint;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDO0lBQUE7SUFvREEsQ0FBQztJQW5EZSxjQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ3ZCLGlCQUFhLEdBQUcsWUFBWSxDQUFDO0lBQzdCLGtCQUFjLEdBQUcsYUFBYSxDQUFDO0lBQy9CLGNBQVUsR0FBRyxTQUFTLENBQUM7SUFDdkIsY0FBVSxHQUFHLFNBQVMsQ0FBQztJQUN2QixrQkFBYyxHQUFHLGFBQWEsQ0FBQztJQUMvQixrQkFBYyxHQUFHLGFBQWEsQ0FBQztJQUMvQixnQkFBWSxHQUFHLFdBQVcsQ0FBQztJQUMzQix3QkFBb0IsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUM1QyxrQkFBYyxHQUFHLGVBQWUsQ0FBQztJQUNqQyxlQUFXLEdBQUcsYUFBYSxDQUFDO0lBQzVCLDZCQUF5QixHQUFHLDBCQUEwQixDQUFDO0lBQ3ZELHNCQUFrQixHQUFHLG1CQUFtQixDQUFDO0lBQ3pDLDRCQUF3QixHQUFHLGlCQUFpQixDQUFDO0lBQzdDLGtDQUE4QixHQUFHLHNCQUFzQixDQUFDO0lBQ3hELGlCQUFhLEdBQUcsZUFBZSxDQUFDO0lBQ2hDLG1CQUFlLEdBQUcsaUJBQWlCLENBQUM7SUFDcEMsd0JBQW9CLEdBQUcsc0JBQXNCLENBQUM7SUFDOUMsb0JBQWdCLEdBQUcsaUJBQWlCLENBQUM7SUFDckMsc0JBQWtCLEdBQUcsbUJBQW1CLENBQUM7SUFDekMsY0FBVSxHQUFHLFlBQVksQ0FBQztJQUMxQixrQkFBYyxHQUFHLFdB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WUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztJQUN4SCxDQUFDOzs7O0lBTUQsK0NBQXVCOzs7SUFBdkI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ25ILENBQUM7Ozs7SUFFRCxnREFBd0I7OztJQUF4QjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDckgsQ0FBQzs7OztJQUVELDRDQUFvQjs7O0lBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUM3RyxDQUFDOztnQkFuREYsVUFBVTs7OztJQW9EWCxvQkFBQztDQUFBLEFBcERELElBb0RDO1NBbkRZLGFBQWE7Ozs7OztJQUV4QixxQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwaSB7XHJcbiAgcHVibGljIHN0YXRpYyBWSUVXRVJfQVBQID0gJy92aWV3ZXInO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0lHTkFUVVJFX0FQUCA9ICcvc2lnbmF0dXJlJztcclxuICBwdWJsaWMgc3RhdGljIEFOTk9UQVRJT05fQVBQID0gJy9hbm5vdGF0aW9uJztcclxuICBwdWJsaWMgc3RhdGljIFNFQVJDSF9BUFAgPSAnL3NlYXJjaCc7XHJcbiAgcHVibGljIHN0YXRpYyBFRElUT1JfQVBQID0gJy9lZGl0b3InO1xyXG4gIHB1YmxpYyBzdGF0aWMgQ09NUEFSSVNPTl9BUFAgPSAnL2NvbXBhcmlzb24nO1xyXG4gIHB1YmxpYyBzdGF0aWMgQ09OVkVSU0lPTl9BUFAgPSAnL2NvbnZlcnNpb24nO1xyXG4gIHB1YmxpYyBzdGF0aWMgTUVUQURBVEFfQVBQID0gJy9tZXRhZGF0YSc7XHJcbiAgcHVibGljIHN0YXRpYyBERUZBVUxUX0FQSV9FTkRQT0lOVCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9GSUxFX1RSRUUgPSAnL2xvYWRGaWxlVHJlZSc7XHJcbiAgcHVibGljIHN0YXRpYyBMT0FEX0NPTkZJRyA9ICcvbG9hZENvbmZpZyc7XHJcbiAgcHVibGljIHN0YXRpYyBMT0FEX0RPQ1VNRU5UX0RFU0NSSVBUSU9OID0gJy9sb2FkRG9jdW1lbnREZXNjcmlwdGlvbic7XHJcbiAgcHVibGljIHN0YXRpYyBMT0FEX0RPQ1VNRU5UX1BBR0UgPSAnL2xvYWREb2N1bWVudFBhZ2UnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9ET0NVTUVOVF9QUk9QRVJUSUVTID0gJy9sb2FkUHJvcGVydGllcyc7XHJcbiAgcHVibGljIHN0YXRpYyBMT0FEX0RPQ1VNRU5UX1BST1BFUlRJRVNfTkFNRVMgPSAnL2xvYWRQcm9wZXJ0aWVzTmFtZXMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0FWRV9QUk9QRVJUWSA9ICcvc2F2ZVByb3BlcnR5JztcclxuICBwdWJsaWMgc3RhdGljIFJFTU9WRV9QUk9QRVJUWSA9ICcvcmVtb3ZlUHJvcGVydHknO1xyXG4gIHB1YmxpYyBzdGF0aWMgUk9UQVRFX0RPQ1VNRU5UX1BBR0UgPSAnL3JvdGF0ZURvY3VtZW50UGFnZXMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgVVBMT0FEX0RPQ1VNRU5UUyA9ICcvdXBsb2FkRG9jdW1lbnQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRE9XTkxPQURfRE9DVU1FTlRTID0gJy9kb3dubG9hZERvY3VtZW50JztcclxuICBwdWJsaWMgc3RhdGljIExPQURfUFJJTlQgPSAnL2xvYWRQcmludCc7XHJcbiAgcHVibGljIHN0YXRpYyBMT0FEX1BSSU5UX1BERiA9ICcvcHJpbnRQZGYnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9BRF9USFVNQk5BSUxTID0gJy9sb2FkVGh1bWJuYWlscyc7XHJcbiAgcHVibGljIHN0YXRpYyBMT0FEX0ZPUk1BVFMgPSAnL2xvYWRGb3JtYXRzJztcclxuICBwdWJsaWMgc3RhdGljIFNBVkVfRklMRSA9ICcvc2F2ZUZpbGUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgQ09NUEFSRV9GSUxFUyA9ICcvY29tcGFyZSc7XHJcbiAgcHVibGljIHN0YXRpYyBDT05WRVJUX0ZJTEUgPSAnL2NvbnZlcnQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgREVMRVRFX1NJR05BVFVSRV9GSUxFID0gJy9kZWxldGVTaWduYXR1cmVGaWxlJztcclxuICBwdWJsaWMgc3RhdGljIFJFTU9WRV9GUk9NX0lOREVYID0gJy9yZW1vdmVGcm9tSW5kZXgnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0FWRV9PUFRJQ0FMX0NPREUgPSAnL3NhdmVPcHRpY2FsQ29kZSc7XHJcbiAgcHVibGljIHN0YXRpYyBTQVZFX1RFWFQgPSAnL3NhdmVUZXh0JztcclxuICBwdWJsaWMgc3RhdGljIFNBVkVfSU1BR0UgPSAnL3NhdmVJbWFnZSc7XHJcbiAgcHVibGljIHN0YXRpYyBTQVZFX1NUQU1QID0gJy9zYXZlU3RhbXAnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0lHTiA9ICcvc2lnbic7XHJcbiAgcHVibGljIHN0YXRpYyBET1dOTE9BRF9TSUdORUQgPSAnL2Rvd25sb2FkU2lnbmVkJztcclxuICBwdWJsaWMgc3RhdGljIExPQURfU0lHTkFUVVJFX0lNQUdFID0gJy9sb2FkU2lnbmF0dXJlSW1hZ2UnO1xyXG4gIHB1YmxpYyBzdGF0aWMgQU5OT1RBVEUgPSAnL2Fubm90YXRlJztcclxuICBwdWJsaWMgc3RhdGljIFNFQVJDSCA9ICcvc2VhcmNoJztcclxuICBwdWJsaWMgc3RhdGljIEFERF9GSUxFU19UT19JTkRFWCA9ICcvYWRkRmlsZXNUb0luZGV4JztcclxuXHJcbiAgcHVibGljIHN0YXRpYyBodHRwT3B0aW9uc0pzb24gPSB7XHJcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSlcclxuICB9O1xyXG4gIHB1YmxpYyBzdGF0aWMgaHR0cE9wdGlvbnNKc29uUmVzcG9uc2VUeXBlQmxvYiA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9KSxcclxuICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InIGFzICdibG9iJ1xyXG4gIH07XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIF9hcGlFbmRwb2ludDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYXBpRW5kcG9pbnQgPSBBcGkuREVGQVVMVF9BUElfRU5EUE9JTlQ7XHJcbiAgfVxyXG5cclxuICBzZXQgYXBpRW5kcG9pbnQodXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2FwaUVuZHBvaW50ID0gdXJsICYmIHVybC50cmltKCkuZW5kc1dpdGgoJy8nKSA/IHVybC5zdWJzdHJpbmcoMCwgdXJsLmxlbmd0aCAtIDEpIDogdXJsO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29uZmlnRW5kcG9pbnQoYXBwKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuYXBpRW5kcG9pbnQuZW5kc1dpdGgoYXBwKSA/IHRoaXMuYXBpRW5kcG9pbnQgOiB0aGlzLmFwaUVuZHBvaW50ICsgYXBwKSArIEFwaS5MT0FEX0NPTkZJRztcclxuICB9XHJcblxyXG4gIGdldFZpZXdlckFwaUVuZHBvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LmVuZHNXaXRoKEFwaS5WSUVXRVJfQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuVklFV0VSX0FQUDtcclxuICB9XHJcblxyXG4gIGdldEVkaXRvckFwaUVuZHBvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LnRyaW0oKS5lbmRzV2l0aChBcGkuRURJVE9SX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLkVESVRPUl9BUFA7XHJcbiAgfVxyXG5cclxuICBnZXRDb21wYXJpc29uQXBpRW5kcG9pbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQudHJpbSgpLmVuZHNXaXRoKEFwaS5DT01QQVJJU09OX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLkNPTVBBUklTT05fQVBQO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udmVyc2lvbkFwaUVuZHBvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwaUVuZHBvaW50LnRyaW0oKS5lbmRzV2l0aChBcGkuQ09OVkVSU0lPTl9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5DT05WRVJTSU9OX0FQUDtcclxuICB9XHJcblxyXG4gIGdldE1ldGFkYXRhQXBpRW5kcG9pbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQudHJpbSgpLmVuZHNXaXRoKEFwaS5NRVRBREFUQV9BUFApID8gdGhpcy5fYXBpRW5kcG9pbnQgOiB0aGlzLl9hcGlFbmRwb2ludCArIEFwaS5NRVRBREFUQV9BUFA7XHJcbiAgfVxyXG5cclxuICBnZXQgYXBpRW5kcG9pbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRTaWduYXR1cmVBcGlFbmRwb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC5lbmRzV2l0aChBcGkuU0lHTkFUVVJFX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLlNJR05BVFVSRV9BUFA7XHJcbiAgfVxyXG5cclxuICBnZXRBbm5vdGF0aW9uQXBpRW5kcG9pbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXBpRW5kcG9pbnQuZW5kc1dpdGgoQXBpLkFOTk9UQVRJT05fQVBQKSA/IHRoaXMuX2FwaUVuZHBvaW50IDogdGhpcy5fYXBpRW5kcG9pbnQgKyBBcGkuQU5OT1RBVElPTl9BUFA7XHJcbiAgfVxyXG5cclxuICBnZXRTZWFyY2hBcGlFbmRwb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hcGlFbmRwb2ludC5lbmRzV2l0aChBcGkuU0VBUkNIX0FQUCkgPyB0aGlzLl9hcGlFbmRwb2ludCA6IHRoaXMuX2FwaUVuZHBvaW50ICsgQXBpLlNFQVJDSF9BUFA7XHJcbiAgfVxyXG59XHJcbiJdfQ==