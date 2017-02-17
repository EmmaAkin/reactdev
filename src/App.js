import React, { Component } from 'react';
import Odds from './components/Odds';
import BetSlip from './components/BetSlip';
import MidCol from './components/MidCol';
import SideMenu from './components/SideMenu';
import ContentCol from './components/ContentCol';
import Chat from './components/Chat';
import LeaderBoard from './components/LeaderBoard';
import SportsCol from './components/SportsCol';
import UserMenu from './components/UserMenu';
import Header from './components/Header';
import { DefaultRoute, Link, Route,Router, RouteHandler } from 'react-router';


class App extends Component {

   constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
      <UserMenu/>
       <div id="sb-site">
       <Header/>
       <div className="container content">
      <SideMenu/>
      <div className="ContentCol" id="container">


      {this.props.children}


      </div>


      <BetSlip/>
      </div>

      </div>

      </div>




    );
  }




}





//Router.run(routes, function (Handler) {
 // React.render(<Handler/>, document.getElementById('dynamic_content'));
//});





export default App;
