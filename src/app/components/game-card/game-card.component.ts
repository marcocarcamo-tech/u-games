// game-card.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game/game.interface';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit{
  @Input() game: Game;

  constructor(){}
  ngOnInit(): void {
    
  }
  
}
