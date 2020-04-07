import React from 'react';
import './App.css';
import Login from './components/Login'
import Navigation from './components/Navigation'
import Documentation from './components/Documentation'
import Model1 from './components/Model1'
import Model2 from './components/Model2'
import Model3 from './components/Model3'
import Model4 from './components/Model4'
import Model5 from './components/Model5'
import BatchResults from './components/BatchResults'
import Cookies from 'js-cookie';
import {storage} from './components/Firebase'
import Messenger from './components/Messenger';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      route : 'login',
      isLoggedIn : false,
      selectedFile: null,
      selectedFileName: null,
      isUploading: false,
      predicted_file_name:null,
      present_state:"No File Selected.",
      selected_model:'Model5',
      error:null,
      showSpinner:false,
    }
  }

  // Change routes
  onRouteChange = (route) =>{
    if(route === 'documentation'){
      this.setState({isLoggedIn:true})
    }
    this.setState({route:route})
  }

  // Sign Out
  signOut = () =>{
    this.resetState()
    this.setState({route:'login',isLoggedIn:false})
    Cookies.remove("isLoggedIn")
  }

  componentDidMount=()=>{
    const isLoggedIn = Cookies.get("isLoggedIn")
    if(isLoggedIn){
      this.setState({isLoggedIn:true,route:'documentation'})
    }
  }

  // Download Sample Result File
  downloadSample = () =>{
    this.setState({showSpinner:true,present_state:'Downloading Sample.'})
    storage.ref('files').child("Sample.xlsx").getDownloadURL()
      .then(url=>{
        fetch(url)
        .then(response=>{
          window.location.href = response.url;
        })
        .catch(error=>{
          console.log(error);
          this.resetState()
          this.setState({error:"Internal server error. Error Code: DS1. Contact admin."})       
        })
        this.setState({showSpinner:false,present_state:'No File Selected.'})
      })
      .catch(error=>{
        console.log(error);
        this.resetState()
        this.setState({error:"Internal server error. Error Code: DS2. Contact admin."})
      })
  }
  // Reset state
  resetState = () =>{
    if(document.getElementById('file')){
     document.getElementById('file').value=null
    }
    this.setState({
      selectedFile:null,
      selectedFileName:null,
      isUploading:false,
      predicted_file_name:null,
      present_state:"No file selected.",
      error:null,
      showSpinner:false,
    })
  }

  // Validate file selected
  fileValidationHandler = (event) =>{
    const acceptedFiles = ["xlsx", "csv", "xls"];
    const fileNameExtension = event.target.files[0].name.split('.')
    if (acceptedFiles.indexOf(fileNameExtension[fileNameExtension.length-1])>=0) {
    
      this.setState({
        selectedFile:event.target.files[0],
        selectedFileName:event.target.files[0].name,
        present_state:"File Validated. Ready to upload."
      })

    }else{
      event.target.value = null
      alert("File type must be xlsx, xls or csv")
    }
  }

  //Model Selection Handler
  modelSelectionHandler = selected_model =>{
    this.setState({selected_model})  
  }

  //Prediction Handler
  predictionHandler = () =>{
    storage.ref('files').child(this.state.selectedFileName).getDownloadURL()
      .then(url=>{
        fetch("https://rp-excel-manipulation-api.herokuapp.com/batch_predict",{
          method:'post',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify([{
            "url":url,
            "name":this.state.selectedFileName,
            "selected_model":this.state.selected_model
          }])
        })
        .then(response=>response.json())
        .then(response=>{
          if(response['status']===200){
            console.log("Predictions Done!");  

            this.setState({
              predicted_file_name:response['predicted_file_name'],
              present_state:"Results Predicted. File Ready to Download.",
              showSpinner:false,
            })  
          }else{
            console.log(response['trace']);
            
            this.resetState()
            this.setState({error:"Internal server error. Error Code: PH1. Contact admin."})
          }         
        })
        .catch(err=>{
          console.log(err)
          this.resetState()
          this.setState({error:"Internal server error. Error Code: PH2. Contact admin."})
        })
      })
      .catch(error=>{
        console.log(error);
        this.resetState()
        this.setState({error:"Internal server error. Error Code: PH3. Contact admin."})
      })
  }

  //Upload File
  fileUploadHandler=()=>{
    if(this.state.selectedFile){
      const uploadTask = storage.ref(`files/${this.state.selectedFileName}`).put(this.state.selectedFile)

      this.setState({
        isUploading:true,
        present_state:"Uploading File.",
        showSpinner:true
      })

      uploadTask.on('state_changed',
        (snapshot)=>{
          //progress
        },
        (error)=>{
          //error
          console.log(error);
          this.setState({error:"Internal server error. Error Code: UF1. Contact admin.",showSpinner:false})
        },
        ()=>{
          //complete
          console.log("Upload Done!");          
          this.setState({
            present_state:"File Uploaded. Predicting Results.",
            isUploading:false,
          })
          this.predictionHandler()
        }
      );
    }else{
      this.setState({error:"No File Selected."})
    }
  }

  // Download File
  fileDownloadHandler = () =>{  
    if (this.state.predicted_file_name){
      
      this.setState({present_state:"File will be downloaded.", showSpinner:false})
      
      storage.ref('files').child(this.state.predicted_file_name).getDownloadURL()
      .then(url=>{
        fetch(url)
        .then(response=>{
          window.location.href = response.url;
        })
        .catch(error=>{
          console.log(error);
          this.resetState()
          this.setState({error:"Internal server error. Error Code: DF1. Contact admin."})       
        })

        console.log("Download Done!");

        this.resetState()
        this.setState({present_state:"File will be downloaded."})
      })
      .catch(error=>{
        console.log(error);
        this.resetState()
        this.setState({error:"Internal server error. Error Code: DF2. Contact admin."})
      })
    }
  }

  render(){
    const {isLoggedIn, selectedFile, present_state, route, error, showSpinner} = this.state
    const {onRouteChange, modelSelectionHandler,
          fileDownloadHandler, fileUploadHandler,
          fileValidationHandler, resetState,
          signOut, downloadSample} = this
    return (
      <div className = 'App'>
        <Navigation onRouteChange={onRouteChange} isLoggedIn={isLoggedIn} route={route} signOut = {signOut}/>
        <Messenger isLoggedIn={isLoggedIn}/>
        <br/>
        {
          route === 'login'
          ? <Login onRouteChange = {onRouteChange}/>
          : route === 'batch'
            ? <BatchResults 
                error={error}
                resetState={resetState}
                modelSelectionHandler={modelSelectionHandler}
                present_state={present_state} 
                selectedFile={selectedFile}
                fileDownloadHandler={fileDownloadHandler} 
                fileUploadHandler={fileUploadHandler}
                fileValidationHandler={fileValidationHandler}
                showSpinner = {showSpinner}
                downloadSample = {downloadSample}
              />
            : route === 'home'
              ? <Model1/>
              : route === 'model2'
                ? <Model2/>
                : route === 'model3'
                  ? <Model3/>
                  : route === 'model4'
                    ? <Model4/>
                    : route === 'model5'
                      ? <Model5/>
                      : route === 'documentation'
                        ? <Documentation 
                        downloadSample={downloadSample}
                        onRouteChange={onRouteChange}
                        />
                        : null
        }  
      </div> 
    );
  }
}

export default App;
