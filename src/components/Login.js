import React from 'react';
import firebase from '../components/Firebase/index'

const formErrors = {
    emailError:'',
    passwordError:''
}
const initialState ={
    loginEmail : '',
    loginPassword : '',
    error : '',
    formErrors
}
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = initialState
    }

    onEmailChange=(event)=>{
		this.setState({loginEmail:event.target.value})
	}
	onPasswordChange=(event)=>{
		this.setState({loginPassword:event.target.value})
    }
    
    validate=()=>{
		let emailError='';
		let passwordError='';
		this.setState({emailError,passwordError})
		if (!this.state.loginEmail.includes('@')){
			emailError='*Invalid Email';
		}
		if (!this.state.loginEmail.includes('.')){
			emailError='*Invalid Email';
		}
		if(!this.state.loginEmail){
			emailError='*Email Required';
		}
		if(this.state.loginPassword.length<6){
			passwordError='*Password must be of 6 digits';
			if(!this.state.loginPassword){
				passwordError='*Password Required';
			}
		}
		if(emailError || passwordError){
			this.setState({emailError,passwordError})
			return false
		}
		return true
    }
    
	onSignInSubmit=()=>{
		const isValid = this.validate();
		if(isValid){
            console.log('Validated')
			firebase.auth().signInWithEmailAndPassword(this.state.loginEmail, this.state.loginPassword)
			.then(()=>{
				firebase.auth().onAuthStateChanged((user)=> {
					if (user) {
					  // User is signed in.
					  this.props.onRouteChange('loggedin')
					} else {
					  // No user is signed in.
					}
				  });
			})
			.catch((error)=> {
				// Handle Errors here.
				this.setState({error:'wrong credentials'})
				// ...
			  }
			  
			  );
		}
    }

    render(){
		const {onEmailChange,onPasswordChange,onSignInSubmit}=this
		const {emailError,passwordError} = this.state
        return(
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-3">
			<main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0">Admin Login</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input 
			        className="pa2 input-reset ba bg-transparent hover-bg-black w-100" 
			        type="email" 
			        name="email-address"  
			        id="email-address"
			        onChange={onEmailChange}/>
			        <div className="db fw6 lh-copy f6 red">{emailError}</div>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input 
			        onChange={onPasswordChange}
			        className="b pa2 input-reset ba bg-transparent hover-bg-black w-100" 
			        type="password" 
			        name="password"  
			        id="password"/>
			        <div className="db fw6 lh-copy f6 red">{passwordError}</div>
			      </div>
			    </fieldset>
			    <div className = "center">
				    <div className="pr4 mt3 center">
				      <input 
				      onClick={onSignInSubmit} 
				      className="b ph3 pv2 shadow-3 input-reset link ba b--black bg-transparent grow pointer f6 dib" 
				      type="submit" 
				      value="Sign in"/>
				    </div>
			    </div>
			    {//Server Form Validation
		      		this.state.error==="wrong credentials"
		      		?<label className="db fw6 lh-copy f6 red">*Incorrect Email or Password</label>
		      		:null
				}
			  </div>
			</main>
		</article>
        )
    }
}

export default Login;