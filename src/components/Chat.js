import React, { Component } from 'react';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import ChatItem from './ChatItem';
import $ from 'jquery';
import TalkFilters from './TalkFilters';
import QuestionForm from './QuestionForm';
import PopularTalk from './PopularTalk';



class Chat extends Component {
    constructor(){
      super();
      this.state = {
        posts:[],
        users:[]
      }
    }

    getUsers(){
      $.ajax({
        url: 'https://shielded-inlet-71502.herokuapp.com/api/v1/users.json',
        dataType: 'json',
        beforeSend: function (xhr) {
          xhr.setRequestHeader ("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE0ODczNjkxNDh9.pzxyIABZ3P4PAziuLIRYy1CkRKlR9ENXut1RH1oto-s");
        },
        cache: false,
        success: function(data){
          this.setState({users: data},function(){
            console.log(this.state)
          });
        }.bind(this),
        error: function(xhr,status,err){
          console.log(err);
        }
      });
    }

    getPosts(){
      $.ajax({
        url: 'https://shielded-inlet-71502.herokuapp.com/api/v1/posts.json',
        beforeSend: function (xhr) {
          xhr.setRequestHeader ("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE0ODczNjkxNDh9.pzxyIABZ3P4PAziuLIRYy1CkRKlR9ENXut1RH1oto-s");
        },
        dataType: 'json',
        cache: false,
        success: function(data){
          this.setState({posts: data},function(){
            console.log(this.state)
          });
        }.bind(this),
        error: function(xhr,status,err){
          console.log(err);
        }
      });
    }

    componentWillMount(){
      this.getPosts();
    }

  render(){
    return (
        <div className="peopleSection" >
              <QuestionForm/>
              <TalkFilters/>
              <PopularTalk posts={this.state.posts} />
        </div>
    );
  }
}

export default Chat;
