import React, { Component } from 'react'
import IndexCard from './IndexCard'
import Nav from './Nav'
import data from '../data'

class Profiles extends Component {
  constructor(){
    super();
    this.state = {
      data,
      index: 0
    }
    this.increase = this.increase.bind(this)
    this.decrease = this.increase.bind(this)
  };

  increase(){
    if(this.state.index < this.state.data.length - 1){
      this.setState({index: this.state.index + 1})
    }
  };

  decrease(){
    if(this.state.index > 0){
      this.setState({index: this.state.index - 1})
    }
  };

  render(){
    return(
      <div className='container'>
        <IndexCard className='indexCard' index={this.state.index} data={this.state.data}/>
        <Nav className='Nav' increase={this.increase} decrease={this.decrease}/>
      </div>
    )
  }
}

export default Profiles;