import { Component } from '@angular/core';
import { Game } from 'src/app/interfaces/game/game.interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent {
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.games = this.gameService.getComingSoonGames();
  }
}
