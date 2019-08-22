import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  selectedHero: Hero;
  heroes: Hero[] = []; //un tableau de hero = Array<Hero> = []

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

 /*  onSelect(hero:Hero): void {
    this.selectedHero = hero;
    console.log(hero);
  } */ //not usefull anymore

  /* getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
    //Dans HeroesComponent > acces a la methode heroService > dans HeroService > acces a la methode getHeroes
  } */

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}

