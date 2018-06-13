import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import './style.css';
class Mapbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: props.chartData
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
          <Bar
            data={this.props.chartData}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Valoración '+this.props.location,
                fontSize:25
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

export default Mapbar;