import { HeroService } from "./../hero.service";
import { Hero } from "./../hero";
import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap, tap } from "rxjs/operators";

@Component({
  selector: "app-hero-search",
  templateUrl: "./hero-search.component.html",
  styleUrls: ["./hero-search.component.less"]
})
export class HeroSearchComponent implements OnInit {
  constructor(private heroesService: HeroService) {}

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      tap(_ => console.log(_)),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroesService.searchHeroes(term))
    );
  }
  heroes$: Observable<Hero[]>;

  private searchTerms = new Subject<string>();

  search(name: string) {
    this.searchTerms.next(name);
  }
}
