import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Documentation = ({downloadSample, onRouteChange}) =>{
    return(
        <>
        <Container className="bg-light-gray">
            <br/>
            <Row className="about">
                <Col className="tl bg-light-gray">
                    <h4>About Result Predictor</h4>
                </Col>
            </Row>
            <Row className="">
                <Col className="tj bg-light-gray">
                <p>Result Predictor is a web application that uses artificial intelligence tools to forecast the final result of the students successfully graduating. 
                The project is developed by using the concepts of machine learning, which is the field of artificial intelligence and data science. This project aims 
                to aid the professors and administrative authorities of an institution to predict final result of students based on their performance up to current 
                semester. Based on the analysis of these predictions faculties can implement effective teaching methods to enhance the performance of the students.</p>
                </Col>
            </Row>
            <Row className="">
                <Col className="tj bg-light-gray">
                <p>In this application the forecasting of result is based on the Decision Trees Classifier model of machine learning. The semester wise complete result 
                of previous batches is used to train the model and is used to predict the results of the current batch. Furthermore, its performance is compared with 
                other classification type predictive models available like Logistics Regression, K Nearest Neighbor, etc. The comparative study shows the superiority 
                of Decision Trees Classifier.</p>
                </Col>
            </Row>
            <br/>
            <Row id="predictionModels">
                <Col className="tl bg-light-gray">
                    <h4>Prediction Models</h4>
                </Col>
            </Row>
            <Row className="">
                <Col className="tj bg-light-gray">
                The application uses semester status i.e. pass or fail and backlog status i.e. is there any backlog present, of every student as data. Based on this data, 
                predictions are made and further performance analysis is done. This application consists of five different models; the description of models is given below:
                <ol>
                    <li>
                        Model 1 – In this model, results of semester 1 and semester 2 and backlog status at the end of semester 1 and semester 2 are used to train the model
                         and predict the final result.
                    </li>
                    <li>
                        Model 2 – In this model, results of semester 1, semester 2 and semester 3 and backlog status at the end of semester 1, semester 2 and semester 3 are
                         used to train the model and predict the final result.
                    </li>
                    <li>
                        Model 3 – In this model, results of semester 1, semester 2, semester 3 and semester 4 and backlog status at the end of semester 1, semester 2, semester 3
                         and semester 4 are used to train the model and predict the final result.
                    </li>
                    <li>
                        Model 4 – In this model, results of semester 1, semester 2, semester 3, semester 4 and semester 5 and backlog status at the end of semester 1, semester 2,
                         semester 3, semester 4 and semester 5 are used to train the model and predict the final result.
                    </li>
                    <li>
                        Model 5 – In this model, results of semester 1, semester 2, semester 3, semester 4, semester 5 and semester 6 and backlog status at the end of semester 1,
                         semester 2, semester 3, semester 4, semester 5 and semester 6 are used to train the model and predict the final result.
                    </li>
                </ol>
                </Col>
            </Row>
            <br/>
            <Row id="modes">
                <Col className="tl bg-light-gray">
                    <h4>Modes</h4>
                </Col>
            </Row>
            <Row className="">
                <Col className="tj  bg-light-gray">
                The application has two different modes 
                <ol>
                    <li>
                        Batch Result
                    </li>
                    <li>
                        Single Result
                    </li>
                </ol>

                <h6>Batch Result</h6> 
                <p>In batch result mode, the final result of a complete batch or a section can be predicted according to the selected prediction model. The user have to upload the
                result of the batch in excel format, the application will do the predictions and then excel file with the predicted result can be downloaded.</p>
                
                <h6>Single Result</h6>
                <p>In single result mode, the final result of a single student can be predicted by specifying the status of the student in different semesters.</p>

                </Col>
            </Row>
            <br/>
            <Row className="">
                <Col className="tl bg-light-gray">
                    <h4>How To Use</h4>
                </Col>
            </Row>
            <Row id="howToUse">
                <Col className="tl bg-light-gray">
                    
                <p>
                    Select one of the options from the navigation bar, <a href="#howToUse" onClick={()=>onRouteChange('batch')}>BATCH RESULT</a> or <a href="#howToUse" onClick={()=>onRouteChange('home')}>SINGLE RESULT</a>.
                </p>
                <h6>Batch Result</h6>
                <ol>
                    <li>
                        <p>Choose the desired result file to upload.</p>
                    </li>
                    <li>
                        <p>Select appropriate prediction model. To know more about models, see: <a href="#predictionModels">Prediction Models</a>.</p>
                    </li>
                    <li>
                        <p>Click Upload & Predict button to upload the file. The application will start predicting the result as soon as the file is uploaded.</p>
                    </li>
                    <li>
                        <p>Once the result is predicted, Download button will be enabled. Click on the button to download the predicted result file.</p>
                    </li>
                    <p className="i">Important: Column names in the result file to be uploaded must be same as the <a href="#modes" onClick={downloadSample}>Sample Result File</a>.</p>
                </ol>

                <h6>Single Result</h6>
                <ol>
                    <li>
                        <p>Select appropriate prediction model from single result navigation bar. To know more about models, see: <a href="#predictionModels">Prediction Models</a>.</p>
                    </li>
                    <li>
                        <p>Choose desired semester result status and backlog status for different semesters.</p>
                    </li>
                    <li>
                        <p>Click on the Predict button to predict the final result based on the chosen statuses.</p>
                    </li>
                    <li>
                        <p>Once the result is predicted, final status will be displayed on screen.</p>
                    </li>
                </ol>
                </Col>
            </Row>
            <br/>
        </Container>
        <br/>
        </>
    )
}

export default Documentation;
