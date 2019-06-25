import { Subject } from "rxjs";
export class ZoomService {
    constructor() {
        this._observer = new Subject();
        this._zoomChange = this._observer.asObservable();
    }
    createZoomOption(val, name, sep = false) {
        return { value: val, name: name, separator: sep };
    }
    zoomOptions(width, height) {
        return [
            this.createZoomOption(25, '25%'),
            this.createZoomOption(50, '50%'),
            this.createZoomOption(100, '100%'),
            this.createZoomOption(150, '150%'),
            this.createZoomOption(200, '200%'),
            this.createZoomOption(300, '300%'),
            this.createZoomOption(0, '', true),
            this.createZoomOption(width, 'Fit Width'),
            this.createZoomOption(height, 'Fit Height')
        ];
    }
    get zoom() {
        return this._zoom;
    }
    get zoomChange() {
        return this._zoomChange;
    }
    changeZoom(zoom) {
        this._zoom = zoom;
        this._observer.next(zoom);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3pvb20uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRXpDLE1BQU0sT0FBTyxXQUFXO0lBd0J0QjtRQXZCUSxjQUFTLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbEMsZ0JBQVcsR0FBdUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQXVCakYsQ0FBQztJQW5CRCxnQkFBZ0IsQ0FBQyxHQUFXLEVBQUUsSUFBWSxFQUFFLEdBQUcsR0FBRyxLQUFLO1FBQ3JELE9BQU8sRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBQyxDQUFBO0lBQ2pELENBQUM7SUFFRCxXQUFXLENBQUMsS0FBYSxFQUFFLE1BQWM7UUFDdkMsT0FBTztZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUMsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUMsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUMsTUFBTSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUMsTUFBTSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUMsTUFBTSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUMsTUFBTSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQztZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQztZQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQztTQUM1QyxDQUFDO0lBQ0osQ0FBQztJQUtELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBWTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBR0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBjbGFzcyBab29tU2VydmljZSB7XG4gIHByaXZhdGUgX29ic2VydmVyOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF96b29tQ2hhbmdlOiBPYnNlcnZhYmxlPG51bWJlcj4gPSB0aGlzLl9vYnNlcnZlci5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfem9vbTogbnVtYmVyO1xuXG5cbiAgY3JlYXRlWm9vbU9wdGlvbih2YWw6IG51bWJlciwgbmFtZTogc3RyaW5nLCBzZXAgPSBmYWxzZSkge1xuICAgIHJldHVybiB7dmFsdWU6IHZhbCwgbmFtZTogbmFtZSwgc2VwYXJhdG9yOiBzZXB9XG4gIH1cblxuICB6b29tT3B0aW9ucyh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIHJldHVybiBbXG4gICAgICB0aGlzLmNyZWF0ZVpvb21PcHRpb24oMjUsJzI1JScpLFxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKDUwLCc1MCUnKSxcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbigxMDAsJzEwMCUnKSxcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbigxNTAsJzE1MCUnKSxcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbigyMDAsJzIwMCUnKSxcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbigzMDAsJzMwMCUnKSxcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbigwLCAnJywgdHJ1ZSksXG4gICAgICB0aGlzLmNyZWF0ZVpvb21PcHRpb24od2lkdGgsICdGaXQgV2lkdGgnKSxcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbihoZWlnaHQsICdGaXQgSGVpZ2h0JylcbiAgICBdO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBnZXQgem9vbSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl96b29tO1xuICB9XG5cbiAgZ2V0IHpvb21DaGFuZ2UoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fem9vbUNoYW5nZTtcbiAgfVxuXG4gIGNoYW5nZVpvb20oem9vbTogbnVtYmVyKSB7XG4gICAgdGhpcy5fem9vbSA9IHpvb207XG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dCh6b29tKTtcbiAgfVxuXG4gIFxufVxuIl19