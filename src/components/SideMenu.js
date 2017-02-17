import React, { Component } from 'react';

import {Link} from 'react-router';
import MatchItem from './MatchItem';
import SportsHeader from './SportsHeader';

//import Header_menu from './components/Header_menu';

class SideMenu extends Component {
 
 

  render() {
    return (
      <div className="SideMenu">

       

            <div className="leftMenu clearfix">
    
            <div className="scrollbox leftMenuscroll-cntd">
        
            <ul className="topnav">
              <li>
                  <Link id="chat_link" className=" chat" href="/app/chat" >Chat</Link>                     
                  
              </li>

              <li>
                  <Link  id="leaderboard_link" className=" leaderboard" href="/app/leaderboard">Leaderboard</Link>                     
                  
              </li>

              <li>
                  <Link  className=" peer" href="/app/peerbet"> <span style={{}}>Peer to Peer Bet</span></Link>                     
                 
              </li>
              
              <br/>
                 <span style={{color: '#00c4dc'}}><center> Sports Betting </center></span>
              


              <li>
                  <Link  className=" football" href="/app/football">Football</Link>                     
                  <i className="pull-right cursor-pointer fa fa-angle-down" data-sport-slug="football"></i>
              </li>

              <li>
                  <Link  className=" horse racing" href="/app/horseracing">Horse Racing</Link>                     
                  <i className="pull-right cursor-pointer fa fa-angle-down" data-sport-slug="football"></i>
              </li>

               <li>
                  <Link  className=" tennis" href="/app/tennis">Tennis</Link>                     
                  <i className="pull-right cursor-pointer fa fa-angle-down" data-sport-slug="tennis"></i>
              </li>

               <li>
                  <Link  className=" cricket" href="/app/cricket">Cricket</Link>                     
                  <i className="pull-right cursor-pointer fa fa-angle-down" data-sport-slug="football"></i>
              </li>
               <li>
                  <Link  className=" boxing" href="/app/boxing">Boxing</Link>                     
                  <i className="pull-right cursor-pointer fa fa-angle-down" data-sport-slug="football"></i>
              </li>
              <li>
                  <Link  className=" basketball" href="/app/basketball">Basketball</Link>                     
                  <i className="pull-right cursor-pointer fa fa-angle-down" data-sport-slug="basketball"></i>
              </li>

              </ul>

                  
        <div className="shareButtonsLeft">
            <div className="facebookShareLeft cursor-pointer" onclick="socialSharePopup('facebook');"><i className="fa fa-facebook"></i>Share</div>
            <div className="twitterShareLeft cursor-pointer" onclick="socialSharePopup('twitter');"><i className="fa fa-twitter"></i>Tweet</div>
        </div>
        <Link target="_blank" href="http://blog.betfect.com/"><div className="blogLink">Stakewithme Blog</div></Link>
    </div>
</div>
    
                                                                                                                                                                
           
      
      
    </div>
    );
  }
}



//Router.run(routes, function (Handler) {  
 // React.render(<Handler/>, document.getElementById('dynamic_content'));
//});



export default SideMenu;