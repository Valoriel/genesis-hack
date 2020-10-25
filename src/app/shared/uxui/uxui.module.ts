import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [RatingComponent],
  exports: [RatingComponent],
  imports: [
    CommonModule,
    MatRadioModule
  ]
})
export class UxuiModule { }
