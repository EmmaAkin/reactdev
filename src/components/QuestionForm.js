import React, { Component } from 'react';

class QuestionForm extends Component {
  constructor(){
    super();
    this.state = {
          newPost:{}
    }
  }

handleSubmit(e){
  if(this.refs.content.value === ''){
    alert('Post content is required');
  }else{
    this.setState({newPost:{
      content: this.refs.content.value
    }}, function(){
      //console.log(this.state);
       this.props.addPost(this.state.newPost);
     });
  }
  e.preventDefault();
}

  render() {
    return (

      <div className="homePosts">
          <form onSubmit={this.handleSubmit.bind(this)}>
              <label>Title<div className="closeBtnTalk cursor-pointer"><i className="fa fa-times"></i></div></label>
              <textarea id="post_form_title" name="post_form[title]" required="required" placeholder="Ask a question or start a discussion" className="homePostBox" data-mentions-input="true" ref="content"></textarea>
              <label for="post_form_description">Description</label>
              <textarea id="post_form_description" name="post_form[description]" placeholder="Description (Optional)" className="homePostBoxDesc"></textarea>

                <div className="postToSocial pull-left" style={{display:' none'}}>
                    <label for="post_form_postToTwitter">Post to twitter</label>
                    <input type="checkbox" id="post_form_postToTwitter" name="post_form[postToTwitter]" value="1"/>
                </div>
              <input type="hidden" id="post_form__token" name="post_form[_token]" value="DH7pAQdELueuFJoW_DpcVTHt0ajW2c2EYkjJ_lhY7IE"/>
              <button disabled="" type="submit" className="homePostsTitle cursor-pointer">Post<span className="fa fa-spinner fa-spin" id="searchLoadingIconPost"></span></button>
          </form>
      </div>
    );
  }
}

export default QuestionForm;
