import React, { Component } from 'react';

import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import SportsCol from './SportsCol';
import SportsHeader from './SportsHeader';


//import Header_menu from './components/Header_menu';

class MidCol extends Component {
  render() {
    return (
      
      
     
        
          <div >
           <div class="emptyDiv"></div>
            <SportsHeader/>
            <SportsCol/>
           
            

     
      
     
        

     

    </div>
    );
  }
}





export default MidCol;