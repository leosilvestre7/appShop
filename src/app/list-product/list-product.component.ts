import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
import { ProductService } from '../services/product.service';
import { android as androidApp, ios as iosApp } from "tns-core-modules/application";
import { Router } from '@angular/router';

@Component({
  selector: 'ns-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
  moduleId: module.id,
})
export class ListProductComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {
    
  }

  ngOnInit(): void {
    if (androidApp) {
    }
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  showProduct(data) {
    this.router.navigate([
      'product', {
        productData: data
      }
    ])
  }
 
}
