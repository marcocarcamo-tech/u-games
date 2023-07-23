// add-game.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { Game } from 'src/app/interfaces/game/game.interface';
@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit{
  addGameForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private gameService: GameService) {
    this.addGameForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      releaseDate: ['', Validators.required],
      image: ['', Validators.required],
      downloads: ['', Validators.required],
      classification: ['', Validators.required],
      comingSoon: [false],
      rating: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    
  }

  addGame() {
    if (this.addGameForm.valid) {
      const newGame: Game = this.addGameForm.value;
      this.gameService.addGame(newGame);
      console.log('Juego agregado: ', newGame);
      this.addGameForm.reset();
    } else {
      console.log('Formulario no válido')
    }
  }
}
