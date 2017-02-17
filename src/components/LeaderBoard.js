import React, { Component } from 'react';

import {Link} from 'react-router';

import LeaderBoardSec from './LeaderBoardSec';
import LeaderBoardHead from './LeaderBoardHead';

//import Header_menu from './components/Header_menu';

class LeaderBoard extends Component {
  render(){
    return (
       <div className="peopleSection">
      <div className="LeaderBoard ">
                <LeaderBoardHead/>

                <div className="profit_ranking" style_id="7_days_ranking">
                  <LeaderBoardSec/>
                  <LeaderBoardSec/>
                </div>
                </div>



               
           
   
         
      

     

    </div>
    );
  }
}




export default LeaderBoard;