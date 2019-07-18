import { Component, OnInit, EventEmitter,Output } from '@angular/core';

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
  private resposta:string='';
  private progresso:number = 0;

  private rodada:number = 0;
  private rodadaFrase:Frase;
  public tentativas: number = 3;

  @Output() public encerrarJogo:EventEmitter<string> = new EventEmitter();

  
  constructor() { 

    this.atualizaRodada();
   
  }

  ngOnInit() {
  }

  public atualizaResposta(event){

    this.resposta = (<HTMLInputElement>event.target).value;
      
  }

  public verificarResposta():void{   
    
    if(this.rodadaFrase.frasePtBr == this.resposta){
      this.rodada++;

      this.progresso +=  (100 / this.frases.length);
      this.atualizaRodada();
    }else{

      this.tentativas--;
    }  

    if(this.rodada == 4){
      this.encerrarJogo.emit('vitoria');
    }
    
    if(this.tentativas == -1){
      this.encerrarJogo.emit('perdeu');
    }
 

   this.rodadaFrase = this.frases[this.rodada];

  }



  public atualizaRodada():void
  {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }











}
