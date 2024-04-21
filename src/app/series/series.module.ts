import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SeriesComponent],
  declarations: [SeriesComponent]
})
export class SeriesModule { }
