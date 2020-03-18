import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Navigation = ({isLoggedIn,onRouteChange,route}) =>{
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
					{/* <p onClick={()=>onRouteChange('batch')} className='f3 link dim black pa3 pointer'>Batch Results</p>
					<p onClick={()=>onRouteChange('home')} className='f3 link dim black pa3 pointer'>Single Student</p> */}
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
							{/* <p onClick={()=>onRouteChange('home')} className='f3 link dim black underline pa3 pointer'>Model 1</p>
							<p onClick={()=>onRouteChange('model2')} className='f3 link dim black underline pa3 pointer'>Model 2</p>
							<p onClick={()=>onRouteChange('model3')} className='f3 link dim black underline pa3 pointer'>Model 3</p>
							<p onClick={()=>onRouteChange('model4')} className='f3 link dim black underline pa3 pointer'>Model 4</p>
							<p onClick={()=>onRouteChange('model5')} className='f3 link dim black underline pa3 pointer'>Model 5</p> */}
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