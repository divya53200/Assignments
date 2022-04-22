
import React, {Component} from 'react';


class Form extends Component{
    state={
        firstName:'',
        lastName:'',
        age:20,
        address:'',
        gender:'M',
        singing:false,
        painting:false,
        dancing:false,
        dept:'',
        agreement:false,
        date:'',
        submit:false,
        password:'',
        confirmPassword:'',
    }
    handleSubmit=()=>{
      if(!this.state.firstname)
      alert("firstname is mandatory")
      if(this.state.password==this.state.confirmPassword)
      this.setState({submit:true})
      else{
        alert('password should match')
      }
    }
    handleChange=(e)=>{
      if(e.target.type=='checkbox'){
        this.setState({[e.target.name]:e.target.checked})
      }else{
        this.setState({[e.target.name]:e.target.value})
  
      }
    }
  render(){

  return(
    <div>
    Registration Form

    <div>

    {!this.state.submit &&(
    
    <div>
    
    <label>FirstName</label>
    <input type='text' name='firstName'onChange={this.handleChange} 
    value={this.state.firstName}/><br/>
    <label>LastName</label>
    <input type='text' name='lastName'onChange={this.handleChange} 
    value={this.state.lastName}/>
    
    {this.state.firstName}
    <br/>
    <label>Date</label>
    <input type='date' value={this.state.date} onChange={this.handleChange}
    name='date'/>  
    {this.state.date} 
    <label>Age</label>
    <input type='number' name='age'onChange={this.handleChange}
    value={this.state.age}/>
    {this.state.age}<br/>
    <label>Address</label><br/>
    <textarea name='address' value={this.state.address} onChange={
        this.handleChange} placeholder='type your address'
    />
    {this.state.address}
    //select
    <label>Department</label>
    <select name='dept' value={this.state.dept} onChange={this.handleChange}> 
    
    <option value=''>Please select yor department</option> 
    
    <option value='cse' >CSE</option>
    <option value='Physics' >Physics</option>
    <option value='biology' >biology</option>  
     </select>
     {this.state.dept}
     //radio button
     <br/>
     <label>gender</label>
      <input type='radio' name='gender' value='M'
      onChange={this.handleChange}/>
      <label>male</label>
      <input type='radio' name='gender' value='F'
      onChange={this.handleChange}/>
      <label>female</label>
      <input type='radio' name='gender' value='others'
      onChange={this.handleChange}/>
      <label>others</label>
      {this.state.gender}
      <br/> 
      <label>Hobbies</label>
      <input type='checkbox' checked={this.state.singing} name='singing'
       onChange={this.handleChange}/> singing
      <input type='checkbox'  checked={this.state.painting} name='painting'
      onChange={this.handleChange}/> Painting    
      <input type='checkbox'  checked={this.state.dancing} name='dancing'
      onChange={this.handleChange}/> Dancing
      {this.state.singing && 'singing'}
      {this.state.singing && 'Painting'}
      {this.state.dancing && 'Dancing'}
      //password
      <br/>
      <label>password</label>
      <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
      <label>confirm Password</label>
      <input type='password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange}/>
      {this.state.password}
      {this.state.confirmPassword}

      <button className='btn btn-primary'
      onClick={this.handleSubmit}>Submit</button>
      </div>)}
      </div>
      {this.state.submit && (
      <div>
        <div>Name{this.state.firstName} {this.state.lastName}</div>
        <div>Born on{this.state.date}</div>
        <div>Your are{this.state.age} years old</div>
        <div>your address is{this.state.address}</div>
        <div>yo are studying in{this.state.dept}</div>
        <div>gender selected is{this.state.gender}      </div>
        <div>your hobbies are {this.state.dancing && 'Dancing'} {this.state.painting && 'painting'} {this.state.singing && 'Singing'}</div>
        </div>)}
        
       </div>
      )
}
}
export default Form;
