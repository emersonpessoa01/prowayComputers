import { ProdutosService } from "./../../produtos.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IProduto } from "src/app/produtos";
import { NotificacaoService } from "./../../notificacao.service";

@Component({
    selector: "app-detalhes-produto",
    templateUrl: "./detalhes-produto.component.html",
    styleUrls: ["./detalhes-produto.component.css"],
})
export class DetalhesProdutoComponent implements OnInit {
    produto: IProduto | undefined;
    quantidade = 1;
    constructor(
        private produtosService: ProdutosService,
        private route: ActivatedRoute,
        private notificacaoService: NotificacaoService,
    ) {}

    ngOnInit(): void {
        const routeParams = this.route.snapshot.paramMap;
        const produtoId = Number(routeParams.get("id"));
        this.produto = this.produtosService.getOne(produtoId);
    }
    adicionarCarrinho() {
        this.notificacaoService.notificar("O produto foi adicionado ao carrinho!")
    }
}
