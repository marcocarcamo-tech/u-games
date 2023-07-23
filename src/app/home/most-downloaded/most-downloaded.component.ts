import { Component } from '@angular/core';
import { Game } from 'src/app/interfaces/game/game.interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-most-downloaded',
  templateUrl: './most-downloaded.component.html',
  styleUrls: ['./most-downloaded.component.scss']
})
export class MostDownloadedComponent {
  games: Game[] = [];

  constructor(private gameService: GameService){}
  ngOnInit(): void {
    this.games = this.gameService.getMostDownloadedGames();
  }
}
