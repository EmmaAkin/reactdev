import React, { Component } from 'react';

import {Link} from 'react-router';
import SportsHeader from './SportsHeader';
import LeagueHeader from './LeagueHeader';

//import Header_menu from './components/Header_menu';

class LeaderBoardSec extends Component {
  render(){
    return (
      <div className="LeaderBoardSection">

              
        <div className="LeaderBoardRank">
                            1
                    </div>
        <div className="LeaderBoardImage">
            <Link href="/tipster/testprathi">
                <img className="" src="/images/emanuel.jpg" alt="Ayo"/>
            </Link>
        </div>
        <div className="LeaderBoardProfile">
            <div className="LeaderBoardUsername">
                <Link href="/tipster/testprathi">
                                            Emanuel Awokoya
                                    </Link>
            </div>
            <div className="LeaderBoardFollowButton">
                    <div className="followBtn">
                                                                                                                                <button id="11832-13316-people" className="followDetails">
    <span className="follow-text">Follow</span>
    <span className="following-text" style={{display:'none'}}>Following</span>
    <span style={{display:'none'}} className="fa fa-spinner fa-spin"></span>
</button>                        </div>
            </div>
        </div>
        <div className="LeaderBoardStatus">
                                                <img src="/img/equal.png"/>
                                    </div>
        <div className="LeaderBoardFollowers">
            <div className="LeaderBoardCount">35</div>
            <div className="LeaderBoardName">followers</div>
        </div>
        <div className="LeaderBoardBets">
            <div className="LeaderBoardCount"></div>
            <div className="LeaderBoardName">placed bets</div>
        </div>
        <div className="LeaderBoardProfit">
            <div className="LeaderBoardCount">
                                                            <img className="clover" src="/img/clover-50.png"/>
                                                </div>
            <div className="LeaderBoardName">profit</div>
        </div>
        <div className="LeaderBoardArrow" data-user-id="11832">
            <img src="/img/icons/rankMore.png"/>
        </div>
    <div className="LeaderBoardMore" style={{display:'none'}}><Link href="/tipster/testprathi"><div className="LeaderBoardViewProfile">view profile</div></Link><div className="LeaderBoardForm"><div className="profileLossMore">L</div><div className="profileLossMore">L</div></div><div className="LeaderBoardUserStats"><div className="LeaderBoardCount">0%</div><div className="LeaderBoardName">win rate</div></div><div className="LeaderBoardUserStats"><div className="LeaderBoardCount"><p><i className="fa fa-bolt"></i><i className="fa fa-bolt" style={{opacity: '0.2'}}></i><i className="fa fa-bolt" style={{opacity: '0.2'}}></i></p></div><div className="LeaderBoardName">average odd</div></div><div className="LeaderBoardUserStats"><div className="LeaderBoardCount"><p><i className="fa fa-heartbeat"></i><i className="fa fa-heartbeat" style={{opacity: '0.2'}}></i><i className="fa fa-heartbeat" style={{opacity: '0.2'}}></i></p></div><div className="LeaderBoardName">risk level</div></div></div>
      </div>

    );
  }
}




export default LeaderBoardSec;