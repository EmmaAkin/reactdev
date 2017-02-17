import React, { Component } from 'react';
import {Link} from 'react-router';


class UserMenu extends Component {

  render() {
    return (
     
<div className="sb-slidebar sb-right">
     
      
      <ul className="pull-right rightHeaderMenu">

            <li>
                <div className="headerAdminSection clearfix">
                    <div className="adminAvatar pull-left ">
                        <Link href="/profile">
                            <img src="/cache/5/9/f/d/b/59fdbea6b4d2b2764691122c76999608ba6dab98.png" alt="profile"/>
                        </Link>
                    </div>
                    <div className="adminBg pull-left">
                                                                        <h5>
                            <Link style={{paddingTop: '0px'}} href="/profile">Neville Masheti</Link>
                        </h5>
                  </div>
                  <div className="adminArrowBg pull-left">
                      <i className="fa fa-cog profile-arrow"></i>
                  </div>
              </div>
              <div className="profileToggleMenu">
                  <ul>
                      <li><Link href="/settings"><i className="fa fa-cog"></i>Settings</Link></li>
                      <li><Link href="/settings#connected"><i className="fa fa-compress"></i>Betting Accounts</Link></li>
                      <li><Link href="mailto:support@stakewithme.com" target="_blank"><i className="fa fa-question"></i>Support</Link></li>
                      <li><Link href="/betting-history"><i className="fa fa-history"></i>Betting history</Link></li>
                      <li><Link href="/logout"><i className="fa fa-sign-out"></i>Log out</Link></li>
                  </ul>
              </div>
          </li>
      </ul>
      
      <ul className="sb-menu">
          <li className="sb-close"><Link href="/"><i className="fa fa-home"></i> Home</Link></li>
       
          <div className="walletsMobileToggle">
                                                                <div data-bet-provider-code="LAD" className="providerWallets">
    <img width="28px" src="/img/icons/partners/ladbrokes60x60.png" alt="partners"/>
            <div onclick="ladbrokesForm('register');" className="walletListButton register cursor-pointer">Register</div>
        <div onclick="ladbrokesForm('assoc');" className="walletListButton login cursor-pointer">Login</div>
    </div>                                                       </div>
         
          

      </ul>
      <br/>

      <section className="footerWidgetSide">
          <ul>
              <li><Link href="/betting-revolution">About us</Link></li>
              <li><Link href="/how-it-works">How it works</Link> </li>
              <li><Link href="/faq">FAQs</Link></li>
              <li><Link target="_blank" href="http://help.ladbrokes.com/display/4/kb/article.aspx?aid=2665">Ladbrokes T&amp;C's</Link></li>
              <li><Link target="_blank" href="https://www.betfect.com/terms">Betfect T&amp;C's</Link></li>
              <li><Link target="_blank" href="http://www.responsiblegamblingtrust.org.uk/">Responsible Gambling Trust</Link></li>
              <li><Link target="_blank" href="http://help.ladbrokes.com/display/4/kb/article.aspx?aid=1077">Ladbrokes</Link></li>
              <li><Link target="_blank" href="http://www.gamcare.org.uk/">Gamcare</Link></li>
              <li className="copyright">Betfect © 2017</li>

          </ul>
      </section>


  </div>


     
     












  
    );
  }


}








export default UserMenu;