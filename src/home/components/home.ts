import {Component, OnInit} from 'angular2/core';
import {DrawService} from '../../shared/services/draw.service';

@Component({
  directives: [],
  providers: [],
  selector: 'home',
  templateUrl: 'src/home/components/home.html'
})

export class HomeCmp implements OnInit {
  constructor(private _drawService: DrawService) {}

  ngOnInit() {
    google.charts.setOnLoadCallback(() => {
      var pieChartArray = [
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
      ]

      var options = {
        title: 'My Daily Activities'
      };

      this.drawChart(pieChartArray, options);
    });

  }

  drawChart(pieChartArray, options) {
    var data = google.visualization.arrayToDataTable(pieChartArray);
    this._drawService.drawPieChart(data, options);
  }

}
