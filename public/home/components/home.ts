import {Component, OnInit} from 'angular2/core';
import {DrawService} from '../../shared/services/draw.service';
import {HttpService} from '../../shared/services/http.service';

@Component({
  directives: [],
  providers: [],
  selector: 'home',
  templateUrl: 'public/home/components/home.html'
})

export class HomeCmp implements OnInit {

  constructor(
    private _drawService: DrawService,
    private _httpService: HttpService
  ) {}

  ngOnInit() {

    google.charts.setOnLoadCallback(() => {

      var options = {
        title: 'My Daily Activities'
      };
      
      this._httpService.getAllStats('stats').subscribe(data => {
        var dataArray = data[0].dataArray;
        this.drawChart(dataArray, options);
      });
      
      
    });

  }

  drawChart(pieChartArray, options) {
    var data = google.visualization.arrayToDataTable(pieChartArray);
    this._drawService.drawPieChart(data, options);
  }

}
