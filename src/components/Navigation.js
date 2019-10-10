import React from 'react';

const Navigation = ({isLoggedIn,onRouteChange}) =>{
    if(isLoggedIn===true){
		return (
		<nav className = 'flex justify-around'>
			<p onClick={()=>onRouteChange('model1')} className='f3 link dim black underline pa3 pointer'>Model 1</p>
            <p onClick={()=>onRouteChange('model2')} className='f3 link dim black underline pa3 pointer'>Model 2</p>
            <p onClick={()=>onRouteChange('model3')} className='f3 link dim black underline pa3 pointer'>Model 3</p>
            <p onClick={()=>onRouteChange('model4')} className='f3 link dim black underline pa3 pointer'>Model 4</p>
            <p onClick={()=>onRouteChange('model5')} className='f3 link dim black underline pa3 pointer'>Model 5</p>
		</nav>

	)
	}else{
		return null
	}
	
}
export default Navigation;