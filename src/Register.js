import React, {Component} from 'react';
import './register.css'


class Register extends Component{
    state={
        title:'',
        firstName:'',
        lastName:'',
        dateofbirth:'',
        email:'',
        password:'',
        confirmPassword:'',
        register:'',
        reset:'',
        submit:false,
    }
    handleSubmit=()=>{
      if(!this.state.title)
      alert("title is mandatory")
      if(!this.state.firstName)
      alert("firstName is mandatory")
      if(!this.state.lastName)
      alert("lastName is mandatory")
      if(!this.state.dateofbirth)
      alert("date of birth is mandatory")
      if(!this.state.email)
      alert("email is mandatory")
      if(!this.state.password)
      alert("password is mandatory")
      if(!this.state.confirmPassword)
      alert("confirmpassword is mandatory")
      
      if(this.state.password==this.state.confirmPassword)
      this.setState({submit:true})
      else{
        alert('password should match')}
      }
      handleChange=(e)=>{
      if(e.target.type=='checkbox'){
        this.setState({[e.target.name]:e.target.checked})
      }else{
        this.setState({[e.target.name]:e.target.value})
      }

  }
  handleReset=(e)=>{e.preventDefault();this.setState({title:'',
  firstName:'',
  lastName:'',
  dateofbirth:'',
  email:'',
  password:'',
  confirmPassword:'',
  })

  }

  render(){

  return(
    <div>
      {!this.state.submit && (
        <div>
                <div className='a'>
      <div>Title</div>    
     <div>First Name</div>
     <div>Last Name</div>
     
     </div>
     <div className='a'>
     
    <select name='title' value={this.state.title} onChange={this.handleChange}> 
    <option value='' >Select</option>
     <option value='Mr' >Mr</option>
    <option value='Mrs' >Mrs</option>
    <option value='Ms' >Ms</option>  
     </select>
     {this.state.title}
     <input type='text' name='firstName'onChange={this.handleChange} value={this.state.firstName}/>
     {this.state.firstName}
     <input type='text' name='lastName'onChange={this.handleChange} value={this.state.lastName}/>
     {this.state.lastName}
     </div>
     <div className='a'>
      <div>Date of Birth</div>    
     <div> Email</div>
     </div>
     <div className='a'>
     <input type='date' value={this.state.dateofbirth} onChange={this.handleChange}
     name='dateofbirth'/>  
     {this.state.dateofbirth}
     <input type='text' name='email'onChange={this.handleChange} value={this.state.email}/>
     {this.state.email}
     </div>
     <div className='a'>
      <div>Password</div>    
     <div> Confirm Password</div>
     </div>
     <div className='a'>
     <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
      <input type='password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange}/>
      {this.state.password}
      {this.state.confirmPassword}
      </div>
      <div className='a1'>
      <input type='checkbox'/>
      <label>Accept terms & Conditions</label>
      </div>
      
      <button onClick={this.handleSubmit}>Register</button>
      <button onClick={this.handleReset}>Reset</button>
      </div>)}
      

      {this.state.submit && (<div>
        <div>Name{this.state.title}{this.state.firstName} {this.state.lastName}</div>
        <div>Born on{this.state.dateofbirth}</div>
        <div>your email is{this.state.email}</div></div>)}
              
      
      
     
 



        
              
          </div>
      )
}
}
export default Register;
