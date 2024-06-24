import { Component } from '@angular/core';
import { NoteService } from '../../../services/note.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  public _lineChart = new Chart(
      {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Notes creation chart'
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: 'admited note',
            data: [10, 2, 3, 6, 9, 17, 20, 10, 5, 2, 16]
          } as any
        ]
      }
  )
}
