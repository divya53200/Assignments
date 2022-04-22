import React, {Component} from 'react';


class Map extends Component{
    state={
        name:'raj',
        numbers:[1,2,3,4],
        fruits:['apple','mango','grapes','bannana']
    }
  render(){

  return(
    <div> {this.state.numbers.map ((n,i)=><h2 key={i}>{n}{i}</h2>)}
    {this.state.fruits.map((fruits,i) =><h3 key={i}>{i+1}.{fruits}</h3>)}
    </div>
      )
}
}
export default Map;

