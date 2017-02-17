import React, { Component } from 'react';

import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import RightLower from './RightLower';

//import Header_menu from './components/Header_menu';

class BetSlip extends Component {
  render(){
    return (
      <div className="BetSlip">
         <div className="rightbarContainerWrap">
    <div className="activeBetslip rightbarContainer">
        <div className="activeBetslipWrap">
            <div className="activeBetslipMenu clearfix">
                <ul>
                    <li className="active cursor-pointer">
                      <div opentarget="#tabBetslip" className="action">Betslip</div>
                    </li>
                    <li className="cursor-pointer">
                      <div opentarget="#tabRecent" className="action">Draft Slips</div>
                    </li>
                </ul>
            </div>
                        <div className="rightBarDetails">
                <div id="tabBetslip" className="rightbarContents">
                    <div id="betslip-list" className="scrollbox" tabindex="0" >
                                                                    </div>
                                                                    <div id="customThree">
                                                                    <div className="enscroll-track track3" id="customFour">
                                                                    <Link href="" className="handle3" id="customFive" >
                                                                    <div className="top"></div><div className="bottom">
                                                                    </div></Link></div></div>
                    <div className="multibetAmount clearfix">
                        <div className="pull-left col singleAll">
                                                                                                    <h5>
                                                                                                    <span className="multiSingleBet">Single</span> (<span id="multibetCount">0</span>)</h5>
                                                            <p><span id="multibetOdd"></span><span style={{display:'none'}} id="fractional_acumulator_den_number">/1</span></p>
                                                    </div>
                        <div className="pull-right col input-group activeBetslipAmount">
                            <div className="input-group-addon">£</div>
                            <input type="text" id="multibetStake" className="form-control stakeAmountLogo"/>
                        </div>
                    </div>
                    <div className="payoutStake clearfix">
                        <div className="payout-ico">
                                                                                        <img className="prov_icon selected pull-left" alt="Partner" src="/img/icons/partners/betfect60x60.png" height="28"/>
                               
                                                    </div>
                        <div className="payOutlabel">
                            <h5>Est. Payout</h5>
                            <h5>Total Stake</h5>
                        </div>
                        <div className="payOutVal">
                            <h5 className="clrRed" id="estimatedPayout">£ <span>0</span></h5>
                            <h5 id="totalStake">£ <span>0</span></h5>
                        </div>
                        <Link className="btn betslipDropdownP" role="button" id="oddsChanger" style={{display: 'none'}}>
                            <div style={{display: 'none'}}>
                                                                    <img className="other_prov_icon pull-left" data-odd="0.00" alt="Lad" src="/img/icons/partners/ladbrokes60x60.png" height="28"/>
                                    <div className="pull-right" id="estimated-payout-provider">Est. Payout: £</div>
                                                            </div>
                        </Link>
                    </div>
                    <div className="writeBet">
                        <textarea placeholder="Write about your bet!" id="aboutBet"></textarea>
                    </div>
                    <div className="activeBetslipBtn clearfix">
                        <div className="globeWrap">

                            <ul className="toggleGlobe">
                                <li className="placeBetPublic">Public</li>
                                <li className="placeBetPrivate">Private</li>
                            </ul>
                        </div>
                        <div className="pull-right col placeBetButtonWidth">
                            <button id="placeBet">Place Bet <span style={{display: 'none'}} className="fa fa-spinner fa-spin"></span></button>
                        </div>
                    </div>

                    
                                            <Link className="btn betslipGreenOdds" role="button" id="oddsChanger2" style={{display: 'none'}}>                              <div className="change-provider clearfix" hidden="hidden">
                                <div className="pull-left">
                                                                                                                                                                                                                                                                                                                <img src="/img/icons/partners/ladbrokes60x60.png" alt="lad" height="28"/>
                                </div>
                                <div className="pull-right" id="estimated-payout-provider2">Est. Payout: £ 0.0</div>
                            </div>
                        </Link>
                                                    <div className="connect-providers-buttons" hidden="hidden">
                                <Link className="btn btn-primary betslipConnectButton" role="button"><div>Connect your betting accounts</div></Link>
                            </div>
                                            
                                    </div>

                <div id="tabRecent" className="rightbarContents" style={{display: 'none'}}>
                    <div className="recent-tab_scrollcntd scrollbox" tabindex="0" id="customSeven" >
                    </div><div id="customOne"><div className="enscroll-track track3" style={{position: 'relative'}}><Link href="" className="handle3" id="customTwo"><div className="top"></div><div className="bottom"></div></Link></div></div>
                    <Link href="/betting-history">
                        <div className="clearfix">
                            <button type="button" className="bettingHistoryBtn">View Betting History</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>

        


    <RightLower/>
 </div>    
</div>

  


     

 
    );
  }
}




export default BetSlip;