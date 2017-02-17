import React, { Component } from 'react'; 
import {Link} from 'react-router';

//import Header_menu from './components/Header_menu';

class SelectedOdds extends Component {
  render() {
    return (
      <div className="SelectedOdds">
      <div id="betslip-list" class="scrollbox" tabindex="0" style="width: 238px; padding-right: 10px; outline: none; overflow: hidden;">
                                                                                                                                                                                                                        <div data-bet-provider-code="LAD" data-selection-id="480663689" class="activeBetslipContent clearfix">
                            <div class="pull-left">
                                <h5>Kardemir Karabukspor V Besiktas</h5>
                                <p class="activeBetslipMarketName">Match betting:</p>
                                <p>Besiktas  @
                                                                            <span data-decimal-value="1.61" data-fractional-value="8/13" class="selectionOddValue">1.61</span></p>
                                                                </div>
                            <div class="remove-betslip"><i class="fa fa-times-circle"></i></div>
                        </div>
                                                                                                                                                                                        <div data-bet-provider-code="LAD" data-selection-id="480658130" class="activeBetslipContent clearfix">
                            <div class="pull-left">
                                <h5>Ruch Chorzów V Cracovia</h5>
                                <p class="activeBetslipMarketName">Match betting:</p>
                                <p>Cracovia  @
                                                                            <span data-decimal-value="2.30" data-fractional-value="13/10" class="selectionOddValue">2.30</span></p>
                                                                </div>
                            <div class="remove-betslip"><i class="fa fa-times-circle"></i></div>
                        </div>
                                    </div>
        

     

    </div>
    );
  }
}



//Router.run(routes, function (Handler) {  
 // React.render(<Handler/>, document.getElementById('dynamic_content'));
//});



export default SelectedOdds;