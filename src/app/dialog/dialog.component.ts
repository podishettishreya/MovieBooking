import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../services/api.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { FilmsService } from '../services/films.service';

import{ MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  id: string = "";
  at: number = 0;
  bookingForm !: FormGroup;

  actionBtn:string="Save";

  constructor(private formBuilder:FormBuilder,
    private api:ApiService, 
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private dialogRef: MatDialogRef<DialogComponent>, private filmservice:FilmsService, private routerObj:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.filmservice.id;
    this.at = this.filmservice.data[parseInt(this.id+"")-1].available
    console.log(this.at)
    this.bookingForm=this.formBuilder.group({
      bookingName:['',Validators.required],
      bookingEmail:['',Validators.required],
      date:['',Validators.required],
      time:['',Validators.required],
      showTime:['',Validators.required],
    });

    if(this.editData){
      this.actionBtn="Update";
      this.bookingForm.controls['bookingName'].setValue(this.editData.bookingName);
      this.bookingForm.controls['bookingEmail'].setValue(this.editData.bookingEmail);
      this.bookingForm.controls['date'].setValue(this.editData.date);
      this.bookingForm.controls['time'].setValue(this.editData.time);
      this.bookingForm.controls['showTime'].setValue(this.editData.showTime);
      this.bookingForm.controls['available'].setValue(this.editData.available);
    }
  }

  updateBooking(){
    this.api.putInfo(this.bookingForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Update Sucessful");
        this.bookingForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error in Updating");
      }
    })
  }

  addFilm(){
    if(!this.editData){
      if(this.bookingForm.valid){
        console.log("This is my id", this.id,this.bookingForm.value.showTime);
        this.filmservice.updateFilm(parseInt(this.id + ""),this.bookingForm.value.showTime)
        this.api.postInfo(this.bookingForm.value)
        .subscribe( {
          next:(res)=>{
            alert("Booking Confirmed");
            this.bookingForm.reset();
            this.dialogRef.close('confirmed');
          },
          error:()=>{
            alert("Error")
          }
        } )
      }
    }
    else{
      this.updateBooking()
    }
  }
}
