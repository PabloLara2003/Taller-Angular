import { Component, OnInit } from '@angular/core';
import { Series } from './series';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series: Array<Series> = [];
  constructor(private seriesService: SeriesService) { }
  getSeries() { 
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
    });
  }
  getSeasonsAverage(): number {
    let total = 0;
    this.series.forEach(current => {
      total += current.seasons;
    })
    return total / this.series.length;
  }
  ngOnInit() {
    this.getSeries();
  }

}
