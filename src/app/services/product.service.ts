import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
    public data: Array<string> = ['Jean', 'Polo'];

    agregar(demo: string) {
        this.data.push(demo);
    }

    buscar() {
        return this.data;
    }
}

