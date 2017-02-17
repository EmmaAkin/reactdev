import React, { Component } from 'react';

import {Link} from 'react-router';
import SportsHeader from './SportsHeader';
import LeagueHeader from './LeagueHeader';

//import Header_menu from './components/Header_menu';

class LeaderBoardHead extends Component {
  render(){
    return (
      <div className="LeaderBoardHeader">

               <h1>LeaderBoard</h1>
                 <div className="LeaderBoardFilter">
                    <ul>
                      <li dayamount="all_time">All time</li>
                      <li dayamount="60_days">60 Days</li>
                      <li dayamount="30_days">30 Days</li>
                      <li dayamount="7_days" class="active">7 Days</li>
                    </ul>
                </div>
      </div>

    );
  }
}




export default LeaderBoardHead;