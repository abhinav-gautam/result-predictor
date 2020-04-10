import React from 'react';
import firebase from '../components/Firebase/index';
import Spinner from 'react-bootstrap/Spinner';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const formErrors = {
    emailError:'',
    passwordError:''
}
const initialState ={
    loginEmail : '',
    loginPassword : '',
    error : '',
	formErrors,
	showSpinner:false,
}
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = initialState
	}
	
	uiConfig = {
		signInFlow:"popup",
		signInOptions:[
			firebase.auth.GoogleAuthProvider.PROVIDER_ID
		],
		callbacks:{
			signInSuccess:()=>false
		}
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
		this.setState({error:""})
		const isValid = this.validate();

		if(isValid){
			console.log('Validated')
			this.setState({showSpinner:true})

			// Signing in with firebase
			firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
			.then(()=>{
				firebase.auth().signInWithEmailAndPassword(this.state.loginEmail, this.state.loginPassword)
				.catch((error)=> {
					// Handle Errors here.
					this.setState({error:error['message'],showSpinner:false})
				}	  
				);
			})
			
		}
    }

    render(){
		const {onEmailChange,onPasswordChange,onSignInSubmit}=this
		const {emailError,passwordError,showSpinner} = this.state
        return(
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-3">
			<main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0">Login</legend>
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
		
				{!showSpinner
					?<Container fluid >
					<Row className="pl2 mt3" xs={12} md={12}>
						<Col>
							<input 
							onClick={onSignInSubmit} 
							className="b ph3 pv2 shadow-3 input-reset link ba b--black bg-transparent grow pointer f6 dib" 
							type="submit" 
							value="Sign in"/>
						</Col>
						<Col className="">
							<p onClick={()=>this.props.onRouteChange('register')} className="b ph3 pv2 dim shadow-3 ba b--black bg-transparent grow pointer f6 dib">Register</p>
						</Col>
					</Row>
					<label className="db fw6 lh-copy f6 pointer" onClick={()=>this.props.onRouteChange('resetPass')}>Forget Password?</label>
					<hr/>
					<Row className="" xs={12} md={12}>
						
						<StyledFirebaseAuth
							uiConfig = {this.uiConfig}
							firebaseAuth = {firebase.auth()}
						/>
					</Row>
					</Container>
					:<p><Spinner animation='border'/> Signing In </p>
				}
			   
			    {//Server Form Validation
		      		this.state.error
		      		?<p className="db fw6 lh-copy f6 red">*{this.state.error}</p>
		      		:null
				}
			  </div>
			</main>
		</article>
        )
    }
}

export default Login;