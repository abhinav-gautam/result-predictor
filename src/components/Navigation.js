import React from 'react';

const Navigation = ({isLoggedIn,onRouteChange,route}) =>{
    if(isLoggedIn===true){
		return (
			<div>
				<nav className = 'flex justify-around'> 
					<p onClick={()=>onRouteChange('batch')} className='f3 link dim black underline pa3 pointer'>Batch Results</p>
					<p onClick={()=>onRouteChange('home')} className='f3 link dim black underline pa3 pointer'>Single Student</p>
				</nav>
				<hr/>
				{
					["home","model2","model3","model4","model5"].indexOf(route)>=0
					? <div>
						<nav className = 'flex justify-around'>
							<p onClick={()=>onRouteChange('home')} className='f3 link dim black underline pa3 pointer'>Model 1</p>
							<p onClick={()=>onRouteChange('model2')} className='f3 link dim black underline pa3 pointer'>Model 2</p>
							<p onClick={()=>onRouteChange('model3')} className='f3 link dim black underline pa3 pointer'>Model 3</p>
							<p onClick={()=>onRouteChange('model4')} className='f3 link dim black underline pa3 pointer'>Model 4</p>
							<p onClick={()=>onRouteChange('model5')} className='f3 link dim black underline pa3 pointer'>Model 5</p>
						</nav>
						<hr/>
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