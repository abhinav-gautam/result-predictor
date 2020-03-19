import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

class BatchResults extends React.Component{

    // Model Selection Handler
    modelSelectionHandler = event =>{
      this.props.modelSelectionHandler(event.target.value)    
    }

    // Reset state onClick file input
    resetState = event =>{
      event.target.value=null
      this.props.resetState()
    }
    
    render(){
      const{fileUploadHandler, error, fileValidationHandler, fileDownloadHandler, present_state, showSpinner, downloadSample} = this.props
      return(
        <Container >
            <Form>
                <Row className="justify-content-md-center   ">
                  <Col xs={12} md={'auto'}>                  
                      <div className="pa3 center">
                        <Form.Group>
                          <Form.Control type="file" onClick={this.resetState} onChange={fileValidationHandler} 
                          name="file" id="file" className="inputfile" 
                          accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"/>
                        </Form.Group>
                      </div>                     
                  </Col>
                  
                  <Col xs={12} md={'auto'} >
                    <div className="pa3 center">
                      <Form.Group>
                        Select Prediction Model: 
                        <select defaultValue="Model5" onChange={this.modelSelectionHandler}>
                          <option value="Model5">Model 5</option>
                          <option value="Model4">Model 4</option>
                          <option value="Model3">Model 3</option>
                          <option value="Model2">Model 2</option>
                          <option value="Model1">Model 1</option>
                        </select>
                      </Form.Group>
                    </div>           
                  </Col>   
                </Row>

                <Row className="justify-content-md-center">
                  <Col sm md="auto" className='pa3'><Button variant="primary" onClick={fileUploadHandler}>Upload</Button>     </Col>
                  <Col sm md="auto" className='pa3'><Button variant="primary" onClick={fileDownloadHandler}>Download</Button>   </Col>
                  <Col xs={12} md={'auto'}>
                    <div className="pa3 center">
                      <Button variant="link" onClick={downloadSample}>Download Sample Result File</Button>
                    </div>
                  </Col>
                </Row>      
            </Form>
                        
            
              
            <br/>
            <div className="red">
              {
                error === null
                  ?<p className="green">{
                    showSpinner === true
                    ? <p><Spinner animation='border' variant='success' /> {present_state} </p>
                    : present_state
                    }</p>
                  :<p className="b">{error}</p>
              }
            </div>
            
            {/* <br/>
            <iframe 
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRBE5pQ0ZZ6ZyqjCdel45uJMr7Y5eefcqdosHO8UHaLjRvA3L7EId3cvSYtv5a6M7u0TI6bbP27cfKm/pubhtml?widget=true&amp;headers=false"
            width="100%" 
            height="100%"
            height="600px"
            ></iframe> */}
        </Container>  
      );
  }
}

export default BatchResults;