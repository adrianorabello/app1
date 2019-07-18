import { Component, OnInit } from '@angular/core';

import {Frase} from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})


export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  private instrucao:string = 'Traduza a frase';
  private resposta:string;
  private progresso:number;

  private rodada:number = 0;
  private rodadaFrase:Frase;
  //private  coracoes:Coracao[];

  constructor() { 

    this.rodadaFrase = this.frases[this.rodada];
    console.log(this.frases);
  }

  ngOnInit() {
  }

  public atualizaResposta(event){

    this.resposta = (<HTMLInputElement>event.target).value;
      
  }

  public verificarResposta():void{
   
    if(this.rodada < this.frases.length -1){     
      
      if(this.rodadaFrase.frasePtBr == this.resposta){
        this.rodada++;
        
        this.progresso += (100 / this.frases.length);
      }
     
    }
 

   this.rodadaFrase = this.frases[this.rodada];

  }







}
