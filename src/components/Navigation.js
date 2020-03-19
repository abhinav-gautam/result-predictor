import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Navigation = ({isLoggedIn,onRouteChange,route,signOut}) =>{
    if(isLoggedIn===true){
		return (
			<div>
				<Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" className = 'flex justify-around'> 
					<Navbar.Brand href="#">Result Predictor</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
 					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="" onClick={()=>onRouteChange('batch')}>Batch Results</Nav.Link>
							<Nav.Link href="" onClick={()=>onRouteChange('home')}>Single Student</Nav.Link>
						</Nav>

						<Nav>
							<Nav.Link href="" onClick={()=>signOut()}>Sign Out</Nav.Link>

						</Nav>
					</Navbar.Collapse>					
				</Navbar>
			
				{
					["home","model2","model3","model4","model5"].indexOf(route)>=0
					? <div>
						<Navbar>
							<Navbar.Brand href="#">Single Student</Navbar.Brand>
							<Nav fill variant="tabs"  defaultActiveKey="link-1" className="mr-auto">
								<Container>
									<Row className="justify-content-md-center">
										<Col sm>
											<Nav.Item>
												<Nav.Link  eventKey="link-1" href="" onClick={()=>onRouteChange('home')}>Model 1</Nav.Link>
											</Nav.Item>
										</Col>
										<Col sm>
											<Nav.Item>
												<Nav.Link  eventKey="link-2" href="" onClick={()=>onRouteChange('model2')}>Model 2</Nav.Link>
											</Nav.Item>
										</Col>
										<Col sm>
											<Nav.Item>
												<Nav.Link  eventKey="link-3" href="" onClick={()=>onRouteChange('model3')}>Model 3</Nav.Link>
											</Nav.Item>
										</Col>
										<Col sm>
											<Nav.Item>
												<Nav.Link  eventKey="link-4" href="" onClick={()=>onRouteChange('model4')}>Model 4</Nav.Link>
											</Nav.Item>
										</Col>
										<Col sm>
											<Nav.Item>
												<Nav.Link  eventKey="link-5" href="" onClick={()=>onRouteChange('model5')}>Model 5</Nav.Link>
											</Nav.Item>
										</Col>
									</Row>
								</Container>				
							</Nav>
						</Navbar>
						
					</div>
					:null
				}				
			</div>		
	)
	}else{
		return(
			null
		)
	}
}
export default Navigation;