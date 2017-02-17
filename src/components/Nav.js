import React, { Component } from 'react';
import {Link} from 'react-router';




class Nav extends Component {

  render() {
    return (
      <div className="navbar">

       <nav className="container-fluid">

                
              <ul className="pull-left leftHeaderMenu">
     
          <li className="input-group searchHeader">
            <span className="searchIcon"><i className="fa fa-search"></i></span>
            <input type="text" placeholder="Search" className="search_box"/><span id="searchLoadingIcon" style={{display: 'none'}} className="fa fa-spinner fa-spin"></span>
            <div className="search_dropdown">
            </div>
          </li>

        </ul>
      
      
        <ul className="pull-right rightHeaderMenu2">
          <Link id="slide_menu_button" href="#">
          <img src="/img/icons/responsive/menu_icon.png" alt="log"/>
          </Link>
        </ul>
        <ul className="pull-right rightHeaderMenu">
            <li className="headerSpinner">
              <span className="fa fa-spinner fa-spin"></span>
            </li>
                                 
          <li className="notificationTop">
            <Link className="show_notification_betslip" href="javascript:void(0)"></Link>
            <div className="notif_drop">
              <span className="arrow"></span>
              <ul>
                <li className="mark_all_as_read" style={{textAlign: 'right'}}><span>Mark all as read</span></li>
                <li><Link>You don't have notifications yet</Link></li>
                <li className="see_all_notifications"></li>
              </ul>
              <div id="ajaxLoader_notif" style={{display:'none'}}>
              <center><img src="/img/ajax-loader.gif" alt="log"/></center>
              </div>
              <div className="see_all_notifications_bottom">
                <Link href="/notifications">See all</Link>
              </div>
            </div>
          </li>

          <li className="profileTop">
            <div className="headerAdminSection clearfix">
              <div className="adminAvatar pull-left ">
                <Link href="/tipster/mashetin">
                  <img src="/images/pic.jpg" alt="log"/>
                </Link>
              </div>
              <div className="adminBg pull-left">
                    <h5>
                  <Link style={{paddingTop: '0px'}} href="/profile">Neville Masheti</Link>
                </h5>
                <p className="viewWallets cursor-pointer noselect">Manage Wallets</p>
                <div className="providerList">
                                                                            <div data-bet-provider-code="LAD" className="providerWallets">
          <img width="28px" src="/img/icons/partners/ladbrokes60x60.png" alt="log"/>
            <div onclick="ladbrokesForm(&#039;register&#039;);" className="walletListButton register cursor-pointer">
              Register
              </div>
            <div onclick="ladbrokesForm(&#039;assoc&#039;);" className="walletListButton login cursor-pointer">Login</div>

    </div>      
                </div>

              </div>
              <div className="adminArrowBg pull-left">
                <i className="fa fa-angle-down profile-arrow"></i>
              </div>
            </div>
            <div className="profileToggleMenu">
              <ul>
                <li><Link href="/settings"><i className="fa fa-cog"></i>Settings</Link></li>
                <li><Link href="/settings#connected"><i className="fa fa-compress"></i>Betting Accounts</Link></li>
                <li><Link href="/betting-history"><i className="fa fa-history"></i>Betting history</Link></li>
                <li><Link href="mailto:support@stakewithme.com" target="_blank"><i className="fa fa-question"></i>Support</Link></li>
                <li><Link href="/faq"><i className="fa fa-book"></i>About/FAQs</Link></li>
                <li><Link href="/logout"><i className="fa fa-sign-out"></i>Log out</Link></li>
              </ul>
            </div>
          </li>
        </ul>
  </nav>


     


     
                   
      </div>
    );
  }


}








export default Nav;