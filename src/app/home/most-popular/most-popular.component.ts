import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/game/game.interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss']
})
export class MostPopularComponent implements OnInit{
  games: Game[] = [];

  constructor(private gameService: GameService){}
  ngOnInit(): void {
    this.games = this.gameService.getMostPopularGames();
  }
}
