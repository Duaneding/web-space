import { map, delay, tap, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http:HttpClient) { }
  isnameused = (name:string):Observable<boolean> => {
    return this.http.get<string[]>('../assets/arr.json').pipe(
      delay(3000),
      tap(x => console.log(x)),
      switchMap((arr:string[]) => arr.includes(name) ? of(true) : of(false))
    )
  }
}
