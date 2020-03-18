import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';


class Model1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            semester1_result:1,
            isBackLogPresent1:0,
            semester2_result:1,
            isBackLogPresent2:0,
            prediction:null,
            showSpinner:false,
        }
    }

    onResultsChanged = (event) =>{
        this.setState({[event.target.name]:event.target.value})
    }

    onPredict = () =>{
        this.setState({prediction:null,showSpinner:true})
        fetch("http://127.0.0.1:12345/predict_model1",{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify([{
                "semester1_result":Number(this.state.semester1_result),
                "isBackLogPresent1":Number(this.state.isBackLogPresent1),
                "semester2_result":Number(this.state.semester2_result),
                "isBackLogPresent2":Number(this.state.isBackLogPresent2)
            }])
        }).then(response=>response.json())
        .then(response =>{
            // console.log(response)
            // console.log('Response Type:'+typeof(response['prediction']))
            if(response['prediction'] === '[1]'){
                this.setState({prediction:1,showSpinner:false})
            }else {
                this.setState({prediction:0,showSpinner:false})
            }
        }).catch(err=>console.log(err))

    }
    render(){
        return(
            <Container>
                
                    <div className = 'Model1'>
                        <Row>
                            <Col sm>
                               <h4 className = 'pa4'>Model 1</h4>
                            </Col>

                        </Row>
                        <Row className = 'flex center pb4'>
                            <Col sm className = "ph4">
                                Semester 1 Result
                                <div>
                                    <select name="semester1_result" onChange={this.onResultsChanged}>
                                        <option value='1' selected='selected'>Pass</option>
                                        <option value='0'>Fail</option>
                                    </select>
                                </div>
                            </Col>
                            <Col className = "ph4">
                                Semester 1 Backlogs
                                <div>
                                    <select name="isBackLogPresent1" onChange={this.onResultsChanged}>
                                        <option value='1'>Yes</option>
                                        <option value='0' selected='selected'>No</option>
                                    </select>
                                </div>
                            </Col>
                            <Col className = "ph4">
                                Semester 2 Result
                                <div>
                                    <select name="semester2_result" onChange={this.onResultsChanged}>
                                        <option value='1' selected='selected'>Pass</option>
                                        <option value='0'>Fail</option>
                                    </select>
                                </div>
                            </Col>
                            <Col className = "ph4">
                                Semester 2 Backlogs
                                <div>
                                    <select name="isBackLogPresent2" onChange={this.onResultsChanged}>
                                        <option value='1'>Yes</option>
                                        <option value='0' selected='selected'>No</option>
                                    </select>
                                </div>
                            </Col>                       
                        </Row>
                        <Button variant="primary" onClick={this.onPredict}>Predict</Button>
                        <div className = 'pv4'>
                            <h4>Predicted Result:</h4>
                            {
                                this.state.prediction === null
                                ?<p>
                                    {this.state.showSpinner === true
                                    ? <p><Spinner animation='border' variant='success' /> Predicting </p>
                                    : null
                                    }
                                </p>
                                
                                :(
                                    this.state.prediction ===1
                                    ? <p className = "green">Pass</p>
                                    : <p className = "red">Fail</p>
                                )
                            }
                        </div>    
                    </div>
                
            </Container>
        )
    }
}

export default Model1;