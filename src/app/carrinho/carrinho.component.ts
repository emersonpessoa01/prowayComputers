import { Router } from "@angular/router";
import { CarrinhoService } from "../carrinho.service";
import { IProdutoCarrinho } from "./../produtos";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-carrinho",
    templateUrl: "./carrinho.component.html",
    styleUrls: ["./carrinho.component.css"],
})
export class CarrinhoComponent implements OnInit {
    itensCarrinho: IProdutoCarrinho[] = [];
    total = 0;

    constructor(
        public carrinhoService: CarrinhoService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    calculaTotal() {
        this.total = this.itensCarrinho.reduce(
            (prev, curr) => prev + curr.preco * curr.quantidade,
            0,
        );
    }
    removerProdutoCarrinho(produtoId: number) {
        this.itensCarrinho = this.itensCarrinho.filter(
            (item) => item.id !== produtoId,
        );
    }
    comprar() {
        alert("Parabéns, você fibalizou a sua compra");
        this.carrinhoService.limparCarrinho();
        this.router.navigate(["produtos"]);
    }
}
