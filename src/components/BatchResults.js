import React from 'react';

class BatchResults extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
          <div height = "100%">
              <iframe 
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRBE5pQ0ZZ6ZyqjCdel45uJMr7Y5eefcqdosHO8UHaLjRvA3L7EId3cvSYtv5a6M7u0TI6bbP27cfKm/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
              width="100%" 
              height="100%"
              height="600px"
              ></iframe>
          </div>  
        )
    }
}

export default BatchResults;