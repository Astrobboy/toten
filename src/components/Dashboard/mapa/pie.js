import React, {Component} from 'react';
import { Pie } from 'react-chartjs-2';
import './style.css';
class Mappie extends Component {
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
    if(localStorage.getItem('bool')){
      return (
        <div className="chart">
          <Pie
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
    }else{
      return (
        <div className="chart">
          <Pie
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
}

export default Mappie;