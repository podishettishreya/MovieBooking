import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Film } from 'src/app/interface/Film';
import { Input } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DialogComponent } from '../dialog/dialog.component';
import { CardService } from '../services/card.service';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() film:Film ={} as Film;

  films: Film[]=[];

  displayedColumns: string[] = ['bookingName', 'bookingEmail', 'date', 'time','showTime','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private routerObj:ActivatedRoute,private dialog: MatDialog, private api:ApiService, private cardService:CardService, private filmsService:FilmsService){
  }

  ngOnInit(): void {

    this.getAllDetails();
    let id = parseInt(this.routerObj.snapshot.paramMap.get('id') + "");
    console.log("id = ",id)
    this.filmsService.setId(id + "");
    this.films=this.filmsService.getFilms();
    console.log(this.films)
    console.log(id)
    this.film = this.films[id-1]
    console.log(this.films)
  } 

  openDialog() {
    this.dialog.open(DialogComponent, {
        width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllDetails;
      }
    })
  }

  getAllDetails(){
    this.api.getInfo()
    .subscribe({
      next:(res)=>{
        console.log(res)
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },
      error:(err)=>{
        alert("error in viewing data");
      }
    })
  }
 
}
