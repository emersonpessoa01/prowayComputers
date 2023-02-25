import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProdutosRoutingModule } from "./produtos-routing.module";
import { ProdutosComponent } from "./produtos.component";

// **************************************************
import ptBr from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";

registerLocaleData(ptBr);
// **************************************************

@NgModule({
    declarations: [ProdutosComponent],
    imports: [CommonModule, ProdutosRoutingModule],
    providers: [
        // ************************************
        { provide: LOCALE_ID, useValue: "pt" },
        // ************************************
    ],
})
export class ProdutosModule {}
