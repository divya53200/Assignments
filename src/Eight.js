import React, {Component} from 'react';
import './eight.css'



class Eight extends Component{
    state={
        count:0,
        increment:false,
        decrement:false,
    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    handleDecrement=()=>{
        this.setState({count:this.state.count-1})
        
    }
  render(){

  return(
    <div>
        {!this.state.increment  && (<div>
     <div>Count: {this.state.count}</div>
     <input type='text'/>
     <input  className='b'onClick={this.handleIncrement} type='text' placeholder='Increment'/>
     <input className='y' onClick={this.handleDecrement} type='text' placeholder='Decrement'/>
     </div>)}
     
     {this.state.handleIncrement && (<div>
        <div>Count:{this.state.count+1}</div>

     <button  className='b'onClick={this.handleIncrement}  placeholder='Increment'/>
     <button className='y' onClick={this.handleDecrement}  placeholder='Decrement'/>
     
     </div>)}

    </div>
      )
}
}
export default Eight;

