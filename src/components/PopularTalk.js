import React, { Component } from 'react';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import ChatItem from './ChatItem';



class PopularTalk extends Component {

  render() {
    let chatItems;
    if(this.props.posts){
      chatItems = this.props.posts.map(chat =>{
        //console.log(chat);
        return(
          <ChatItem chat= {chat}/>
        );
      });
    }
    return (

       <div id="talk_popular_container" className="talk_container">
       {chatItems}
      </div>
    );
  }


}








export default PopularTalk;
