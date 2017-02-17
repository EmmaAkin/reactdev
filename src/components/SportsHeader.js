import React, { Component } from 'react';

 
import {Link} from 'react-router';


//import Header_menu from './components/Header_menu';

class SportsHeader extends Component {
  render() {
    return (
      
     
      <div className="sportsBookTitle fixed noFixedBet">
      
              <div className="sportsSectionWrap">
                <div className="sportsEventTop clearfix">
                  <h4 className="pull-left">
                      Football
                  </h4>

                  <div className="pull-right">
                    <div className="selectric-wrapper selectric-betfect">
                    <div className="selectric-hide-select">
                    <select name="priceFormat" className="betfect" tabindex="0">
                      <option selected="" value="decimal">Betfair</option>
                      <option value="fractional">Ladbrokes</option>
                    </select>
                    </div>

                    <div className="selectric">
                    <p className="label">Betfair</p><b className="button">▾</b></div>
                    <div className="selectric-items" tabindex="-1">
                    <div className="selectric-scroll">
                    <ul>
                    <li data-index="0" className="selected">Betfair</li>
                    <li data-index="1" className="last">Ladbrokes</li>
                    </ul>
                    </div></div>
                    <input className="selectric-input" tabindex="0"/></div>
                  </div>
                </div>
               </div>
            
        

     

    </div>
    );
  }
}





export default SportsHeader;