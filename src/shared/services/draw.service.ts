import {Injectable, OnInit} from 'angular2/core';

@Injectable()
export class DrawService {

  drawMap(data: {}, options: {}) {
    var map = new google.visualization.Map(document.getElementById('chart_div'));
    map.draw(data, options);
  }

  drawPieChart(data: {}, options: {}) {
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }

  drawColumnChart(data: {}, options: {}, view: {}) {
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart.draw(view, options);
  }
}
