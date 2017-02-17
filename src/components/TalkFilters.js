import React, { Component } from 'react';


class TalkFilters extends Component {

  render() {
    return (
      <div className="talkFilters">

                <div className="pull-left talkFilterTitle">Latest Talks</div>

                <div className="pull-right">
                    <div className="selectric-wrapper selectric-talk_tab"><div className="selectric-hide-select"><select className="talk_tab" tabindex="0">
                        <option container-id="talk_popular_container" value="popular">Popular Talks</option>
                        <option container-id="talk_latest_container" value="latest">Latest Talks</option>
                    </select></div><div className="selectric"><p className="label">Popular Talks</p><b className="button">▾</b></div><div className="selectric-items" tabindex="-1"><div className="selectric-scroll"><ul><li data-index="0" className="selected">Popular Talks</li><li data-index="1" className="last">Latest Talks</li></ul></div></div><input className="selectric-input" tabindex="0"/></div>
                </div>
            </div>
    );
  }


}








export default TalkFilters;