/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { SignatureService } from "./signature.service";
import { ModalService, UploadFilesService, NavigateService, PagePreloadService, ZoomService, RenderPrintService, FileUtil, PasswordService, CommonModals, HostingDynamicComponentService, AddDynamicComponentService, OnCloseService, ExceptionMessageService, WindowService, Utils, TabActivatorService } from "@groupdocs.examples.angular/common-components";
import { SignatureConfigService } from "./signature-config.service";
import { AddedSignature, DraggableSignature, Position, SignatureData, SignatureProps, SignatureType } from "./signature-models";
import { SelectSignatureService } from "./select-signature.service";
import { Signature } from "./signature/signature.component";
import { DragSignatureService } from "./drag-signature.service";
import { RemoveSignatureService } from "./remove-signature.service";
import * as jquery from 'jquery';
import { ActiveSignatureService } from "./active-signature.service";
import { SignaturesHolderService } from "./signatures-holder.service";
import { SignatureTabActivatorService } from "./signature-tab-activator.service";
import 'hammerjs';
import { CopySignatureService } from "./copy-signature.service";
/** @type {?} */
const $ = jquery;
export class SignatureAppComponent {
    /**
     * @param {?} _signatureService
     * @param {?} _modalService
     * @param {?} configService
     * @param {?} uploadFilesService
     * @param {?} _navigateService
     * @param {?} _zoomService
     * @param {?} pagePreloadService
     * @param {?} _renderPrintService
     * @param {?} passwordService
     * @param {?} _windowService
     * @param {?} _selectSignatureService
     * @param {?} _signatureTabActivationService
     * @param {?} _hostingComponentsService
     * @param {?} _addDynamicComponentService
     * @param {?} _dragSignatureService
     * @param {?} _onCloseService
     * @param {?} removeSignatureService
     * @param {?} _activeSignatureService
     * @param {?} _excMessageService
     * @param {?} _signaturesHolderService
     * @param {?} _tabActivatorService
     * @param {?} copySignatureService
     */
    constructor(_signatureService, _modalService, configService, uploadFilesService, _navigateService, _zoomService, pagePreloadService, _renderPrintService, passwordService, _windowService, _selectSignatureService, _signatureTabActivationService, _hostingComponentsService, _addDynamicComponentService, _dragSignatureService, _onCloseService, removeSignatureService, _activeSignatureService, _excMessageService, _signaturesHolderService, _tabActivatorService, copySignatureService) {
        this._signatureService = _signatureService;
        this._modalService = _modalService;
        this._navigateService = _navigateService;
        this._zoomService = _zoomService;
        this._renderPrintService = _renderPrintService;
        this._windowService = _windowService;
        this._selectSignatureService = _selectSignatureService;
        this._signatureTabActivationService = _signatureTabActivationService;
        this._hostingComponentsService = _hostingComponentsService;
        this._addDynamicComponentService = _addDynamicComponentService;
        this._dragSignatureService = _dragSignatureService;
        this._onCloseService = _onCloseService;
        this._activeSignatureService = _activeSignatureService;
        this._excMessageService = _excMessageService;
        this._signaturesHolderService = _signaturesHolderService;
        this._tabActivatorService = _tabActivatorService;
        this.title = 'signature';
        this.files = [];
        this.countPages = 0;
        this.formatDisabled = !this.file;
        this.browseFilesModal = CommonModals.BrowseFiles;
        this.signatureTypes = [
            SignatureType.TEXT,
            SignatureType.IMAGE,
            SignatureType.DIGITAL,
            SignatureType.QR_CODE,
            SignatureType.BAR_CODE,
            SignatureType.STAMP,
            SignatureType.HAND,
        ];
        this.signatureTypeCodes = [
            SignatureType.QR_CODE,
            SignatureType.BAR_CODE,
        ];
        this.signatureComponents = new Map();
        this.fileWasDropped = false;
        this._tabActivatorService.activeTabChange.subscribe((/**
         * @param {?} tabId
         * @return {?}
         */
        (tabId) => {
            if (tabId === '1') {
                if (this.activeSignatureTab) {
                    this._signatureTabActivationService.changeActiveTab(this.activeSignatureTab);
                }
                this.activeSignatureTab = null;
            }
        }));
        copySignatureService.copySignature.subscribe((/**
         * @param {?} copySign
         * @return {?}
         */
        (copySign) => {
            /** @type {?} */
            const componentRef = this.signatureComponents.get(copySign.id);
            if (componentRef) {
                // @ts-ignore
                /** @type {?} */
                const comp = ((/** @type {?} */ (componentRef))).instance;
                /** @type {?} */
                const compPage = comp.data.number;
                /** @type {?} */
                const sign = new DraggableSignature();
                sign.type = comp.type;
                sign.guid = copySign.guid;
                sign.position = comp.position;
                /** @type {?} */
                const addedSignature = new AddedSignature();
                addedSignature.guid = copySign.guid;
                addedSignature.data = comp.data.data;
                if (comp.data.props) {
                    addedSignature.props = comp.data.props;
                }
                else {
                    addedSignature.width = comp.data.width;
                    addedSignature.height = comp.data.height;
                }
                for (const page of this.file.pages) {
                    if (page.number !== compPage) {
                        addedSignature.number = page.number;
                        sign.pageNumber = page.number;
                        /** @type {?} */
                        const id = this.addSignatureComponent(addedSignature, sign, page);
                        this._signaturesHolderService.addId(sign.guid, id);
                    }
                }
            }
        }));
        copySignatureService.changesSignature.subscribe((/**
         * @param {?} copyChanges
         * @return {?}
         */
        (copyChanges) => {
            /** @type {?} */
            const componentRef = this.signatureComponents.get(copyChanges.id);
            if (componentRef) {
                /** @type {?} */
                const ids = this._signaturesHolderService.get(copyChanges.guid);
                for (const id of ids) {
                    /** @type {?} */
                    const compRef = this.signatureComponents.get(id);
                    if (compRef) {
                        // @ts-ignore
                        /** @type {?} */
                        const comp = ((/** @type {?} */ (compRef))).instance;
                        if (comp.id !== copyChanges.id) {
                            comp.data.width = copyChanges.width;
                            comp.data.height = copyChanges.height;
                            comp.data.position = copyChanges.position;
                            comp.data.props = copyChanges.props;
                        }
                    }
                }
            }
        }));
        removeSignatureService.removeSignature.subscribe((/**
         * @param {?} del
         * @return {?}
         */
        (del) => {
            /** @type {?} */
            const ids = this._signaturesHolderService.get(del.guid);
            for (const id of ids) {
                if (del.type === SignatureType.DIGITAL.id || del.id === id) {
                    /** @type {?} */
                    const componentRef = this.signatureComponents.get(id);
                    if (componentRef) {
                        componentRef.destroy();
                    }
                    this.signatureComponents.delete(id);
                    this._signaturesHolderService.remove(del.guid, id);
                }
            }
        }));
        configService.updatedConfig.subscribe((/**
         * @param {?} signatureConfig
         * @return {?}
         */
        (signatureConfig) => {
            this.signatureConfig = signatureConfig;
        }));
        uploadFilesService.uploadsChange.subscribe((/**
         * @param {?} uploads
         * @return {?}
         */
        (uploads) => {
            if (uploads) {
                /** @type {?} */
                let i;
                for (i = 0; i < uploads.length; i++) {
                    this._signatureService.upload(uploads.item(i), '', this.rewriteConfig, null).subscribe((/**
                     * @param {?} obj
                     * @return {?}
                     */
                    (obj) => {
                        this.fileWasDropped ? this.selectFile(obj.guid, '', '') : this.selectDir('');
                    }));
                }
            }
        }));
        pagePreloadService.checkPreload.subscribe((/**
         * @param {?} page
         * @return {?}
         */
        (page) => {
            if (this.preloadPageCountConfig !== 0) {
                for (let i = page; i < page + 2; i++) {
                    if (i > 0 && i <= this.countPages && !this.file.pages[i - 1].data) {
                        this.preloadPages(i, i);
                    }
                }
            }
        }));
        passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        (pass) => {
            this.selectFile(this.credentials.guid, pass, CommonModals.PasswordRequired);
        }));
        _selectSignatureService.selectSignature.subscribe((/**
         * @param {?} sign
         * @return {?}
         */
        (sign) => {
            this.selectSignature(sign);
        }));
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.isDesktop = _windowService.isDesktop();
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.defaultDocumentConfig()) {
            this.isLoading = true;
            this.selectFile(this.defaultDocumentConfig(), "", "");
        }
    }
    /**
     * @return {?}
     */
    get rewriteConfig() {
        return this.signatureConfig ? this.signatureConfig.rewrite : true;
    }
    /**
     * @return {?}
     */
    get zoomConfig() {
        return false;
    }
    /**
     * @return {?}
     */
    get pageSelectorConfig() {
        return this.signatureConfig ? this.signatureConfig.pageSelector : true;
    }
    /**
     * @return {?}
     */
    get preloadPageCountConfig() {
        return this.signatureConfig ? this.signatureConfig.preloadPageCount : 0;
    }
    /**
     * @return {?}
     */
    get downloadConfig() {
        return this.signatureConfig ? this.signatureConfig.download : true;
    }
    /**
     * @return {?}
     */
    get downloadOriginalConfig() {
        return this.signatureConfig ? this.signatureConfig.downloadOriginal : true;
    }
    /**
     * @return {?}
     */
    get downloadSingedConfig() {
        return this.signatureConfig ? this.signatureConfig.downloadSigned : true;
    }
    /**
     * @return {?}
     */
    get uploadConfig() {
        return this.signatureConfig ? this.signatureConfig.upload : true;
    }
    /**
     * @private
     * @return {?}
     */
    defaultDocumentConfig() {
        return this.signatureConfig ? this.signatureConfig.defaultDocument : "";
    }
    /**
     * @return {?}
     */
    get printConfig() {
        return this.signatureConfig ? this.signatureConfig.print : true;
    }
    /**
     * @return {?}
     */
    get browseConfig() {
        return this.signatureConfig ? this.signatureConfig.browse : true;
    }
    /**
     * @return {?}
     */
    get htmlModeConfig() {
        return false;
    }
    /**
     * @return {?}
     */
    get enableRightClickConfig() {
        return this.signatureConfig ? this.signatureConfig.enableRightClick : true;
    }
    /**
     * @return {?}
     */
    get textSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.textSignature : true;
    }
    /**
     * @return {?}
     */
    get imageSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.imageSignature : true;
    }
    /**
     * @return {?}
     */
    get digitalSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.digitalSignature : true;
    }
    /**
     * @return {?}
     */
    get qrCodeSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.qrCodeSignature : true;
    }
    /**
     * @return {?}
     */
    get barCodeSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.barCodeSignature : true;
    }
    /**
     * @return {?}
     */
    get stampSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.stampSignature : true;
    }
    /**
     * @return {?}
     */
    get handSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.handSignature : true;
    }
    /**
     * @return {?}
     */
    get currentPage() {
        return this._navigateService.currentPage;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    openModal(id) {
        this._modalService.open(id);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    closeModal(id) {
        this._modalService.close(id);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectDir($event) {
        this._signatureService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        (files) => this.files = files || []));
    }
    /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    selectFile($event, password, modalId) {
        this.credentials = { guid: $event, password: password };
        this.file = null;
        this._signatureService.loadFile(this.credentials).subscribe((/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
            this.file = file;
            this.formatDisabled = !this.file;
            if (file) {
                /** @type {?} */
                const preloadPageCount = this.preloadPageCountConfig;
                /** @type {?} */
                const countPages = file.pages ? file.pages.length : 0;
                if (preloadPageCount > 0) {
                    this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                }
                this._navigateService.countPages = countPages;
                this._navigateService.currentPage = 1;
                this.countPages = countPages;
                this.cleanSignatures();
            }
        }));
        if (modalId) {
            this._modalService.close(modalId);
        }
        this.clearData();
    }
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    preloadPages(start, end) {
        for (let i = start; i <= end; i++) {
            this._signatureService.loadPage(this.credentials, i).subscribe((/**
             * @param {?} page
             * @return {?}
             */
            (page) => {
                this.file.pages[i - 1] = page;
            }));
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    upload($event) {
        this._signatureService.upload(null, $event, this.rewriteConfig, null).subscribe((/**
         * @return {?}
         */
        () => {
            this.selectDir('');
        }));
    }
    /**
     * @return {?}
     */
    downloadFile() {
        if (this.formatDisabled)
            return;
        window.location.assign(this._signatureService.getDownloadUrl(this.credentials));
    }
    /**
     * @private
     * @return {?}
     */
    clearData() {
        if (!this.file || !this.file.pages) {
            return;
        }
        for (const page of this.file.pages) {
            page.data = null;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onRightClick($event) {
        return this.enableRightClickConfig;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getSignatureTypeConfig(id) {
        switch (id) {
            case SignatureType.TEXT.id:
                return this.textSignatureConfig;
            case SignatureType.IMAGE.id:
                return this.imageSignatureConfig;
            case SignatureType.DIGITAL.id:
                return this.digitalSignatureConfig;
            case SignatureType.QR_CODE.id:
                return this.qrCodeSignatureConfig;
            case SignatureType.BAR_CODE.id:
                return this.barCodeSignatureConfig;
            case SignatureType.STAMP.id:
                return this.stampSignatureConfig;
            case SignatureType.HAND.id:
                return this.handSignatureConfig;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    dragOver($event) {
        $event.preventDefault();
        $event.stopPropagation();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    dropSignature($event) {
        $event.preventDefault();
        $event.stopPropagation();
        /** @type {?} */
        const position = Utils.getMousePosition($event);
        /** @type {?} */
        const currentPage = document.elementFromPoint(position.x, position.y);
        if (currentPage && $(currentPage).parent().parent() && $(currentPage).parent().parent().parent().hasClass("page")) {
            /** @type {?} */
            const documentPage = $(currentPage).parent().parent()[0];
            /** @type {?} */
            const left = position.x - $(documentPage).offset().left;
            /** @type {?} */
            const top = position.y - $(documentPage).offset().top;
            /** @type {?} */
            const currentPosition = new Position(left, top);
            /** @type {?} */
            const sign = this._dragSignatureService.sign;
            if (sign) {
                /** @type {?} */
                const id = $(currentPage).parent().attr('id');
                if (id) {
                    /** @type {?} */
                    const split = id.split('-');
                    sign.pageNumber = split.length === 2 ? parseInt(split[1], 10) : sign.pageNumber;
                }
                sign.position = currentPosition;
                this.selectSignature(sign);
                this._dragSignatureService.sign = null;
            }
        }
    }
    /**
     * @private
     * @param {?} sign
     * @return {?}
     */
    selectSignature(sign) {
        if (sign.type === SignatureType.DIGITAL.id) {
            /** @type {?} */
            const addedSignature = new AddedSignature();
            addedSignature.digitalProps = sign.digitalProps;
            addedSignature.guid = sign.guid;
            addedSignature.number = sign.pageNumber;
            for (const page of this.file.pages) {
                /** @type {?} */
                const id = this.addSignatureComponent(addedSignature, sign, page);
                this._signaturesHolderService.addId(sign.guid, id);
            }
            this.closeTab(sign.type);
        }
        else {
            this._signatureService.loadSignatureImage(sign).subscribe((/**
             * @param {?} signature
             * @return {?}
             */
            (signature) => {
                signature.number = sign.pageNumber;
                /** @type {?} */
                const pageModel = this.file.pages.find((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) {
                    return p.number === sign.pageNumber;
                }));
                /** @type {?} */
                const id = this.addSignatureComponent(signature, sign, pageModel);
                this._signaturesHolderService.addId(sign.guid, id);
                this.closeTab(sign.type);
            }));
        }
    }
    /**
     * @private
     * @param {?} addedSignature
     * @param {?} sign
     * @param {?} page
     * @return {?}
     */
    addSignatureComponent(addedSignature, sign, page) {
        /** @type {?} */
        const dynamicDirective = this._hostingComponentsService.find(page.number);
        if (dynamicDirective) {
            /** @type {?} */
            const viewContainerRef = dynamicDirective.viewContainerRef;
            /** @type {?} */
            const selectSignature = this._addDynamicComponentService.addDynamicComponent(viewContainerRef, Signature);
            /** @type {?} */
            const id = this.signatureComponents.size + 1;
            while (addedSignature.width >= page.width || addedSignature.height >= page.height) {
                addedSignature.width = addedSignature.width / 2;
                addedSignature.height = addedSignature.height / 2;
            }
            ((/** @type {?} */ (selectSignature.instance))).id = id;
            ((/** @type {?} */ (selectSignature.instance))).data = addedSignature;
            ((/** @type {?} */ (selectSignature.instance))).position = sign.position;
            ((/** @type {?} */ (selectSignature.instance))).type = sign.type;
            ((/** @type {?} */ (selectSignature.instance))).pageWidth = page.width;
            ((/** @type {?} */ (selectSignature.instance))).pageHeight = page.height;
            this.signatureComponents.set(id, selectSignature);
            this._activeSignatureService.changeActive(id);
            return id;
        }
        return null;
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    closeTab(type) {
        this._signatureTabActivationService.changeActiveTab(type);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    hideAll($event) {
        if (($event.target.parentElement && $event.target.parentElement.attributes['name'] &&
            $event.target.parentElement.attributes['name'].value === 'button') ||
            ($event.target.parentElement &&
                $event.target.parentElement.parentElement &&
                $event.target.parentElement.parentElement.attributes['name'] &&
                $event.target.parentElement.parentElement.attributes['name'].value === 'button') ||
            ($event.target.parentElement &&
                $event.target.parentElement.parentElement &&
                $event.target.parentElement.parentElement.parentElement &&
                $event.target.parentElement.parentElement.parentElement.parentElement &&
                $event.target.parentElement.parentElement.parentElement.parentElement.attributes['name'] &&
                $event.target.parentElement.parentElement.parentElement.parentElement.attributes['name'].value === 'button')) {
            return;
        }
        this._onCloseService.close(true);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    newSign($event) {
        if (SignatureType.HAND.id === $event) {
            this._modalService.open(CommonModals.DrawHandSignature);
            this._signatureTabActivationService.changeActiveTab(SignatureType.HAND.id);
        }
        else if (SignatureType.STAMP.id === $event) {
            this._modalService.open(CommonModals.DrawStampSignature);
            this._signatureTabActivationService.changeActiveTab(SignatureType.STAMP.id);
        }
        else if (SignatureType.TEXT.id === $event) {
            this.addTextSign();
            this._signatureTabActivationService.changeActiveTab(SignatureType.TEXT.id);
        }
    }
    /**
     * @private
     * @return {?}
     */
    addTextSign() {
        /** @type {?} */
        const signature = new AddedSignature();
        signature.props = SignatureProps.getDefault();
        signature.guid = DraggableSignature.TEMP;
        /** @type {?} */
        const sign = new DraggableSignature();
        sign.guid = DraggableSignature.TEMP;
        sign.position = new Position(0, 0);
        sign.type = SignatureType.TEXT.id;
        /** @type {?} */
        const pageNumber = this._navigateService.currentPage;
        signature.number = pageNumber;
        sign.pageNumber = pageNumber;
        /** @type {?} */
        const pageModel = this.file.pages.find((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            return p.number === pageNumber;
        }));
        /** @type {?} */
        const id = this.addSignatureComponent(signature, sign, pageModel);
        this._signaturesHolderService.addId(sign.guid, id);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.cleanSignatures();
    }
    /**
     * @private
     * @return {?}
     */
    cleanSignatures() {
        for (const componentRef of this.signatureComponents.values()) {
            componentRef.destroy();
        }
        this.signatureComponents = new Map();
        this._signaturesHolderService.clear();
    }
    /**
     * @return {?}
     */
    sign() {
        /** @type {?} */
        const signatures = this.prepareSignaturesData();
        this._signatureService.sign(this.credentials, signatures).subscribe((/**
         * @param {?} ret
         * @return {?}
         */
        (ret) => {
            this._modalService.open(CommonModals.OperationSuccess);
            this.selectFile(ret.guid, null, CommonModals.OperationSuccess);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    prepareSignaturesData() {
        /** @type {?} */
        const signatures = [];
        for (const ids of this._signaturesHolderService.values()) {
            /** @type {?} */
            const id = ids.pop();
            /** @type {?} */
            const componentRef = this.signatureComponents.get(id);
            // @ts-ignore
            /** @type {?} */
            const sign = ((/** @type {?} */ (componentRef))).instance;
            /** @type {?} */
            const data = sign.data;
            /** @type {?} */
            const position = sign.position;
            /** @type {?} */
            const type = sign.type;
            if (DraggableSignature.TEMP !== data.guid) {
                signatures.push(SignatureData.map(data, type, position));
            }
        }
        return signatures;
    }
    /**
     * @return {?}
     */
    isPdf() {
        if (this.file) {
            if (FileUtil.find(this.file.guid, false).format === "Portable Document Format") {
                return true;
            }
        }
        return false;
    }
    /**
     * @return {?}
     */
    codesConfig() {
        return this.getSignatureTypeConfig(SignatureType.BAR_CODE.id) || this.getSignatureTypeConfig(SignatureType.QR_CODE.id);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    isVisible(id) {
        /** @type {?} */
        const notCode = id !== SignatureType.BAR_CODE.id && id !== SignatureType.QR_CODE.id;
        return this.getSignatureTypeConfig(id) && (this.isDesktop || notCode);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    activeTab($event) {
        this.activeSignatureTab = $event;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    fileDropped($event) {
        this.fileWasDropped = $event;
    }
}
SignatureAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-signature',
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\" (click)=\"hideAll($event)\">\n  <div class=\"signature-wrapper wrapper\">\n    <gd-tabbed-toolbars [logo]=\"'signature'\" [icon]=\"'pen-square'\">\n      <gd-tabs>\n        <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n          <div id=\"files-tools\" class=\"toolbar-panel\">\n            <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                       *ngIf=\"browseConfig\"></gd-button>\n\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                       (click)=\"downloadFile()\" *ngIf=\"downloadConfig\"></gd-button>\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"sign()\"></gd-button>\n\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"'Signatures'\" [icon]=\"'signature'\" [id]=\"'2'\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let signatureType of signatureTypes\">\n              <gd-signature-tab [disabled]=\"!file\" *ngIf=\"isVisible(signatureType.id)\"\n                                [icon]=\"signatureType.icon\" (activeTab)=\"activeTab($event)\"\n                                [id]=\"signatureType.id\" [tooltip]=\"signatureType.name\">\n              </gd-signature-tab>\n            </div>\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"''\" [icon]=\"'qrcode'\" [id]=\"'3'\" *ngIf=\"!isDesktop && codesConfig()\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let signatureType of signatureTypeCodes\">\n              <gd-signature-tab [disabled]=\"!file\" *ngIf=\"getSignatureTypeConfig(signatureType.id)\"\n                                [icon]=\"signatureType.icon\" (activeTab)=\"activeTab($event)\"\n                                [id]=\"signatureType.id\" [tooltip]=\"signatureType.name\">\n              </gd-signature-tab>\n            </div>\n          </div>\n        </gd-tab>\n      </gd-tabs>\n    </gd-tabbed-toolbars>\n    <gd-signature-left-panel *ngIf=\"activeSignatureTab\" [rewrite]=\"rewriteConfig\" (newSignatureEvent)=\"newSign($event)\"\n                             [isPdf]=\"isPdf()\" [id]=\"activeSignatureTab\">\n    </gd-signature-left-panel>\n    <div class=\"doc-panel\" *ngIf=\"file\">\n      <gd-document (drop)=\"dropSignature($event)\" (dragover)=\"dragOver($event)\" class=\"gd-document\" *ngIf=\"file\"\n                   [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                   [preloadPageCount]=\"preloadPageCountConfig\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-document>\n    </div>\n\n    <gd-init-state [icon]=\"'signature'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\"\n                   (fileDropped)=\"fileDropped($event)\">\n      Click\n      <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon>\n      to open file<br>\n      Or drop file here\n    </gd-init-state>\n    <gd-hand-modal></gd-hand-modal>\n    <gd-stamp-modal></gd-stamp-modal>\n  </div>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .page{position:relative}::ng-deep .gd-page-image{width:unset;height:unset}::ng-deep .top-panel{align-content:flex-start}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:flex;height:inherit}.gd-document{width:100%;height:calc(100% - 90px)}.toolbar-panel{width:100%;display:flex;align-items:center}.signature-wrapper ::ng-deep .button{color:#3e4e5a!important}.signature-wrapper ::ng-deep .button .text{padding:0!important}@media (max-width:1037px){::ng-deep .panzoom{justify-content:unset!important}::ng-deep .logo ::ng-deep .icon{font-size:24px!important}::ng-deep .top-panel{height:120px!important}}"]
            }] }
];
/** @nocollapse */
SignatureAppComponent.ctorParameters = () => [
    { type: SignatureService },
    { type: ModalService },
    { type: SignatureConfigService },
    { type: UploadFilesService },
    { type: NavigateService },
    { type: ZoomService },
    { type: PagePreloadService },
    { type: RenderPrintService },
    { type: PasswordService },
    { type: WindowService },
    { type: SelectSignatureService },
    { type: SignatureTabActivatorService },
    { type: HostingDynamicComponentService },
    { type: AddDynamicComponentService },
    { type: DragSignatureService },
    { type: OnCloseService },
    { type: RemoveSignatureService },
    { type: ActiveSignatureService },
    { type: ExceptionMessageService },
    { type: SignaturesHolderService },
    { type: TabActivatorService },
    { type: CopySignatureService }
];
if (false) {
    /** @type {?} */
    SignatureAppComponent.prototype.title;
    /** @type {?} */
    SignatureAppComponent.prototype.files;
    /** @type {?} */
    SignatureAppComponent.prototype.file;
    /** @type {?} */
    SignatureAppComponent.prototype.signatureConfig;
    /** @type {?} */
    SignatureAppComponent.prototype.countPages;
    /** @type {?} */
    SignatureAppComponent.prototype.formatDisabled;
    /** @type {?} */
    SignatureAppComponent.prototype.credentials;
    /** @type {?} */
    SignatureAppComponent.prototype.browseFilesModal;
    /** @type {?} */
    SignatureAppComponent.prototype.isDesktop;
    /** @type {?} */
    SignatureAppComponent.prototype.signatureTypes;
    /** @type {?} */
    SignatureAppComponent.prototype.signatureTypeCodes;
    /** @type {?} */
    SignatureAppComponent.prototype.signatureComponents;
    /** @type {?} */
    SignatureAppComponent.prototype.activeSignatureTab;
    /** @type {?} */
    SignatureAppComponent.prototype.isLoading;
    /** @type {?} */
    SignatureAppComponent.prototype.fileWasDropped;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._signatureService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._navigateService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._renderPrintService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._windowService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._selectSignatureService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._signatureTabActivationService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._hostingComponentsService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._addDynamicComponentService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._dragSignatureService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._onCloseService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._activeSignatureService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._excMessageService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._signaturesHolderService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._tabActivatorService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL3NpZ25hdHVyZS1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFrQyxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBR0wsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixlQUFlLEVBQ2Ysa0JBQWtCLEVBRWxCLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLGVBQWUsRUFFZixZQUFZLEVBQ1osOEJBQThCLEVBQzlCLDBCQUEwQixFQUMxQixjQUFjLEVBQ2QsdUJBQXVCLEVBQ3ZCLGFBQWEsRUFDYixLQUFLLEVBQ0wsbUJBQW1CLEVBQ3BCLE1BQU0sK0NBQStDLENBQUM7QUFFdkQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUNMLGNBQWMsRUFHZCxrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLGFBQWEsRUFBRSxjQUFjLEVBQzdCLGFBQWEsRUFDZCxNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsdUJB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WUFvQnBCLG9CQUFvQjtZQW5CMUIsY0FBYztZQW9CUixzQkFBc0I7WUFFdEIsc0JBQXNCO1lBckI1Qix1QkFBdUI7WUFzQmpCLHVCQUF1QjtZQW5CN0IsbUJBQW1CO1lBc0JiLG9CQUFvQjs7OztJQVUxQixzQ0FBb0I7O0lBQ3BCLHNDQUF3Qjs7SUFDeEIscUNBQXNCOztJQUN0QixnREFBaUM7O0lBQ2pDLDJDQUFlOztJQUNmLCtDQUE0Qjs7SUFDNUIsNENBQTZCOztJQUM3QixpREFBNEM7O0lBQzVDLDBDQUFtQjs7SUFDbkIsK0NBUUU7O0lBQ0YsbURBR0U7O0lBRUYsb0RBQTJEOztJQUMzRCxtREFBMkI7O0lBQzNCLDBDQUFtQjs7SUFDbkIsK0NBQXVCOzs7OztJQUVYLGtEQUEyQzs7Ozs7SUFDM0MsOENBQW1DOzs7OztJQUduQyxpREFBeUM7Ozs7O0lBQ3pDLDZDQUFpQzs7Ozs7SUFFakMsb0RBQStDOzs7OztJQUUvQywrQ0FBcUM7Ozs7O0lBQ3JDLHdEQUF1RDs7Ozs7SUFDdkQsK0RBQW9FOzs7OztJQUNwRSwwREFBaUU7Ozs7O0lBQ2pFLDREQUErRDs7Ozs7SUFDL0Qsc0RBQW1EOzs7OztJQUNuRCxnREFBdUM7Ozs7O0lBRXZDLHdEQUF1RDs7Ozs7SUFDdkQsbURBQW1EOzs7OztJQUNuRCx5REFBeUQ7Ozs7O0lBQ3pELHFEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7XG4gIEZpbGVEZXNjcmlwdGlvbixcbiAgRmlsZU1vZGVsLFxuICBNb2RhbFNlcnZpY2UsXG4gIFVwbG9hZEZpbGVzU2VydmljZSxcbiAgTmF2aWdhdGVTZXJ2aWNlLFxuICBQYWdlUHJlbG9hZFNlcnZpY2UsXG4gIFBhZ2VNb2RlbCxcbiAgWm9vbVNlcnZpY2UsXG4gIFJlbmRlclByaW50U2VydmljZSxcbiAgRmlsZVV0aWwsXG4gIFBhc3N3b3JkU2VydmljZSxcbiAgRmlsZUNyZWRlbnRpYWxzLFxuICBDb21tb25Nb2RhbHMsXG4gIEhvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gIE9uQ2xvc2VTZXJ2aWNlLFxuICBFeGNlcHRpb25NZXNzYWdlU2VydmljZSxcbiAgV2luZG93U2VydmljZSxcbiAgVXRpbHMsXG4gIFRhYkFjdGl2YXRvclNlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtTaWduYXR1cmVDb25maWd9IGZyb20gXCIuL3NpZ25hdHVyZS1jb25maWdcIjtcbmltcG9ydCB7U2lnbmF0dXJlQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vc2lnbmF0dXJlLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuICBBZGRlZFNpZ25hdHVyZSxcbiAgQ29weUNoYW5nZXMsXG4gIENvcHlTaWduLFxuICBEcmFnZ2FibGVTaWduYXR1cmUsXG4gIFBvc2l0aW9uLCBSZW1vdmVTaWduLFxuICBTaWduYXR1cmVEYXRhLCBTaWduYXR1cmVQcm9wcyxcbiAgU2lnbmF0dXJlVHlwZVxufSBmcm9tIFwiLi9zaWduYXR1cmUtbW9kZWxzXCI7XG5pbXBvcnQge1NlbGVjdFNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL3NlbGVjdC1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtTaWduYXR1cmV9IGZyb20gXCIuL3NpZ25hdHVyZS9zaWduYXR1cmUuY29tcG9uZW50XCI7XG5pbXBvcnQge0RyYWdTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9kcmFnLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlbW92ZVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL3JlbW92ZS1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge0FjdGl2ZVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL2FjdGl2ZS1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtTaWduYXR1cmVzSG9sZGVyU2VydmljZX0gZnJvbSBcIi4vc2lnbmF0dXJlcy1ob2xkZXIuc2VydmljZVwiO1xuaW1wb3J0IHtTaWduYXR1cmVUYWJBY3RpdmF0b3JTZXJ2aWNlfSBmcm9tIFwiLi9zaWduYXR1cmUtdGFiLWFjdGl2YXRvci5zZXJ2aWNlXCI7XG5pbXBvcnQgJ2hhbW1lcmpzJztcbmltcG9ydCB7Q29weVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL2NvcHktc2lnbmF0dXJlLnNlcnZpY2VcIjtcblxuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2Qtc2lnbmF0dXJlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZ25hdHVyZS1hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWduYXR1cmUtYXBwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICB0aXRsZSA9ICdzaWduYXR1cmUnO1xuICBmaWxlczogRmlsZU1vZGVsW10gPSBbXTtcbiAgZmlsZTogRmlsZURlc2NyaXB0aW9uO1xuICBzaWduYXR1cmVDb25maWc6IFNpZ25hdHVyZUNvbmZpZztcbiAgY291bnRQYWdlcyA9IDA7XG4gIGZvcm1hdERpc2FibGVkID0gIXRoaXMuZmlsZTtcbiAgY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscztcbiAgYnJvd3NlRmlsZXNNb2RhbCA9IENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcztcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xuICBzaWduYXR1cmVUeXBlcyA9IFtcbiAgICBTaWduYXR1cmVUeXBlLlRFWFQsXG4gICAgU2lnbmF0dXJlVHlwZS5JTUFHRSxcbiAgICBTaWduYXR1cmVUeXBlLkRJR0lUQUwsXG4gICAgU2lnbmF0dXJlVHlwZS5RUl9DT0RFLFxuICAgIFNpZ25hdHVyZVR5cGUuQkFSX0NPREUsXG4gICAgU2lnbmF0dXJlVHlwZS5TVEFNUCxcbiAgICBTaWduYXR1cmVUeXBlLkhBTkQsXG4gIF07XG4gIHNpZ25hdHVyZVR5cGVDb2RlcyA9IFtcbiAgICBTaWduYXR1cmVUeXBlLlFSX0NPREUsXG4gICAgU2lnbmF0dXJlVHlwZS5CQVJfQ09ERSxcbiAgXTtcblxuICBzaWduYXR1cmVDb21wb25lbnRzID0gbmV3IE1hcDxudW1iZXIsIENvbXBvbmVudFJlZjxhbnk+PigpO1xuICBhY3RpdmVTaWduYXR1cmVUYWI6IHN0cmluZztcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBmaWxlV2FzRHJvcHBlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NpZ25hdHVyZVNlcnZpY2U6IFNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgICBjb25maWdTZXJ2aWNlOiBTaWduYXR1cmVDb25maWdTZXJ2aWNlLFxuICAgICAgICAgICAgICB1cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICAgICAgICAgICAgcGFnZVByZWxvYWRTZXJ2aWNlOiBQYWdlUHJlbG9hZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlclByaW50U2VydmljZTogUmVuZGVyUHJpbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2VsZWN0U2lnbmF0dXJlU2VydmljZTogU2VsZWN0U2lnbmF0dXJlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2lnbmF0dXJlVGFiQWN0aXZhdGlvblNlcnZpY2U6IFNpZ25hdHVyZVRhYkFjdGl2YXRvclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2hvc3RpbmdDb21wb25lbnRzU2VydmljZTogSG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hZGREeW5hbWljQ29tcG9uZW50U2VydmljZTogQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RyYWdTaWduYXR1cmVTZXJ2aWNlOiBEcmFnU2lnbmF0dXJlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb25DbG9zZVNlcnZpY2U6IE9uQ2xvc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICByZW1vdmVTaWduYXR1cmVTZXJ2aWNlOiBSZW1vdmVTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hY3RpdmVTaWduYXR1cmVTZXJ2aWNlOiBBY3RpdmVTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9leGNNZXNzYWdlU2VydmljZTogRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlOiBTaWduYXR1cmVzSG9sZGVyU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdGFiQWN0aXZhdG9yU2VydmljZTogVGFiQWN0aXZhdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgY29weVNpZ25hdHVyZVNlcnZpY2U6IENvcHlTaWduYXR1cmVTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLl90YWJBY3RpdmF0b3JTZXJ2aWNlLmFjdGl2ZVRhYkNoYW5nZS5zdWJzY3JpYmUoKHRhYklkOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh0YWJJZCA9PT0gJzEnKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVNpZ25hdHVyZVRhYikge1xuICAgICAgICAgIHRoaXMuX3NpZ25hdHVyZVRhYkFjdGl2YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYih0aGlzLmFjdGl2ZVNpZ25hdHVyZVRhYik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmVTaWduYXR1cmVUYWIgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29weVNpZ25hdHVyZVNlcnZpY2UuY29weVNpZ25hdHVyZS5zdWJzY3JpYmUoKGNvcHlTaWduOiBDb3B5U2lnbikgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLmdldChjb3B5U2lnbi5pZCk7XG4gICAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgY29tcCA9ICg8U2lnbmF0dXJlPmNvbXBvbmVudFJlZikuaW5zdGFuY2U7XG4gICAgICAgIGNvbnN0IGNvbXBQYWdlID0gY29tcC5kYXRhLm51bWJlcjtcbiAgICAgICAgY29uc3Qgc2lnbiA9IG5ldyBEcmFnZ2FibGVTaWduYXR1cmUoKTtcbiAgICAgICAgc2lnbi50eXBlID0gY29tcC50eXBlO1xuICAgICAgICBzaWduLmd1aWQgPSBjb3B5U2lnbi5ndWlkO1xuICAgICAgICBzaWduLnBvc2l0aW9uID0gY29tcC5wb3NpdGlvbjtcbiAgICAgICAgY29uc3QgYWRkZWRTaWduYXR1cmUgPSBuZXcgQWRkZWRTaWduYXR1cmUoKTtcbiAgICAgICAgYWRkZWRTaWduYXR1cmUuZ3VpZCA9IGNvcHlTaWduLmd1aWQ7XG4gICAgICAgIGFkZGVkU2lnbmF0dXJlLmRhdGEgPSBjb21wLmRhdGEuZGF0YTtcbiAgICAgICAgaWYgKGNvbXAuZGF0YS5wcm9wcykge1xuICAgICAgICAgIGFkZGVkU2lnbmF0dXJlLnByb3BzID0gY29tcC5kYXRhLnByb3BzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZGVkU2lnbmF0dXJlLndpZHRoID0gY29tcC5kYXRhLndpZHRoO1xuICAgICAgICAgIGFkZGVkU2lnbmF0dXJlLmhlaWdodCA9IGNvbXAuZGF0YS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBwYWdlIG9mIHRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgICAgIGlmIChwYWdlLm51bWJlciAhPT0gY29tcFBhZ2UpIHtcbiAgICAgICAgICAgIGFkZGVkU2lnbmF0dXJlLm51bWJlciA9IHBhZ2UubnVtYmVyO1xuICAgICAgICAgICAgc2lnbi5wYWdlTnVtYmVyID0gcGFnZS5udW1iZXI7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRoaXMuYWRkU2lnbmF0dXJlQ29tcG9uZW50KGFkZGVkU2lnbmF0dXJlLCBzaWduLCBwYWdlKTtcbiAgICAgICAgICAgIHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmFkZElkKHNpZ24uZ3VpZCwgaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29weVNpZ25hdHVyZVNlcnZpY2UuY2hhbmdlc1NpZ25hdHVyZS5zdWJzY3JpYmUoKGNvcHlDaGFuZ2VzOiBDb3B5Q2hhbmdlcykgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLmdldChjb3B5Q2hhbmdlcy5pZCk7XG4gICAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICAgIGNvbnN0IGlkcyA9IHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmdldChjb3B5Q2hhbmdlcy5ndWlkKTtcbiAgICAgICAgZm9yIChjb25zdCBpZCBvZiBpZHMpIHtcbiAgICAgICAgICBjb25zdCBjb21wUmVmID0gdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLmdldChpZCk7XG4gICAgICAgICAgaWYgKGNvbXBSZWYpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IGNvbXAgPSAoPFNpZ25hdHVyZT5jb21wUmVmKS5pbnN0YW5jZTtcbiAgICAgICAgICAgIGlmIChjb21wLmlkICE9PSBjb3B5Q2hhbmdlcy5pZCkge1xuICAgICAgICAgICAgICBjb21wLmRhdGEud2lkdGggPSBjb3B5Q2hhbmdlcy53aWR0aDtcbiAgICAgICAgICAgICAgY29tcC5kYXRhLmhlaWdodCA9IGNvcHlDaGFuZ2VzLmhlaWdodDtcbiAgICAgICAgICAgICAgY29tcC5kYXRhLnBvc2l0aW9uID0gY29weUNoYW5nZXMucG9zaXRpb247XG4gICAgICAgICAgICAgIGNvbXAuZGF0YS5wcm9wcyA9IGNvcHlDaGFuZ2VzLnByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVtb3ZlU2lnbmF0dXJlU2VydmljZS5yZW1vdmVTaWduYXR1cmUuc3Vic2NyaWJlKChkZWw6IFJlbW92ZVNpZ24pID0+IHtcbiAgICAgIGNvbnN0IGlkcyA9IHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmdldChkZWwuZ3VpZCk7XG4gICAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xuICAgICAgICBpZiAoZGVsLnR5cGUgPT09IFNpZ25hdHVyZVR5cGUuRElHSVRBTC5pZCB8fCBkZWwuaWQgPT09IGlkKSB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLmdldChpZCk7XG4gICAgICAgICAgaWYgKGNvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLmRlbGV0ZShpZCk7XG4gICAgICAgICAgdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UucmVtb3ZlKGRlbC5ndWlkLCBpZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbmZpZ1NlcnZpY2UudXBkYXRlZENvbmZpZy5zdWJzY3JpYmUoKHNpZ25hdHVyZUNvbmZpZykgPT4ge1xuICAgICAgdGhpcy5zaWduYXR1cmVDb25maWcgPSBzaWduYXR1cmVDb25maWc7XG4gICAgfSk7XG5cbiAgICB1cGxvYWRGaWxlc1NlcnZpY2UudXBsb2Fkc0NoYW5nZS5zdWJzY3JpYmUoKHVwbG9hZHMpID0+IHtcbiAgICAgIGlmICh1cGxvYWRzKSB7XG4gICAgICAgIGxldCBpOiBudW1iZXI7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB1cGxvYWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKGkpLCAnJywgdGhpcy5yZXdyaXRlQ29uZmlnLCBudWxsKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID8gdGhpcy5zZWxlY3RGaWxlKG9iai5ndWlkLCAnJywgJycpIDogdGhpcy5zZWxlY3REaXIoJycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYWdlUHJlbG9hZFNlcnZpY2UuY2hlY2tQcmVsb2FkLnN1YnNjcmliZSgocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy5wcmVsb2FkUGFnZUNvdW50Q29uZmlnICE9PSAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBwYWdlOyBpIDwgcGFnZSArIDI7IGkrKykge1xuICAgICAgICAgIGlmIChpID4gMCAmJiBpIDw9IHRoaXMuY291bnRQYWdlcyAmJiAhdGhpcy5maWxlLnBhZ2VzW2kgLSAxXS5kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRQYWdlcyhpLCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhc3N3b3JkU2VydmljZS5wYXNzQ2hhbmdlLnN1YnNjcmliZSgocGFzczogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5jcmVkZW50aWFscy5ndWlkLCBwYXNzLCBDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCk7XG4gICAgfSk7XG5cbiAgICBfc2VsZWN0U2lnbmF0dXJlU2VydmljZS5zZWxlY3RTaWduYXR1cmUuc3Vic2NyaWJlKChzaWduOiBEcmFnZ2FibGVTaWduYXR1cmUpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0U2lnbmF0dXJlKHNpZ24pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlZmF1bHREb2N1bWVudENvbmZpZygpKSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5kZWZhdWx0RG9jdW1lbnRDb25maWcoKSwgXCJcIiwgXCJcIik7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHJld3JpdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcucmV3cml0ZSA6IHRydWU7XG4gIH1cblxuICBnZXQgem9vbUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXQgcGFnZVNlbGVjdG9yQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLnBhZ2VTZWxlY3RvciA6IHRydWU7XG4gIH1cblxuICBnZXQgcHJlbG9hZFBhZ2VDb3VudENvbmZpZygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgOiAwO1xuICB9XG5cbiAgZ2V0IGRvd25sb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmRvd25sb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBkb3dubG9hZE9yaWdpbmFsQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmRvd25sb2FkT3JpZ2luYWwgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGRvd25sb2FkU2luZ2VkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmRvd25sb2FkU2lnbmVkIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcudXBsb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZGVmYXVsdERvY3VtZW50Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmRlZmF1bHREb2N1bWVudCA6IFwiXCI7XG4gIH1cblxuICBnZXQgcHJpbnRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcucHJpbnQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5icm93c2UgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGh0bWxNb2RlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldCBlbmFibGVSaWdodENsaWNrQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmVuYWJsZVJpZ2h0Q2xpY2sgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHRleHRTaWduYXR1cmVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcudGV4dFNpZ25hdHVyZSA6IHRydWU7XG4gIH1cblxuICBnZXQgaW1hZ2VTaWduYXR1cmVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcuaW1hZ2VTaWduYXR1cmUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGRpZ2l0YWxTaWduYXR1cmVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcuZGlnaXRhbFNpZ25hdHVyZSA6IHRydWU7XG4gIH1cblxuICBnZXQgcXJDb2RlU2lnbmF0dXJlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLnFyQ29kZVNpZ25hdHVyZSA6IHRydWU7XG4gIH1cblxuICBnZXQgYmFyQ29kZVNpZ25hdHVyZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5iYXJDb2RlU2lnbmF0dXJlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBzdGFtcFNpZ25hdHVyZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5zdGFtcFNpZ25hdHVyZSA6IHRydWU7XG4gIH1cblxuICBnZXQgaGFuZFNpZ25hdHVyZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5oYW5kU2lnbmF0dXJlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBjdXJyZW50UGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2U7XG4gIH1cblxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKGlkKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShpZCk7XG4gIH1cblxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLmxvYWRGaWxlcygkZXZlbnQpLnN1YnNjcmliZSgoZmlsZXM6IEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xuICB9XG5cbiAgc2VsZWN0RmlsZSgkZXZlbnQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbW9kYWxJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IHtndWlkOiAkZXZlbnQsIHBhc3N3b3JkOiBwYXNzd29yZH07XG4gICAgdGhpcy5maWxlID0gbnVsbDtcbiAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLmxvYWRGaWxlKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZmlsZTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICAgIHRoaXMuZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgIGNvbnN0IHByZWxvYWRQYWdlQ291bnQgPSB0aGlzLnByZWxvYWRQYWdlQ291bnRDb25maWc7XG4gICAgICAgICAgY29uc3QgY291bnRQYWdlcyA9IGZpbGUucGFnZXMgPyBmaWxlLnBhZ2VzLmxlbmd0aCA6IDA7XG4gICAgICAgICAgaWYgKHByZWxvYWRQYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRQYWdlcygxLCBwcmVsb2FkUGFnZUNvdW50ID4gY291bnRQYWdlcyA/IGNvdW50UGFnZXMgOiBwcmVsb2FkUGFnZUNvdW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xuICAgICAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9IDE7XG4gICAgICAgICAgdGhpcy5jb3VudFBhZ2VzID0gY291bnRQYWdlcztcbiAgICAgICAgICB0aGlzLmNsZWFuU2lnbmF0dXJlcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICBpZiAobW9kYWxJZCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKG1vZGFsSWQpO1xuICAgIH1cbiAgICB0aGlzLmNsZWFyRGF0YSgpO1xuICB9XG5cbiAgcHJlbG9hZFBhZ2VzKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLmxvYWRQYWdlKHRoaXMuY3JlZGVudGlhbHMsIGkpLnN1YnNjcmliZSgocGFnZTogUGFnZU1vZGVsKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZS5wYWdlc1tpIC0gMV0gPSBwYWdlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcsIG51bGwpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgfSk7XG4gIH1cblxuICBkb3dubG9hZEZpbGUoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLmdldERvd25sb2FkVXJsKHRoaXMuY3JlZGVudGlhbHMpKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEYXRhKCkge1xuICAgIGlmICghdGhpcy5maWxlIHx8ICF0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwYWdlIG9mIHRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgcGFnZS5kYXRhID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvblJpZ2h0Q2xpY2soJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuZW5hYmxlUmlnaHRDbGlja0NvbmZpZztcbiAgfVxuXG4gIGdldFNpZ25hdHVyZVR5cGVDb25maWcoaWQ6IHN0cmluZykge1xuICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5URVhULmlkOlxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0U2lnbmF0dXJlQ29uZmlnO1xuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLklNQUdFLmlkOlxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZVNpZ25hdHVyZUNvbmZpZztcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkOlxuICAgICAgICByZXR1cm4gdGhpcy5kaWdpdGFsU2lnbmF0dXJlQ29uZmlnO1xuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLlFSX0NPREUuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLnFyQ29kZVNpZ25hdHVyZUNvbmZpZztcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5CQVJfQ09ERS5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFyQ29kZVNpZ25hdHVyZUNvbmZpZztcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5TVEFNUC5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhbXBTaWduYXR1cmVDb25maWc7XG4gICAgICBjYXNlIFNpZ25hdHVyZVR5cGUuSEFORC5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZFNpZ25hdHVyZUNvbmZpZztcbiAgICB9XG4gIH1cblxuICBkcmFnT3ZlcigkZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGRyb3BTaWduYXR1cmUoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgcG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG5cbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG4gICAgaWYgKGN1cnJlbnRQYWdlICYmICQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpICYmICQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmhhc0NsYXNzKFwicGFnZVwiKSkge1xuICAgICAgY29uc3QgZG9jdW1lbnRQYWdlID0gJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KClbMF07XG4gICAgICBjb25zdCBsZWZ0ID0gcG9zaXRpb24ueCAtICQoZG9jdW1lbnRQYWdlKS5vZmZzZXQoKS5sZWZ0O1xuICAgICAgY29uc3QgdG9wID0gcG9zaXRpb24ueSAtICQoZG9jdW1lbnRQYWdlKS5vZmZzZXQoKS50b3A7XG4gICAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBuZXcgUG9zaXRpb24obGVmdCwgdG9wKTtcbiAgICAgIGNvbnN0IHNpZ24gPSB0aGlzLl9kcmFnU2lnbmF0dXJlU2VydmljZS5zaWduO1xuICAgICAgaWYgKHNpZ24pIHtcbiAgICAgICAgY29uc3QgaWQgPSAkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5hdHRyKCdpZCcpO1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICBjb25zdCBzcGxpdCA9IGlkLnNwbGl0KCctJyk7XG4gICAgICAgICAgc2lnbi5wYWdlTnVtYmVyID0gc3BsaXQubGVuZ3RoID09PSAyID8gcGFyc2VJbnQoc3BsaXRbMV0sIDEwKSA6IHNpZ24ucGFnZU51bWJlcjtcbiAgICAgICAgfVxuICAgICAgICBzaWduLnBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uO1xuICAgICAgICB0aGlzLnNlbGVjdFNpZ25hdHVyZShzaWduKTtcbiAgICAgICAgdGhpcy5fZHJhZ1NpZ25hdHVyZVNlcnZpY2Uuc2lnbiA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RTaWduYXR1cmUoc2lnbjogRHJhZ2dhYmxlU2lnbmF0dXJlKSB7XG4gICAgaWYgKHNpZ24udHlwZSA9PT0gU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkKSB7XG4gICAgICBjb25zdCBhZGRlZFNpZ25hdHVyZSA9IG5ldyBBZGRlZFNpZ25hdHVyZSgpO1xuICAgICAgYWRkZWRTaWduYXR1cmUuZGlnaXRhbFByb3BzID0gc2lnbi5kaWdpdGFsUHJvcHM7XG4gICAgICBhZGRlZFNpZ25hdHVyZS5ndWlkID0gc2lnbi5ndWlkO1xuICAgICAgYWRkZWRTaWduYXR1cmUubnVtYmVyID0gc2lnbi5wYWdlTnVtYmVyO1xuICAgICAgZm9yIChjb25zdCBwYWdlIG9mIHRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuYWRkU2lnbmF0dXJlQ29tcG9uZW50KGFkZGVkU2lnbmF0dXJlLCBzaWduLCBwYWdlKTtcbiAgICAgICAgdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UuYWRkSWQoc2lnbi5ndWlkLCBpZCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNsb3NlVGFiKHNpZ24udHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2UubG9hZFNpZ25hdHVyZUltYWdlKHNpZ24pLnN1YnNjcmliZSgoc2lnbmF0dXJlOiBBZGRlZFNpZ25hdHVyZSkgPT4ge1xuICAgICAgICBzaWduYXR1cmUubnVtYmVyID0gc2lnbi5wYWdlTnVtYmVyO1xuICAgICAgICBjb25zdCBwYWdlTW9kZWwgPSB0aGlzLmZpbGUucGFnZXMuZmluZChmdW5jdGlvbiAocCkge1xuICAgICAgICAgIHJldHVybiBwLm51bWJlciA9PT0gc2lnbi5wYWdlTnVtYmVyO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmFkZFNpZ25hdHVyZUNvbXBvbmVudChzaWduYXR1cmUsIHNpZ24sIHBhZ2VNb2RlbCk7XG4gICAgICAgIHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmFkZElkKHNpZ24uZ3VpZCwgaWQpO1xuICAgICAgICB0aGlzLmNsb3NlVGFiKHNpZ24udHlwZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZFNpZ25hdHVyZUNvbXBvbmVudChhZGRlZFNpZ25hdHVyZTogQWRkZWRTaWduYXR1cmUsIHNpZ246IERyYWdnYWJsZVNpZ25hdHVyZSwgcGFnZTogUGFnZU1vZGVsKSB7XG4gICAgY29uc3QgZHluYW1pY0RpcmVjdGl2ZSA9IHRoaXMuX2hvc3RpbmdDb21wb25lbnRzU2VydmljZS5maW5kKHBhZ2UubnVtYmVyKTtcbiAgICBpZiAoZHluYW1pY0RpcmVjdGl2ZSkge1xuICAgICAgY29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IGR5bmFtaWNEaXJlY3RpdmUudmlld0NvbnRhaW5lclJlZjtcbiAgICAgIGNvbnN0IHNlbGVjdFNpZ25hdHVyZSA9IHRoaXMuX2FkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLmFkZER5bmFtaWNDb21wb25lbnQodmlld0NvbnRhaW5lclJlZiwgU2lnbmF0dXJlKTtcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLnNpemUgKyAxO1xuICAgICAgd2hpbGUgKGFkZGVkU2lnbmF0dXJlLndpZHRoID49IHBhZ2Uud2lkdGggfHwgYWRkZWRTaWduYXR1cmUuaGVpZ2h0ID49IHBhZ2UuaGVpZ2h0KSB7XG4gICAgICAgIGFkZGVkU2lnbmF0dXJlLndpZHRoID0gYWRkZWRTaWduYXR1cmUud2lkdGggLyAyO1xuICAgICAgICBhZGRlZFNpZ25hdHVyZS5oZWlnaHQgPSBhZGRlZFNpZ25hdHVyZS5oZWlnaHQgLyAyO1xuICAgICAgfVxuICAgICAgKDxTaWduYXR1cmU+c2VsZWN0U2lnbmF0dXJlLmluc3RhbmNlKS5pZCA9IGlkO1xuICAgICAgKDxTaWduYXR1cmU+c2VsZWN0U2lnbmF0dXJlLmluc3RhbmNlKS5kYXRhID0gYWRkZWRTaWduYXR1cmU7XG4gICAgICAoPFNpZ25hdHVyZT5zZWxlY3RTaWduYXR1cmUuaW5zdGFuY2UpLnBvc2l0aW9uID0gc2lnbi5wb3NpdGlvbjtcbiAgICAgICg8U2lnbmF0dXJlPnNlbGVjdFNpZ25hdHVyZS5pbnN0YW5jZSkudHlwZSA9IHNpZ24udHlwZTtcbiAgICAgICg8U2lnbmF0dXJlPnNlbGVjdFNpZ25hdHVyZS5pbnN0YW5jZSkucGFnZVdpZHRoID0gcGFnZS53aWR0aDtcbiAgICAgICg8U2lnbmF0dXJlPnNlbGVjdFNpZ25hdHVyZS5pbnN0YW5jZSkucGFnZUhlaWdodCA9IHBhZ2UuaGVpZ2h0O1xuICAgICAgdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLnNldChpZCwgc2VsZWN0U2lnbmF0dXJlKTtcbiAgICAgIHRoaXMuX2FjdGl2ZVNpZ25hdHVyZVNlcnZpY2UuY2hhbmdlQWN0aXZlKGlkKTtcbiAgICAgIHJldHVybiBpZDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGNsb3NlVGFiKHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuX3NpZ25hdHVyZVRhYkFjdGl2YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYih0eXBlKTtcbiAgfVxuXG4gIGhpZGVBbGwoJGV2ZW50KSB7XG4gICAgaWYgKCgkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgJiYgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ25hbWUnXSAmJlxuICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ25hbWUnXS52YWx1ZSA9PT0gJ2J1dHRvbicpIHx8XG4gICAgICAoJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ25hbWUnXSAmJlxuICAgICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10udmFsdWUgPT09ICdidXR0b24nKSB8fFxuICAgICAgKCRldmVudC50YXJnZXQucGFyZW50RWxlbWVudCAmJlxuICAgICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJlxuICAgICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJlxuICAgICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddICYmXG4gICAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10udmFsdWUgPT09ICdidXR0b24nKSkge1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX29uQ2xvc2VTZXJ2aWNlLmNsb3NlKHRydWUpO1xuICB9XG5cbiAgbmV3U2lnbigkZXZlbnQ6IHN0cmluZykge1xuICAgIGlmIChTaWduYXR1cmVUeXBlLkhBTkQuaWQgPT09ICRldmVudCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkRyYXdIYW5kU2lnbmF0dXJlKTtcbiAgICAgIHRoaXMuX3NpZ25hdHVyZVRhYkFjdGl2YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYihTaWduYXR1cmVUeXBlLkhBTkQuaWQpO1xuICAgIH0gZWxzZSBpZiAoU2lnbmF0dXJlVHlwZS5TVEFNUC5pZCA9PT0gJGV2ZW50KSB7XG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuRHJhd1N0YW1wU2lnbmF0dXJlKTtcbiAgICAgIHRoaXMuX3NpZ25hdHVyZVRhYkFjdGl2YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYihTaWduYXR1cmVUeXBlLlNUQU1QLmlkKTtcbiAgICB9IGVsc2UgaWYgKFNpZ25hdHVyZVR5cGUuVEVYVC5pZCA9PT0gJGV2ZW50KSB7XG4gICAgICB0aGlzLmFkZFRleHRTaWduKCk7XG4gICAgICB0aGlzLl9zaWduYXR1cmVUYWJBY3RpdmF0aW9uU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIoU2lnbmF0dXJlVHlwZS5URVhULmlkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZFRleHRTaWduKCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IG5ldyBBZGRlZFNpZ25hdHVyZSgpO1xuICAgIHNpZ25hdHVyZS5wcm9wcyA9IFNpZ25hdHVyZVByb3BzLmdldERlZmF1bHQoKTtcbiAgICBzaWduYXR1cmUuZ3VpZCA9IERyYWdnYWJsZVNpZ25hdHVyZS5URU1QO1xuICAgIGNvbnN0IHNpZ24gPSBuZXcgRHJhZ2dhYmxlU2lnbmF0dXJlKCk7XG4gICAgc2lnbi5ndWlkID0gRHJhZ2dhYmxlU2lnbmF0dXJlLlRFTVA7XG4gICAgc2lnbi5wb3NpdGlvbiA9IG5ldyBQb3NpdGlvbigwLCAwKTtcbiAgICBzaWduLnR5cGUgPSBTaWduYXR1cmVUeXBlLlRFWFQuaWQ7XG4gICAgY29uc3QgcGFnZU51bWJlciA9IHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZTtcbiAgICBzaWduYXR1cmUubnVtYmVyID0gcGFnZU51bWJlcjtcbiAgICBzaWduLnBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xuICAgIGNvbnN0IHBhZ2VNb2RlbCA9IHRoaXMuZmlsZS5wYWdlcy5maW5kKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gcC5udW1iZXIgPT09IHBhZ2VOdW1iZXI7XG4gICAgfSk7XG4gICAgY29uc3QgaWQgPSB0aGlzLmFkZFNpZ25hdHVyZUNvbXBvbmVudChzaWduYXR1cmUsIHNpZ24sIHBhZ2VNb2RlbCk7XG4gICAgdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UuYWRkSWQoc2lnbi5ndWlkLCBpZCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuU2lnbmF0dXJlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhblNpZ25hdHVyZXMoKSB7XG4gICAgZm9yIChjb25zdCBjb21wb25lbnRSZWYgb2YgdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLnZhbHVlcygpKSB7XG4gICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMgPSBuZXcgTWFwPG51bWJlciwgQ29tcG9uZW50UmVmPGFueT4+KCk7XG4gICAgdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UuY2xlYXIoKTtcbiAgfVxuXG4gIHNpZ24oKSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlcyA9IHRoaXMucHJlcGFyZVNpZ25hdHVyZXNEYXRhKCk7XG4gICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS5zaWduKHRoaXMuY3JlZGVudGlhbHMsIHNpZ25hdHVyZXMpLnN1YnNjcmliZSgocmV0OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5PcGVyYXRpb25TdWNjZXNzKTtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZShyZXQuZ3VpZCwgbnVsbCwgQ29tbW9uTW9kYWxzLk9wZXJhdGlvblN1Y2Nlc3MpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlU2lnbmF0dXJlc0RhdGEoKSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlcyA9IFtdO1xuICAgIGZvciAoY29uc3QgaWRzIG9mIHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLnZhbHVlcygpKSB7XG4gICAgICBjb25zdCBpZCA9IGlkcy5wb3AoKTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc2lnbmF0dXJlQ29tcG9uZW50cy5nZXQoaWQpO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3Qgc2lnbiA9ICg8U2lnbmF0dXJlPmNvbXBvbmVudFJlZikuaW5zdGFuY2U7XG4gICAgICBjb25zdCBkYXRhID0gc2lnbi5kYXRhO1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBzaWduLnBvc2l0aW9uO1xuICAgICAgY29uc3QgdHlwZSA9IHNpZ24udHlwZTtcblxuICAgICAgaWYgKERyYWdnYWJsZVNpZ25hdHVyZS5URU1QICE9PSBkYXRhLmd1aWQpIHtcbiAgICAgICAgc2lnbmF0dXJlcy5wdXNoKFNpZ25hdHVyZURhdGEubWFwKGRhdGEsIHR5cGUsIHBvc2l0aW9uKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaWduYXR1cmVzO1xuICB9XG5cbiAgaXNQZGYoKSB7XG4gICAgaWYgKHRoaXMuZmlsZSkge1xuICAgICAgaWYgKEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5mb3JtYXQgPT09IFwiUG9ydGFibGUgRG9jdW1lbnQgRm9ybWF0XCIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvZGVzQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmdldFNpZ25hdHVyZVR5cGVDb25maWcoU2lnbmF0dXJlVHlwZS5CQVJfQ09ERS5pZCkgfHwgdGhpcy5nZXRTaWduYXR1cmVUeXBlQ29uZmlnKFNpZ25hdHVyZVR5cGUuUVJfQ09ERS5pZCk7XG4gIH1cblxuICBpc1Zpc2libGUoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vdENvZGUgPSBpZCAhPT0gU2lnbmF0dXJlVHlwZS5CQVJfQ09ERS5pZCAmJiBpZCAhPT0gU2lnbmF0dXJlVHlwZS5RUl9DT0RFLmlkO1xuICAgIHJldHVybiB0aGlzLmdldFNpZ25hdHVyZVR5cGVDb25maWcoaWQpICYmICh0aGlzLmlzRGVza3RvcCB8fCBub3RDb2RlKTtcbiAgfVxuXG4gIGFjdGl2ZVRhYigkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuYWN0aXZlU2lnbmF0dXJlVGFiID0gJGV2ZW50O1xuICB9XG5cbiAgZmlsZURyb3BwZWQoJGV2ZW50KSB7XG4gICAgdGhpcy5maWxlV2FzRHJvcHBlZCA9ICRldmVudDtcbiAgfVxufVxuIl19