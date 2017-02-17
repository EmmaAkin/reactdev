import React, { Component } from 'react';
import Nav from './Nav';
import {Link} from 'react-router';




class Header extends Component {

  render() {
    return (
      <div className="topHead">

                 
<div className="header_align">
<div className="container  ">

  <Link href="/">
    <div className="logo">
      <img src="/images/logo.png" alt="Stakewithme" title="Stakewithme" height="30px" width="150px"/>
    </div>
  </Link>

  <Nav/>

 

    </div>
  </div>
<input type='hidden' name='user_betslip_count' value='0'/>
<input type='hidden' name='user_email' value='neville.masheti@meltwater.org'/>
<header className="logged_header">

</header>
<div className="underHeaderNotification alert-success"></div>
     


     
                   
      </div>
    );
  }


}








export default Header;