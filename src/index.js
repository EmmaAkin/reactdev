import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';  
import { DefaultRoute, Link, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import LeaderBoard from './components/LeaderBoard';
import ContentCol from './components/ContentCol';
import Chat from './components/Chat';
import BetSlip from './components/BetSlip';
import SideMenu from './components/BetSlip';
import Basketball from './components/Basketball';
import Cricket from './components/Cricket';
import HorseRacing from './components/HorseRacing';
import PeerBetting from './components/PeerBetting';
import Tennis from './components/Tennis';
import MidCol from './components/MidCol';
import './index.css';



ReactDOM.render(
<Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/app" component={App}>
        <IndexRoute component={Chat}/>
        <Route path="/app/chat" component={Chat}/>
        <Route path="leaderboard" component={LeaderBoard}/>
        <Route path="peerbet" component={PeerBetting}/>
        <Route path="cricket" component={Cricket}/>
        <Route path="horseracing" component={HorseRacing}/>
        <Route path="tennis" component={Tennis}/>
        <Route path="basketball" component={Basketball}/>
        <Route path="football" component={MidCol}/>
    </Route>
</Router>, 
document.getElementById('root')
);





