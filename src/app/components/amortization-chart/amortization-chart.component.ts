import { Component, OnChanges, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-amortization-chart',
  templateUrl: './amortization-chart.component.html',
  styleUrls: ['./amortization-chart.component.scss']
})
export class AmortizationChartComponent implements OnChanges {
  @Input() schedule: any[] = [];

  ngOnChanges(): void {
    if (this.schedule.length > 0) {
      this.renderChart();
    }
  }

  renderChart(): void {
    const ctx = (document.getElementById('amortizationChart') as HTMLCanvasElement).getContext('2d');
    if (ctx) {
      Chart.register(...registerables);
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.schedule.map(item => `Month ${item.month}`),
          datasets: [{
            label: 'Remaining Balance',
            data: this.schedule.map(item => item.balance),
            borderColor: 'blue',
            borderWidth: 1,
            fill: false
          }, {
            label: 'Interest Paid',
            data: this.schedule.map(item => item.interest),
            borderColor: 'red',
            borderWidth: 1,
            fill: false
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Month'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Amount'
              }
            }
          }
        }
      });
    }
  }
}
