import React from 'react';
import './App.css';
import Login from './components/Login'
import Home from './components/Home'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      route : 'login',
      isLoggedIn : false
    }
  }

  onRouteChange = (route) =>{
    if(route === 'home'){
      this.setState({isLoggedIn:true})
    }
    this.setState({route:route})
  }

  render(){
    return (
      <div className = 'App'>
        {
          this.state.route === 'login'
          ? <Login onRouteChange = {this.onRouteChange}/>
          :<Home/>
        }
  
      </div> 
    );
  }
}

export default App;
