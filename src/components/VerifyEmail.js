import firebase from '../components/Firebase/index';
import React from 'react';

class VerifyEmail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            message:"",
            error:""
        }
    }
    verifyEmail = () =>{
        this.setState({error:"",message:""})
        const user = firebase.auth().currentUser
        user.sendEmailVerification()
        .then(()=>{this.setState({message:'Email Sent'})})
        .catch(error=>{this.setState({error:error['message']})})
      }
    render(){
        const {verifyEmail} = this
        return(
            <>
                Your email is not verified. A verification link is already sent to your email .<a href="#" onClick={verifyEmail}>Click Here</a> to send verification email again.
                {
                    this.state.error
                    ?<p className="db fw6 lh-copy f6 red">*{this.state.error}</p>
                    :<p className="db fw6 lh-copy f6 green">{this.state.message}</p>
                }
            </>
        )
    }
}

export default VerifyEmail;