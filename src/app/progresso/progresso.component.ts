import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  private progresso:number = 0;

  constructor() { }

  ngOnInit() {
  }

}
