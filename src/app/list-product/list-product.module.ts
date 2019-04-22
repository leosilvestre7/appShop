import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ListProductRoutingModule } from "./list-product-routing.module";
import { ListProductComponent } from "./list-product.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ListProductRoutingModule
    ],
    declarations: [
        ListProductComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ListProductModule { }
