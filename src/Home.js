import React, { Component } from 'react';
import { DefaultRoute, Link, Route,Router, RouteHandler } from 'react-router';

import Odds from './components/Odds';
import BetSlip from './components/BetSlip';
import MidCol from './components/MidCol';
import SideMenu from './components/SideMenu';
import ContentCol from './components/ContentCol';
import Chat from './components/Chat';
import LeaderBoard from './components/LeaderBoard';
import SportsCol from './components/SportsCol';


class Home extends Component {

  render() {
    return (
      <div className="Home">



    <header>
    <div className="mainBody">
        <div className="logo"><Link href="/"><img src="/images/logo.png" alt="Stakewithme" /></Link></div>

        <nav className="loginMenu">
            <div className="headerRegister">Sign Up</div>
            <div className="headerLogin ">Log In</div>
<div className="headerLoginBox" >
    <form action="/app" method="get" id="betfectLoginForm" role="form">
        <input tabIndex="1" className="inSideInput" type="text" id="username" name="_username" placeholder="Username or email" value="" autoFocus />
        <input tabIndex="3"  style={{display: 'none'}} type="checkbox" id="remember_me" name="_remember_me" checked />
        <input tabIndex="2" className="inSideInput" type="password" id="password" name="_password" placeholder="Password" />
        <button><Link href="/app">Log in</Link></button>
        <div className="forgotPassword"><Link href="/forgot-password">?</Link></div>
    </form>
</div>


        </nav>
    </div>
</header>

    <section className="banner">
        <div className="mainBody">
            <article className="bannerTitle">
                <h1>A social betting network where you can place, share and copy bets from our community & friends</h1>
                <h2>An innovative platform that merges the betting experience with the online social community. You are able to follow top tipsters and copy their bets with just one click!</h2>
                <div className="bannerButtons">
                    <div id="howItWorksButton"><img src="/images/3f1b108-62adef3.png" alt="?"/>How it works?</div>

                </div>
            </article>
            <article className="bannerSignUpForm">
                <form name="user_register" method="post" action="/">

                <div className="inSignUpForm">

                    <input type="email" id="user_register_email" name="user_register[email]" required="required" placeholder="Email address" />

                    <input type="password" id="user_register_password" name="user_register[password]" required="required" autocomplete="off" pattern=".{6,15}" title="The password should have between 6 and 15 characters" placeholder="Password" />

                     <input type="password" id="confirm_user_register_password" name="user_register[password]" required="required" autocomplete="off" pattern=".{6,15}" title="The password should have between 6 and 15 characters" placeholder="Confirm Password" />


                    <div className="termsText">By signing up, I accept the <Link href="/terms" target="_blank">terms and conditions</Link>, <Link href="/privacy" target="_blank">privacy policy</Link> and confirm that I am over 18 years old.
                    </div>
                    <button type="submit" id="user_register_submit" name="user_register[submit]" className="pull-right">Sign Up for Free</button>
                    <input type="hidden" id="user_register__token" name="user_register[_token]" value="IBbF4RoWBlKR1s6dmevmbxcmknuRmHETNXMGdgXdisI" />

                </div>
                </form>
            </article>
        </div>
    </section>

     <section className="section-1">
    <div className="mainBody">
        <article className="sectionTitle">
            <h1>Place, share & copy bets all on one platform</h1>
            <h2>A one-stop platform to interact with the sports betting community, follow the best tipsters and compete against them!</h2>
        </article>
        <article className="sectionList">
            <ul>
                <li>
                    <div className="landingCirlceBlue"><img src="/images/faff301-647b112.png" className="connectAccountImg" style={{width: '300px'}}/></div>
                    <div className="landingCirlceP"><h3>Connect your Stakewithme account with our partners</h3>Stakewithme is not a bookmaker itself in order to place bets you must link or register a betting account.</div>
                </li>
                <li>
                    <div className="landingCirlceBlue"><img src="/images/9816a25-e2b880d.png" style={{width: '172px'}}/></div>
                    <div className="landingCirlceP"><h3>Follow top tipsters &amp; find the best odds</h3>Follow &amp; copy top tipsters and find the best odds by using your favourite bookmaker.</div>
                </li>
                <li>
                    <div className="landingCirlceBlue"><img src="/images/36345f0-f230925.png" style={{width: '112px'}}/></div>
                    <div className="landingCirlceP"><h3>Place bets directly from Betfect</h3>To join Stakewithme is free and you can manage everything in one place</div>
                </li>
            </ul>
        </article>
    </div>
</section>

     <footer>
    <article className="aboutBetfect">
        <div className="mainBody">Stakewithme is a unique sport-betting website that let you place, share and copy bets with top punters, in order to enjoy sports betting like never before. Stakewithme is not a bookmaker, and you can only place bets if you connect one of our betting partners’ account. Stakewithme is a social betting network that merges the online betting experience with the social aspect. #FollowTheRightPeople
        </div>
    </article>

    <article className="rightsReserved">
        <div className="mainBody">
            <div className="footerRights">© 2017 - Stakewithme Beta - All Rights Reserved</div>
            <div className="footerSocial">
                <ul>
                    <li><div className="underAge">Underage gambling is an offence<span>18+</span></div></li><li><Link href="https://www.facebook.com/stakewithme" target="_blank"><img src="/images/7b206c0-9a40f34.png"/></Link></li>
                    <li><Link href="https://twitter.com/stakewithme" target="_blank"><img src="/images/0bc0a00-0604956.png"/></Link></li>
                    <li><Link href="https://instagram.com/stakewithme" target="_blank"><img src="/images/0ca6c32-b4c4bfd.png"/></Link></li>
                    <li><Link href="https://plus.google.com/+stakewithme" target="_blank"><img src="/images/fd0b867-b9fc66a.png"/></Link></li>
                    <li><Link href="https://www.youtube.com/channel/UCdlebRq5Zzx3l19lFLSvQBA" target="_blank"><img src="/images/cbaf8fd-f8585e7.png"/></Link></li>
                </ul>
            </div>
        </div>
    </article>
    </footer>


      </div>
    );
  }


}








export default Home;
