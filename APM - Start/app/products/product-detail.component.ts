import { Component } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})   

export /**
 * ProductDetailComponent
 */
class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    
    constructor(private _routeParams: RouteParams, private _router: Router){
        let id = +this._routeParams.get('id');
        this.pageTitle += `: ${id}`;
    }
    
    onBack(): void {
        this._router.navigate(['Products']);
    }
}