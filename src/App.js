import React from 'react';
import './App.css';
import Login from './components/Login'
import Navigation from './components/Navigation'
import Model1 from './components/Model1'
import Model2 from './components/Model2'
import Model3 from './components/Model3'
import Model4 from './components/Model4'
import Model5 from './components/Model5'
import BatchResults from './components/BatchResults'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      route : 'login',
      isLoggedIn : false
    }
  }

  onRouteChange = (route) =>{
    if(route === 'loggedin'){
      this.setState({isLoggedIn:true})
    }
    this.setState({route:route})
  }

  render(){
    const {isLoggedIn} = this.state
    return (
      <div className = 'App'>
        <Navigation onRouteChange={this.onRouteChange} isLoggedIn={isLoggedIn} route={this.state.route}/>
        {
          this.state.route === 'login'
          ? <Login onRouteChange = {this.onRouteChange}/>
          : this.state.route === 'batch'
            ? <BatchResults/>
            :this.state.route === 'home'
              ? <Model1/>
              : this.state.route === 'model2'
                ? <Model2/>
                : this.state.route === 'model3'
                  ? <Model3/>
                  : this.state.route === 'model4'
                    ? <Model4/>
                    : this.state.route === 'model5'
                      ? <Model5/>
                      : null
        }  
      </div> 
    );
  }
}

export default App;
