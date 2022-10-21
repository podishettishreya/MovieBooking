import { ActivatedRoute, Route, Router } from '@angular/router';
import { FilmsService } from '../../services/films.service';
import { Component, OnInit } from '@angular/core'; 
import { Film } from 'src/app/interface/Film'; 

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Film[]=[];
  constructor(private filmsService:FilmsService,private routerObj:Router) {

  }
  
  ngOnInit(): void {
    this.films=this.filmsService.getFilms();
  }
  addToCard(id:any)
  {
    this.routerObj.navigateByUrl("card/"+id);
  }
 }
