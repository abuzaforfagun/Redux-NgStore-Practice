import { SetCurrentProduct } from './../state/product.action';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as fromProduct from '../state/product.reducer';
import { ToogleProductCode } from '../state/product.action';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;

  constructor(private productService: ProductService,
    private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    // this.sub = this.productService.selectedProductChanges$.subscribe(

    // );
    this.store.select(fromProduct.getCurrentProduct).subscribe(
      selectedProduct => this.selectedProduct = selectedProduct
    );

    this.productService.getProducts().subscribe(
      (products: Product[]) => this.products = products,
      (err: any) => this.errorMessage = err.error
    );

    this.store.select(fromProduct.getShowProductCode).subscribe(data => {
      this.displayCode = data;
    });

  }

  ngOnDestroy(): void {
  }

  checkChanged(value: boolean): void {
    // this.displayCode = value;
    this.store.dispatch(new ToogleProductCode(value));
  }

  newProduct(): void {
    this.productService.changeSelectedProduct(this.productService.newProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(new SetCurrentProduct(product));
    // this.productService.changeSelectedProduct(product);
  }

}
