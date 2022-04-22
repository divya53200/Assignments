import React from 'react'
// import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
// import Cricket from './Cricket.js'
// import FootBall from './FootBall.js'
// import Tennis from './Tennis.js'
// import Home from './Home.js'
// import ErrorPage from './ErrorPage.js'
import Love from './Love.js'
function App(){
  return(
    <div>
      <Love/>
    </div>
    // <Router>
    // <div>App</div>
    // <div>Nav bar
    //   <Link to ='/'>Home</Link>
    // <Link to='/cricket'>Cricket</Link>{``}
    // <Link to='/football'>FootBall</Link>{``}
    // <Link to='/tennis'>Tennis</Link>{``}
    // </div>
   
    // <Switch>
    // <Route exact path='/'>
    //    <Home/>
    //  </Route>
    //   <Route path='/cricket' component={Cricket}/>
       
     
    //  <Route 
    //  path="/football"
    //   render={(props)=>{
      
    //   return <FootBall {...props} />;
    //   }}/>
       
    
    //  <Route path='*'>
    //    <ErrorPage/>
    //  </Route>
    
    // </Switch>
    // </Router>

  )
}
export default App