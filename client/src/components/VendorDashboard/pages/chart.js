import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import Card from './countcard'
class Chart extends Component{

  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['On Hold', 'Completed', 'Processing','Dispatched','Delivered','Total'],
        datasets:[
          {
            label:'Population',
            data:[
              10,
              64,
              5,
              8,
              48,
              135
              ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(4, 255, 242, 0.829)',
              'rgba(37, 238, 121, 0.747)',
              'rgba(97, 120, 223, 0.651)'
            ]
          }
        ]
      }
 
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (
      <div className="chart">
        <Card />
        <Pie className="orderPie"
          data={this.state.chartData}
          options={{
            maintainAspectRatio: true,
            responsive:true,
            

            title:{
              display:this.props.displayTitle,
              text:'Orders At a Glance',
              fontSize:30,
              
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;
