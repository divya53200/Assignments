import React, { Component } from 'react'; 
class Count extends Component { 
  state = { 
    icount: '', 
    count: 0 
  } 
  handleIncrement = () => {this.setState({ count:Number(this.state.count)+Number(this.state.icount)})} 
  handleDecrement = () => {this.setState({ count:Number(this.state.count)-Number(this.state.icount)})} 
  handleSubmit = (e) => {this.setState({[e.target.name]:e.target.value})} 
 
 
  render() { 
    return ( 
      <div> 
        <div> 
          <span class="h3">Count :{this.state.count}</span> 
          <input type="number" name="icount" value={this.state.icount} onChange={this.handleSubmit} /> 
          <button type="button" class="btn btn-primary btn-lg" onClick={this.handleIncrement} >Increment</button> 
          <button type="button" class="btn btn-warning btn-lg" onClick={this.handleDecrement}>Decrement</button> 
        </div> 
 
      </div> 
    ) 
  } 
} 
export default Count;

