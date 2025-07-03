import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  movies = [
    {
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      poster: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg'
    },
    {
      title: 'Interstellar',
      description: 'Exploring space and time to save humanity.',
      poster: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg'
    },
    {
      title: 'The Dark Knight',
      description: 'Batman faces the Joker in this gritty action film.',
      poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
    }
  ];
}
