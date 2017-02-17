import React, { Component } from 'react';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
  const Timestamp = require('react-timestamp');

class ChatItem extends Component {

  render() {
    return (

      <div className="q_Container">
    <div className="q_inside">
        <div className="q_upDown"><i className="fa fa-angle-up cursor-pointer" onclick="upvoteHomeArrowReply(this)"></i><br/><span>14</span></div>

        <div className="q_commentsCount">
        <span className="fa-stack fa-3x">
            <i className="fa fa-comment-o fa-stack-2x"></i>
            <strong className="fa-stack-1x fa-stack-text fa-inverse">6</strong>
      	</span>
        </div>

        <div className="q_content">
            <div className="q_question"><Link href="/talk/5/can-roger-federer-win-wimbledon-2015.html">{this.props.chat.content}</Link></div>
            <div className="q_from">
                <img src={this.props.chat.image}/>
                <span><Timestamp time={this.props.chat.created_at}/> by <Link href="/tipster/jackbet">{this.props.chat.user.email}</Link></span>
            </div>
            <div className="q_desc">
                {this.props.chat.content}
            </div>
        </div>
    </div>
    <div className="q_bottomMenu">
                    <Link className="q_button cursor-pointer replyButtonTalk">Reply</Link>
                            <Link data-post-id="5" className="q_button cursor-pointer postUpvote ">Upvote</Link>
                <div className="q_shareButtons">
            <Link onclick="sharePostByFacebook('https://betfect.com/talk/5/can-roger-federer-win-wimbledon-2015.html')"><i className="fa fa-facebook-square cursor-pointer"></i></Link>
            <Link onclick="sharePostByTwitter('https://betfect.com/talk/5/can-roger-federer-win-wimbledon-2015.html','Can\x20Roger\x20Federer\x20win\x20Wimbledon\x202015\x3F')"><i className="fa fa-twitter-square cursor-pointer"></i></Link>
            <Link onclick="sharePostByGooglePlus('https://betfect.com/talk/5/can-roger-federer-win-wimbledon-2015.html')"><i className="fa fa-google-plus-square cursor-pointer"></i></Link>
        </div>
        <div className="q_shareCount">
            <b>0</b>
            <p>SHARES</p>
        </div>
    </div>

            <div className="q_inside quickReplyForm">
            <div className="q_replyInside">
                <form name="post_reply_form" method="post" action="" id="post_reply_form" className="post_reply_form">
                <div className="thePostReply">
                    <textarea id="post_reply_form_content" name="post_reply_form[content]" required="required" placeholder="Write your reply..."></textarea>
                    <input type="hidden" name="id" value="5"/>
                    <div className="q_replyPostBottom">
                        <button>Reply<span id="searchLoadingIconPost" className="fa fa-spinner fa-spin"></span></button>
                    </div>
                </div>
                <input type="hidden" id="post_reply_form__token" name="post_reply_form[_token]" value="5omaaK2zG_0lX4eV2GZH42FY1JsfMQzPdQa4MoSZZn4"/></form>
            </div>
        </div>

</div>
    );
  }


}


export default ChatItem;
