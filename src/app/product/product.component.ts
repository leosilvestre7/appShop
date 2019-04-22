import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { android as androidApp, ios as iosApp } from "tns-core-modules/application";
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  moduleId: module.id,
})
export class ProductComponent implements OnInit {
  public productData: any;
  constructor(private routerExtensions: RouterExtensions, private activedroute: ActivatedRoute) {
      this.activedroute.params.subscribe(params => {
          this.productData = params.productData;
          console.log(this.productData);
      });
  }

  ngOnInit() {
  }

  returnPage() {
    this.routerExtensions.navigate(['/list-product']);
  }
}
