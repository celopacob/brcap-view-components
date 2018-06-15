import { Component, OnInit } from "@angular/core";
import { DateRangeDTO } from "./model/date-range.model";
import BRCapUtil from "../brcap-util";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  private brcapUtil;
  items = [];
  colors = {};

  item = false;
  radios = [];
  radioSelecionado = [];
  checkSelecionado1;
  checkSelecionado2;
  checkSelecionado3;

  ngOnInit() {
    this.colors = {
      backgroundColor: "#A5761B",
      hoverColor: "#B8841F"
    };
    this.radios = [
      {
        label: "Opção 1",
        value: 1
      },
      {
        label: "Opção 2",
        value: 2
      },
      {
        label: "Opção 3",
        value: 3
      }
    ];
    this.items = [
      {
        label: "Comissão",
        icon: "fa fa-usd",
        items: [
          {
            label: "Consulta Comissão",
            link: "/#/teste",
            sub: true
          }
        ]
      },
      {
        label: "Recebimento",
        icon: "fa fa-money",
        items: [
          {
            label: "Consulta Cobrança",
            sub: true
          },
          {
            label: "Consulta Rateio",
            sub: true
          },
          {
            label: "Consulta Liquidação",
            sub: true
          }
        ]
      },
      {
        label: "Permissões",
        icon: "fa fa-key",
        items: [
          {
            label: "Controle de Acesso",
            sub: true
          }
        ]
      }
    ];
    console.log(this.items);
  }
}