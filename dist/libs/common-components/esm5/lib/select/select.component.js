/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnCloseService } from "../on-close.service";
/**
 * @record
 */
export function Option() { }
if (false) {
    /** @type {?} */
    Option.prototype.name;
    /** @type {?} */
    Option.prototype.value;
    /** @type {?} */
    Option.prototype.separator;
}
var SelectComponent = /** @class */ (function () {
    function SelectComponent(_onCloseService) {
        var _this = this;
        this._onCloseService = _onCloseService;
        this.disabled = false;
        this.selected = new EventEmitter();
        this.isOpen = false;
        _onCloseService.onClose.subscribe((/**
         * @return {?}
         */
        function () {
            _this.close();
        }));
    }
    /**
     * @return {?}
     */
    SelectComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.isOpen = true;
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.isOpen = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onClickOutside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.close();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SelectComponent.prototype.toggle = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        // TODO: following lines were uncommented due to needness in signature app
        $event.preventDefault();
        $event.stopPropagation();
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
        }
    };
    /**
     * @param {?} $event
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.select = /**
     * @param {?} $event
     * @param {?} value
     * @return {?}
     */
    function ($event, value) {
        $event.preventDefault();
        $event.stopPropagation();
        this.selected.emit(value);
        this.close();
    };
    SelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-select',
                    template: "<div class=\"select\"\n     (click)=\"toggle($event)\"\n     (touchstart)=\"toggle($event)\"\n     (clickOutside)=\"onClickOutside($event)\"\n     [clickOutsideEnabled]=\"isOpen\">\n  <div *ngIf=\"!icon\" class=\"selected-value\" gdDisabledCursor [dis]=\"disabled\">\n    {{showSelected?.name}}\n  </div>\n  <fa-icon *ngIf=\"icon\" [icon]=\"['fas',icon]\"></fa-icon>\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\"></span>\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\n    <div *ngFor=\"let option of options\">\n      <div *ngIf=\"!option.separator\" (click)=\"select($event, option)\" (touchstart)=\"select($event, option)\"\n           class=\"option\">{{option.name}}</div>\n      <div *ngIf=\"option.separator\" role=\"separator\" class=\"dropdown-menu-separator\"></div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".select{min-width:50px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;color:#959da5}.selected-value{font-size:14px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:clip;max-width:70px}.selected-value.inactive{cursor:not-allowed;color:#ccc}.nav-caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent;cursor:pointer}.nav-caret.inactive{cursor:not-allowed;color:#ccc}.dropdown-menu{position:absolute;top:49px;z-index:1000;float:left;min-width:96px;list-style:none;font-size:13px;text-align:left;background-color:#fff;box-shadow:0 3px 6px rgba(0,0,0,.3);background-clip:padding-box}.dropdown-menu .option{display:block;padding:7px 0 7px 7px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer;font-size:10px}.dropdown-menu .option:hover{background-color:#25c2d4;color:#fff!important}.dropdown-menu-separator{height:1px;overflow:hidden;background-color:#f4f4f4;padding:0!important}"]
                }] }
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: OnCloseService }
    ]; };
    SelectComponent.propDecorators = {
        options: [{ type: Input }],
        disabled: [{ type: Input }],
        showSelected: [{ type: Input }],
        selected: [{ type: Output }],
        isOpen: [{ type: Input }],
        icon: [{ type: Input }]
    };
    return SelectComponent;
}());
export { SelectComponent };
if (false) {
    /** @type {?} */
    SelectComponent.prototype.options;
    /** @type {?} */
    SelectComponent.prototype.disabled;
    /** @type {?} */
    SelectComponent.prototype.showSelected;
    /** @type {?} */
    SelectComponent.prototype.selected;
    /** @type {?} */
    SelectComponent.prototype.isOpen;
    /** @type {?} */
    SelectComponent.prototype.icon;
    /**
     * @type {?}
     * @protected
     */
    SelectComponent.prototype._onCloseService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFFbkQsNEJBSUM7OztJQUhDLHNCQUFhOztJQUNiLHVCQUFXOztJQUNYLDJCQUFtQjs7QUFHckI7SUFjRSx5QkFBc0IsZUFBK0I7UUFBckQsaUJBSUM7UUFKcUIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBTjVDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFaEIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xELFdBQU0sR0FBRyxLQUFLLENBQUM7UUFJdEIsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7UUFBQztZQUNoQyxLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCw4QkFBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7SUFFRCwrQkFBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELHdDQUFjOzs7O0lBQWQsVUFBZSxLQUFhO1FBQzFCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7O0lBRUQsZ0NBQU07Ozs7SUFBTixVQUFPLE1BQU07UUFDWCwwRUFBMEU7UUFDMUUsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7OztJQUVELGdDQUFNOzs7OztJQUFOLFVBQU8sTUFBTSxFQUFFLEtBQWE7UUFDMUIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQiwwMEJBQXNDOztpQkFFdkM7Ozs7Z0JBWk8sY0FBYzs7OzBCQWVuQixLQUFLOzJCQUNMLEtBQUs7K0JBQ0wsS0FBSzsyQkFDTCxNQUFNO3lCQUNOLEtBQUs7dUJBQ0wsS0FBSzs7SUFxQ1Isc0JBQUM7Q0FBQSxBQWpERCxJQWlEQztTQTVDWSxlQUFlOzs7SUFFMUIsa0NBQTJCOztJQUMzQixtQ0FBMEI7O0lBQzFCLHVDQUE4Qjs7SUFDOUIsbUNBQTJEOztJQUMzRCxpQ0FBd0I7O0lBQ3hCLCtCQUFzQjs7Ozs7SUFFViwwQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T25DbG9zZVNlcnZpY2V9IGZyb20gXCIuLi9vbi1jbG9zZS5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xuICBzZXBhcmF0b3I6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWxlY3QuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIG9wdGlvbnM6IE9wdGlvbltdO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93U2VsZWN0ZWQ6IE9wdGlvbjtcbiAgQE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgaXNPcGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX29uQ2xvc2VTZXJ2aWNlOiBPbkNsb3NlU2VydmljZSkge1xuICAgIF9vbkNsb3NlU2VydmljZS5vbkNsb3NlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gIH1cblxuICBvbkNsaWNrT3V0c2lkZShldmVudCA6IEV2ZW50KXtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICB0b2dnbGUoJGV2ZW50KSB7XG4gICAgLy8gVE9ETzogZm9sbG93aW5nIGxpbmVzIHdlcmUgdW5jb21tZW50ZWQgZHVlIHRvIG5lZWRuZXNzIGluIHNpZ25hdHVyZSBhcHBcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICB9XG4gIH1cblxuICBzZWxlY3QoJGV2ZW50LCB2YWx1ZTogT3B0aW9uKSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh2YWx1ZSk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG59XG4iXX0=