import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';

import { Hero } from './../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

  constructor(private heroesService:HeroService) { }

  ngOnInit() {
    this.getHeroes()
  }
  heroes:Hero[];
  getHeroes(){
    this.heroesService.getHeroes().subscribe(heroes => {
      this.heroes = heroes
    })
  }
  add(name:string){
    if(!name) return
    this.heroesService.addHero({name} as Hero).subscribe(
      hero => this.heroes.push(hero)
    )
  }
  delete(hero:Hero){
    this.heroesService.deleteHero(hero).subscribe(
      () => {
        this.heroes = this.heroes.filter(h => h !== hero)
      }
    )
  }
}
