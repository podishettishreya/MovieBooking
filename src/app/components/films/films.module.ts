
import { FilmsComponent } from './films.component';
import { FilmsService } from '../../services/films.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [FilmsComponent],
  providers:[FilmsService],
  imports: [CommonModule, AppRoutingModule],
  exports:[FilmsComponent]
})
export class FilmsModule { }
