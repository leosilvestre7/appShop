import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
    private data: any;

    agregar(parameter: string) {
        this.data.push(parameter);
    }

    buscar() {
        return this.data;
    }
}

