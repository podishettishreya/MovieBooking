import { Film } from 'src/app/interface/Film';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  card:Array<Film>=[];

  constructor() { }

  add(film:Film){
    console.log(film);
    this.card.push(film);
  }

  get(){
    return this.card;
  }

  remove(film:Film){
    this.card=this.card.filter(b=>b!=film);
  }

}


