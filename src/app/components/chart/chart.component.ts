import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { NoteService } from '../../../services/note.service';
import { getAxisData } from '../../helpers/getAxisData';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit {
  
  data1 = [[0, 5], [2, 7], [4, 4]];
  
  
  public _lineChart = new Chart({
    title: {
      text: 'Notes creation chart',
    },
    xAxis: {
      title: {
        text: 'Timeline'
      }
    },
    yAxis: {
      title: {
        text: 'Created notes',
      },
    },
    // series: [
    //   {
    //     name: '',
    //     type: 'spline',
    //     data: this.data1,
    //   },
    // ],
  });

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService.noteCreationTimes$.subscribe(_ => {
      const [categories, dataPoints] = getAxisData(this.noteService.notes)

      this._lineChart.addSeries({
          type: 'spline',
          name: '',
          data: categories
      }, true, false);
      
      this._lineChart?.ref?.xAxis[0].setCategories(categories, false);
      this._lineChart?.ref?.series[0].setData(dataPoints, true, false);
    });
  }
}
