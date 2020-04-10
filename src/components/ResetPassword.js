import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import firebase from '../components/Firebase/index';


class ResetPassword extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			email:'',
			error:'',
			message:'',
		}
	}

	onEmailChange=(event)=>{
		this.setState({email:event.target.value})
	}

	onPasswordReset = () => {
		this.setState({error:"",message:""})
		firebase.auth().sendPasswordResetEmail(this.state.email)
		.then(()=>{
			//Email sent.
			this.setState({message:'Email Sent'})
			console.log('Email Sent')
		}
		).catch(error => {
			// An error happened.
			this.setState({error:error['message']})
		  });
	}

	render(){
		const {onRouteChange} = this.props
		const {onPasswordReset,onEmailChange} = this
	
		return(
			<div>
				<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-3">
					<main className="pa4 black-80">
						<div className="measure">
							<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
								<legend className="f1 fw6 ph0 mh0">Reset Password</legend>
								<div className="mt3">
								<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
								<input 
								className="pa2 input-reset ba bg-transparent hover-bg-black w-100" 
								type="email" 
								name="email-address"  
								id="email-address"
								onChange={onEmailChange}
								/>
								</div>
								<br/>
								<input 
								onClick={event=>onPasswordReset()}
								className="b ph3 pv2 shadow-3 input-reset link ba b--black bg-transparent grow pointer f6 dib" 
								type="submit" 
								value="Send Email"/>
								
							</fieldset>
							<br/>
							{//Server Form Validation
								this.state.error
								?<p className="db fw6 lh-copy f6 red">*{this.state.error}</p>
								:<p className="db fw6 lh-copy f6 green">{this.state.message}</p>
							}
							<hr/>
							<label className="db fw6 lh-copy f6 pointer" onClick={()=>onRouteChange('resetPass')}>Back To:</label>
							<Container>
								<Row>
									<Col>
										<p onClick={()=>onRouteChange('login')}
										className="b ph3 pv2 dim shadow-3 ba b--black bg-transparent grow pointer f6 dib">Sign In</p>
									</Col>
									<Col>
										<p onClick={()=>onRouteChange('register')}
										className="b ph3 pv2 dim shadow-3 ba b--black bg-transparent grow pointer f6 dib">Register</p>
									</Col>
								</Row>
							</Container>

							
			    
						</div>
					</main>
				</article>
			</div>
		)
	}

}

export default ResetPassword;