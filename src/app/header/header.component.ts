import { CarrinhoService } from "./../carrinho.service";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
    constructor(public carrinhoService: CarrinhoService) {}
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}
