import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class Model5 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            semester1_result:1,
            isBackLogPresent1:0,
            semester2_result:1,
            isBackLogPresent2:0,
            semester3_result:1,
            isBackLogPresent3:0,
            semester4_result:1,
            isBackLogPresent4:0,
            semester5_result:1,
            isBackLogPresent5:0,
            semester6_result:1,
            isBackLogPresent6:0,
            prediction:null,
            error:null,
            showSpinner:false,
        }
    }

    onResultsChanged = (event) =>{
        this.setState({[event.target.name]:event.target.value})
    }

    onPredict = () =>{
        this.setState({prediction:null,showSpinner:true,error:null})
        fetch("https://radiant-falls-58345.herokuapp.com/predict_model5",{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify([{
                "semester1_result":Number(this.state.semester1_result),
                "isBackLogPresent1":Number(this.state.isBackLogPresent1),
                "semester2_result":Number(this.state.semester2_result),
                "isBackLogPresent2":Number(this.state.isBackLogPresent2),
                "semester3_result":Number(this.state.semester3_result),
                "isBackLogPresent3":Number(this.state.isBackLogPresent3),
                "semester4_result":Number(this.state.semester4_result),
                "isBackLogPresent4":Number(this.state.isBackLogPresent4),
                "semester5_result":Number(this.state.semester5_result),
                "isBackLogPresent5":Number(this.state.isBackLogPresent5),
                "semester6_result":Number(this.state.semester6_result),
                "isBackLogPresent6":Number(this.state.isBackLogPresent6)
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
        }).catch(err=>{
            this.setState({showSpinner:false,error:"Internal server error. Error Code: OP1. Contact admin."})
            console.log(err)
        })
    }
    render(){
        return(
            <Container>
                <div className = 'Model1'>
                    <h4 className = 'pa4'>Model 5</h4>
                    <Row className = 'flex center pb4'>
                        <Col sm className = 'ph3'>
                            Sem 1 Result
                            <div>
                                <select name="semester1_result" onChange={this.onResultsChanged}>
                                    <option value='1' selected='selected'>Pass</option>
                                    <option value='0'>Fail</option>
                                </select>
                            </div>
                        </Col>
                        <Col sm className = 'ph3'>
                            Sem 1 Backlogs
                            <div>
                                <select name="isBackLogPresent1" onChange={this.onResultsChanged}>
                                    <option value='1'>Yes</option>
                                    <option value='0' selected='selected'>No</option>
                                </select>
                            </div>
                        </Col>
                        <Col sm className = 'ph3'>
                            Sem 2 Result
                            <div>
                                <select name="semester2_result" onChange={this.onResultsChanged}>
                                    <option value='1' selected='selected'>Pass</option>
                                    <option value='0'>Fail</option>
                                </select>
                            </div>
                        </Col>
                        <Col sm className = 'ph3'>
                            Sem 2 Backlogs
                            <div>
                                <select name="isBackLogPresent2" onChange={this.onResultsChanged}>
                                    <option value='1'>Yes</option>
                                    <option value='0' selected='selected'>No</option>
                                </select>
                            </div>
                        </Col>
                        <Col sm className = 'ph3'>
                            Sem 3 Result
                            <div>
                                <select name="semester3_result" onChange={this.onResultsChanged}>
                                    <option value='1' selected='selected'>Pass</option>
                                    <option value='0'>Fail</option>
                                </select>
                            </div>
                        </Col>
                        <Col sm className = 'ph3'>
                            Sem 3 Backlogs
                            <div>
                                <select name="isBackLogPresent3" onChange={this.onResultsChanged}>
                                    <option value='1'>Yes</option>
                                    <option value='0' selected='selected'>No</option>
                                </select>
                            </div>
                        </Col>
                        <Col sm className = 'ph3'>
                            Sem 4 Result
                            <div>
                                <select name="semester4_result" onChange={this.onResultsChanged}>
                                    <option value='1' selected='selected'>Pass</option>
                                    <option value='0'>Fail</option>
                                </select>
                            </div>
                        </Col>
                        <Col sm className = 'ph3'>
                            Sem 4 Backlogs
                            <div>
                                <select name="isBackLogPresent4" onChange={this.onResultsChanged}>
                                    <option value='1'>Yes</option>
                                    <option value='0' selected='selected'>No</option>
                                </select>
                            </div>
                        </Col>
                        <Col sm className = 'ph3'>
                            Sem 5 Result
                            <div>
                                <select name="semester5_result" onChange={this.onResultsChanged}>
                                    <option value='1' selected='selected'>Pass</option>
                                    <option value='0'>Fail</option>
                                </select>
                            </div>
                        </Col>
                        <Col sm className = 'ph3'>
                            Sem 5 Backlogs
                            <div>
                                <select name="isBackLogPresent5" onChange={this.onResultsChanged}>
                                    <option value='1'>Yes</option>
                                    <option value='0' selected='selected'>No</option>
                                </select>
                            </div>
                        </Col>
                        <Col sm className = 'ph3'>
                            Sem 6 Result 
                            <div>
                                <select name="semester6_result" onChange={this.onResultsChanged}>
                                    <option value='1' selected='selected'>Pass</option>
                                    <option value='0'>Fail</option>
                                </select>
                            </div>
                        </Col>
                        <Col sm className = 'ph3'>
                            Sem 6 Backlogs
                            <div>
                                <select name="isBackLogPresent6" onChange={this.onResultsChanged}>                            
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
                            ? <p className = "green"><Spinner animation='border' variant='success' /> Predicting </p>
                            : <p>{
                                this.state.error === null
                                ?null
                                :<p className="red b">{this.state.error}</p>
                                }</p>
                            }
                        </p>
                            :(
                                this.state.prediction === 1
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

export default Model5;