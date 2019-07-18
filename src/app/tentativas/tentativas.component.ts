import { Component, OnInit } from '@angular/core';
import {Coracao} from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracoes:Coracao[] = [ 
                                new Coracao(false),
                                new Coracao(false),
                                new Coracao(false),
                              ];

  public coracaoVazio = "/assets/coracao_vazio.png"
  public coracaoCheio = "/assets/coracao_cheio.png"
  constructor() { }

  ngOnInit() {
  }

}
