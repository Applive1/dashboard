import {Component, OnInit} from 'angular2/core';
import {DrawService} from '../../shared/services/draw.service';

@Component({
  directives: [],
  providers: [],
  selector: 'dashboard',
  templateUrl: 'src/dashboard/components/dashboard.html'
})

export class DashboardCmp implements OnInit {

  constructor(private _drawService: DrawService) { }

  ngOnInit() {
    google.charts.setOnLoadCallback(() => {
      var mapArray = [
        ['Country', 'Population'],
        ['China', 'China: 1,363,800,000'],
        ['India', 'India: 1,242,620,000'],
        ['US', 'US: 317,842,000'],
        ['Indonesia', 'Indonesia: 247,424,598'],
        ['Brazil', 'Brazil: 201,032,714'],
        ['Pakistan', 'Pakistan: 186,134,000'],
        ['Nigeria', 'Nigeria: 173,615,000'],
        ['Bangladesh', 'Bangladesh: 152,518,015'],
        ['Russia', 'Russia: 146,019,512'],
        ['Japan', 'Japan: 127,120,000']
      ];

      var options = { showTip: true };

      this.drawMap(mapArray, options);

    });
  }

  private drawMap(mapArray, options) {
    var data = google.visualization.arrayToDataTable(mapArray);
    this._drawService.drawMap(data, options);
  }

}
