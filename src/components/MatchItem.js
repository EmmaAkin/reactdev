import React, { Component } from 'react';

import {Link} from 'react-router';

//import Header_menu from './components/Header_menu';

class MatchItem extends Component {
  render() {
    return (
      <div className="MatchItem">
      <div className="eventRow">
    <div className="eventInfo">
            <div className="eventName ">Napoli V Genoa</div>
        <div className="eventDate ">10 Feb 19:45</div>
    </div>
                    <div className="rightOdds pull-right">
                                                <div className="eventOdds pull-right ">
    <div className="providerLogo">
        <div className="oddsLogo pull-left">

        </div>
    </div>
    <div className="theOdds">

    <button data-toggle="tooltip">1.30</button>
    <button data-toggle="tooltip">5.50</button>
    <button data-toggle="tooltip">3.30</button>


    </div>

    <div className="moreBet">
                <div className="moreBets">+50 bet</div>
    </div>

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



export default MatchItem;
