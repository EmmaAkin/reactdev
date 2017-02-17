import React, { Component } from 'react';
 
import {Link} from 'react-router';
import MatchItem from './MatchItem';
import SportsHeader from './SportsHeader';

//import Header_menu from './components/Header_menu';

class SportsCol extends Component {
  render() {
    return (
      <div className="sportsEvent scrollable eventsTopFive">
     
    
            <div className="sportsSectionWrap">
                    <div className="popular">
                    <div className="eventsTitle">
                         <p className="clrBlue">Monday 13 Feb</p>                                                                                                                                                                                                                                                    </div>
                    <div className="eventsCustomScroll">
                    
                                                                                                                                                    <div className="betting_container" style={{display: 'block'}} id="betting_container_1">
                    <div>
                            <h5>Italian - Serie A</h5>
                        </div>
                        <MatchItem/>
                        <MatchItem/>
                        <MatchItem/>
                        <MatchItem/>
                               </div>
                                                                                                                                                <div className="betting_container" style={{display: 'none'}} id="betting_container_2">
                                </div>

                              
                                <div id="loadmoreajaxloader" style={{display: 'none'}}><center><img src="/img/ajax-loader.gif"/></center></div>
                    </div>
                </div>
            </div>
            
      
        

     

    </div>
    );
  }
}



//Router.run(routes, function (Handler) {  
 // React.render(<Handler/>, document.getElementById('dynamic_content'));
//});



export default SportsCol;