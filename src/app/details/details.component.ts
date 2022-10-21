
import { ApiService } from './../services/api.service';
import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  displayedColumns: string[] = ['bookingName', 'bookingEmail', 'date', 'time','showTime','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api:ApiService){

  }

  ngOnInit(): void {
    this.getAllDetails();
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
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },
      error:(err)=>{
        alert("error in viewing data");
      }
    })
  }

  editBooking(row:any){
    this.dialog.open(DialogComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllDetails();
      }
    })
  }

  deleteBooking(id:number){
    this.api.deleteInfo(id)
    .subscribe({
      next:(res)=>{
        alert("Deleted Succesfully");
        this.getAllDetails();
      },
      error:()=>{
        alert("Error in Deletion");
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
