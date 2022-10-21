import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  id: string = "";

   data:any = [
    {
      id:1,
      name:'Jaws',
      genre:'Adventure/Thriller',
      poster:'https://imgc.allpostersimages.com/img/posters/jaws-one-sheet-premium-poster_u-L-F9TNJY0.jpg',
      amount: 350,
      des:"When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down. It's a hot summer on Amity Island, a small community whose main business is its beaches." ,
      available:100
    },
    {

      id:2,
      name:'Joker',
      genre:'Thriller/Crime',
      poster:'https://imgc.allpostersimages.com/img/posters/joker_u-L-F9JL6C0.jpg',
      amount: 250,
      des:"A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain. Arthur Fleck works as a clown and is an aspiring stand-up comic. He has mental health issues, part of which involves uncontrollable laughter. ",
      available:100
    },
    {
      id:3,
      name:'The Terminator',
      genre:'Scifi/Action',
      poster:'https://imgc.allpostersimages.com/img/posters/the-terminator-1984-directed-by-james-cameron_u-L-Q1H6WXI0.jpg',
      amount: 200,
      des:"Disguised as a human, a cyborg assassin known as a Terminator (Arnold Schwarzenegger) travels from 2029 to 1984 to kill Sarah Connor (Linda Hamilton). Sent to protect Sarah is Kyle Reese (Michael Biehn), who divulges the coming of Skynet, an artificial intelligence system that will spark a nuclear holocaust. ",
      available:100
    },
    
    {
      id:4,
      name:'Home Alone',
      genre:'Comedy/Family',
      poster:'https://imgc.allpostersimages.com/img/posters/home-alone_u-L-F4S7IN0.jpg',
      amount:150,
      des:"An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation. It is Christmas time and the McCallister family is preparing for a vacation in Paris, France. ",
      available:100
    }
  ];

  constructor() { }

  

  getFilms(){
    return this.data
  }

  setId(id: string) {
    this.id = id;
  }

  updateFilm(id:number,tickets:number){
    // console.log(this.data)
    // for(let i in this.data){
    //   console.log(this.data[i].available)
    // }
    console.log(id,tickets,this.data[id-1])
    this.data[id-1].available -= tickets;
  }

  

}
