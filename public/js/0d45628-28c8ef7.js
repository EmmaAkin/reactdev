/**
 * Created by malcaino on 13/05/15.
 */
function initMenu(){
    //$('.topnav li i').addClass("fa fa-angle-down");
    $('.topnav li i').click(function(){

        if($(this).hasClass('fa-angle-up')){
            $(this).removeClass("fa-angle-up");
            $(this).addClass("fa-angle-down");
            $.ajax({
                url: Routing.generate("remove_from_menu"),
                method: "GET",
                data: {
                    sport_menu: $(this).attr('data-sport-slug'),
                    league_menu: $(this).attr('data-league-slug')
                }
            });
            // segment tracking
            var button =  $(this);
            var sport = button.attr('data-sport-slug');
            var league = button.attr('data-league-slug');
            var $event = '';
            if(league != null) {
                $event = league + '_league_menu_constrict'
            } else {
                $event = sport + '_sports_menu_constrict'
            }
            var $trackDetails =  {
                'league' : league,
                'sport' : sport
            }
            callSegmentTrack($event,$trackDetails);
        }//expanding the menu
        else{
            $(this).removeClass("fa-angle-down");
            $(this).addClass("fa-angle-up");
            $.ajax({
                url: Routing.generate("save_menu_position"),
                method: "GET",
                data: {
                    sport_menu: $(this).attr('data-sport-slug'),
                    league_menu: $(this).attr('data-league-slug')
                }
            });
            // segment tracking
            var button =  $(this);
            var sport = button.attr('data-sport-slug');
            var league = button.attr('data-league-slug');
            var $event = '';
            if(league != null) {
                $event = league + '_league_menu_expand'
            } else {
                $event = sport + '_sports_menu_expand'
            }
            var $trackDetails =  {
                'league' : league,
                'sport' : sport
            }
            callSegmentTrack($event,$trackDetails);
        }
        $(this).parent().children('ul').slideToggle();
    });

    //$('.topnav li a').each(function(){
    //    if($(this).hasClass('active')){
    //        $(this).parent().children('ul').show();
    //    }
    //});
    if($('.topnav .active:last').parents('ul').length == 0){
    }else if($('.topnav .active:last').parents('ul').length == 1){
        $('.topnav .active:last').parent().children('ul').show();
    }else if($('.topnav .active:last').parents('ul').length == 2){
        $('.topnav .active:last').parent().children('ul').show();
        $('.topnav .active:last').parent().parent().show();
    }else if($('.topnav .active:last').parents('ul').length == 3){
        $('.topnav .active:last').parent().parent().parent().children('i').removeClass('fa-angle-down');
        $('.topnav .active:last').parent().parent().parent().children('i').addClass('fa-angle-up');
        $('.topnav .active:last').parent().parent().parent().parent().parent().children('i').removeClass('fa-angle-down');
        $('.topnav .active:last').parent().parent().parent().parent().parent().children('i').addClass('fa-angle-up');
        $('.topnav .active:last').parent().parent().parent().parent().show();
        $('.topnav .active:last').parent().parent('ul').show();
    }

    //$('.topnav .active:last').parent().parent().show();
    //$('.topnav .active:first').parent().children('ul').show();
    //$('.topnav .active').parent().children('ul').show();
    $('.topnav i.fa-angle-up').parent().children('ul').show();

}
//$('.competitionLeft').click(function(){
//    window.location = Routing.generate("competition");
//});

//Initialization
initMenu();
/**
 * Created by malcaino on 03/07/15.
 */

$(document).ready(function(){

    // View the full submit form
    $(".homePostBox").focus(function() {
        $(".homePostBox").animate({'width':'100%','height':'45px','padding':'13px 15px','margin-bottom':'10px'},100, function() {
            $(".homePostBoxDesc").css({'display' : 'block'});
            $(".postToSocial").css({'display' : 'block'});
            $(".homePosts").css({'padding' : '15px 15px 14px','border':'2px solid #33c3e2','background':'#fefefe'});
            $(".homePostsTitle").css({'width':'20%'});
            $(".homePostsTitle").removeAttr("disabled");
            $(".homePosts > form > label").css({'display':'block'});
            $(".homePosts > form > textarea").animate({'margin-bottom':'10px'},200);
            $(".homePostBox").css({'border':'1px solid #bbb'});
        });
    });

    // Remove full submit form
    $(".closeBtnTalk").click(function() {
        $(".homePostBox").removeAttr('style');
        $(".homePostBoxDesc").removeAttr('style');
        $(".postToSocial").css({'display' : 'none'});
        $(".homePosts").removeAttr('style');
        $(".homePostsTitle").removeAttr('style');
        $(".homePosts > form > label").removeAttr('style');
        $(".homePosts > form > textarea").removeAttr('style');
        $(".homePostBox").removeAttr('style');
        $(".homePostsTitle").attr("disabled");
    });


    $(".postUpvoteUnlogged").click(function(){
        $('#registrationModal').modal({'keyboard':false});
    });
    // Upvote a post
    initUpvotePost($(".postUpvote"));

    // Submit the post
    $('#post_form').submit(function(e){
        e.preventDefault();

        var postBttn = $(this).children("button");
        postBttn.children("span").fadeIn(1200);
        postBttn.prop("disabled",true);

        $.ajax({
            url: Routing.generate('user_post_add_post'),
            type: "POST",
            data: $('#post_form').serializeArray(),
            success: function(data){
                if(data.status=="success") {
                    var makeUrl = Routing.generate('user_post_show_post',{
                        "id": data.post_id,
                        "slug": data.post_slug
                    });
                    window.location.replace(makeUrl);
                }else{
                    postBttn.children("span").fadeOut(300);
                    postBttn.prop("disabled",false);
                    $('#registrationModal').modal({'keyboard':false});
                }
            }});

    });

    // Submit the reply
    $('.post_reply_form').submit(function(e){
        e.preventDefault();
        var form = $(this);
        var postBttn = $(this).children('.thePostReply').children('.q_replyPostBottom').children('button');
        postBttn.children("span").fadeIn(400);
        postBttn.prop("disabled",true);

        $.ajax({
            url: Routing.generate('user_post_add_reply'),
            type: "POST",
            data: form.serializeArray(),
            success: function(data){
                if(data.status=="success") {


                    if (location.pathname == "/talk" )
                    {
                        var makeUrl = form.parent().parent().parent().children('.q_inside').children('.q_content').children('.q_question').children('a').attr('href');
                        window.location.replace(makeUrl);

                    }else{
                        // Update the number of posts
                        var oldPostNum = $(".q_commentsCount > span > strong").text();
                        var newPostNum = parseInt(oldPostNum)+1;
                        $(".q_commentsCount > span > strong").text(newPostNum);
                        $(".q_replyCount > strong").text(newPostNum);
                        $("#post_reply_form_content").val('');

                        var theButton = $('<button>Upvote</button>')
                            .addClass('q_replyUpvoteButton')
                            .attr('data-reply-id',data.reply_id);
                        theButton.append($('<span class="fa fa-spinner fa-spin" id="upVoteIcon"></span>'));

                        initOneUpvoteReplyButton(theButton);

                        var userInfo = $('<div class="q_replyUser"><div class="q_replyFrom"><img src="'+data.user_picture+'"><span><a href="#">'+data.user_nickname+'</a> 2 Seconds ago</span></div><div class="q_ReplyUpDown"><i onclick="upvoteArrowReply(this)" class="fa fa-angle-up cursor-pointer"></i><br><span>0</span></div></div>');
                        var replyContent = $('<div class="q_replyContent">'+data.reply_content+'</div>');
                        var replyButtons = $('<div class="q_replyButtons"></div>');
                        replyButtons.append(theButton);

                        var mainDiv = $('<div></div>');
                        mainDiv.append(userInfo);
                        mainDiv.append(replyContent);
                        mainDiv.append(replyButtons);
                        var div_form = $(data.subreply_form_view);

                        var textarea = div_form.children("form").children("textarea");
                        div_form.children("form").children("textarea").remove();
                        initOneSubreply(textarea);
                        div_form.children("form").append(textarea);
                        mainDiv.append(div_form);
                        postBttn.children("span").fadeOut(500);

                        $('.postAfterCount').hide().prepend(mainDiv).fadeIn(800);
                        postBttn.prop("disabled",false);
                    }

                }else{
                    postBttn.children("span").fadeOut(300);
                    postBttn.prop("disabled",false);
                    $('#registrationModal').modal({'keyboard':false});
                }
            }});

    });

    upVoteInit();
    subreplyInit();

    // Show/Hide Quick Reply
    $(".replyButtonTalk").click(function() {
        var button = $(this);
        var theForm = button.parent().next("div");

        if (button.hasClass('quickReplyActive')){
            theForm.slideUp(150);
            button.removeClass('quickReplyActive');
            var theForm = button.parent().removeClass('quickReplyLine');

        }else{
            theForm.slideDown(200);
            button.addClass('quickReplyActive');
            var theForm = button.parent().addClass('quickReplyLine');
        }
    });

    $('#post_form_postToTwitter').change(function(e){
        e.preventDefault();
        var checkbox = $(this);
        if($(this).prop("checked")){
            $.ajax({
                url: Routing.generate("user_social_check_twitter_connected_account"),
                type: "POST",
                success: function(data){
                    if(data.status == "success"){
                        if(data.isAccountConnected == true){
                            checkbox.prop("checked",true);
                        }else{
                            loadTwitterPopup();
                        }
                    }
                }
            });
        }else{
            $.ajax({
                url: Routing.generate("user_social_change_post_to_twitter"),
                type: "POST",
                data: {
                    postToTwitter: false
                },
                success: function(data){

                }
            });
        }
    });

    $('#post_form_description, .thePostReply > textarea').atwho({
        at: "@",
        callbacks: {
            remoteFilter : function(params, render_callback){
                $.ajax({
                    url: Routing.generate("mentions",{'coincidence' : params}),
                    type: "GET",
                    dataType: "json",
                }).done(function(data){
                    render_callback(data);
                });
            }
        },
        limit: 10,
        displayTpl: "<li><img src='${avatar}' style='border-radius: 50%;' height='20' width='20'/> ${name} </li>"
    });
});

function initUpvotePost(element){
    element.click(function(){
        var upvoteButton = $(this);
        if($(this).hasClass('q_buttonActive')) {
            e.preventDefault();
        }else{
            upvotePostAjaxLogic(upvoteButton);
        }
    });
}

function upvotePostAjaxLogic(upvoteButton){
    upvoteButton.html('Upvote <span class="fa fa-spinner fa-spin"></span>').fadeIn(2000);
    upvoteButton.addClass("q_buttonActive");
    $.ajax({
        url: Routing.generate('user_post_upvote_post'),
        type: "POST",
        data: {post_id: upvoteButton.attr('data-post-id')},
        success: function(data){
            if (data.status=="success") {
                upvoteButton.html('Upvoted');
                upvoteButton.parent().parent().children('.q_inside').children('.q_upDown').children('span').text(data.upvote_count);
                upvoteButton.removeAttr("href");
            }else{
                upvoteButton.html('Upvote').fadeIn(2000);
                $('#registrationModal').modal({'keyboard':false});
            }
        }});
}

function upvoteArrowReply(element){
    $(element).parent().parent().parent().children(".q_replyButtons").children("button.q_replyUpvoteButton").click();
    $(element).removeAttr("onclick");
    $(element).removeClass("cursor-pointer");
}

function upvoteHomeArrowReply(element){
    $(element).parent().parent().parent().children(".q_bottomMenu").children(".postUpvote").click();
    $(element).removeAttr("onclick");
    $(element).removeClass("cursor-pointer");
}

function upVoteInit() {
    $('.q_replyUpvoteButton').click(function(e){
        e.preventDefault();
        var button = $(this);
        button.children("span").fadeIn(400);
        ajaxUpvote(button);
    });
}

function initOneUpvoteReplyButton(button){
    button.click(function(e){
        e.preventDefault();
        var button = $(this);
        button.children("span").fadeIn(400);
        ajaxUpvote(button);
    });
}

function ajaxUpvote(button){
    $.ajax({
        url : Routing.generate("user_post_upvote_reply"),
        type: "POST",
        data: {
            "reply_id" : button.attr('data-reply-id')
        },
        success: function(data){
            if(data.status == 'success'){
                button.children("span").fadeOut(300);
                button.parent().parent().children(".q_replyUser").children(".q_ReplyUpDown").children("span").text(data.upvote_count);
                button.prop("disabled",true);
                button.fadeOut(200, function(){
                    button.fadeIn(150);
                    button.text("Upvoted");
                    button.addClass("q_replyUpvoteButtonActive");
                });
            }else{
                button.children("span").fadeOut(300);
                $('#registrationModal').modal({'keyboard':false});
            }
        }
    });
}

// Subreply to a post
function subreplyInit() {
    initOneSubreply($(".reply_reply_post_content"));
}

function initOneSubreply(textarea){
    textarea.keypress(function(event){
        subreplyLogic(event, $(this));
    });
    initAtWhoForElement(textarea);
}

function subreplyLogic(event, textarea){
    if (event.which == 13) {
        event.preventDefault();
        var form = textarea.parent();
        if( textarea.val() ) {
            callPreloader();
            $.ajax({
                url: Routing.generate("user_post_add_reply_to_reply"),
                type: "POST",
                data: form.serializeArray(),
                success: function (data) {

                    if(data.status=="success") {
                        var html = "<div class='comments clearfix commentInPost' style='display: block;'>";
                        html += "<div class='commentsAvatar pull-left'>";
                        html += "<a href='" + Routing.generate("profile", {"nickname": data.user_nickname}) + "'>";
                        html += "<img alt='" + Routing.generate("profile", {"nickname": data.user_nickname}) + "' src='" + data.user_picture + "'></a>";
                        html += "</div>";
                        html += "<div class='commentsContent'>";
                        html += "<a href='" + Routing.generate("profile", {"nickname": data.user_nickname}) + "'>";
                        html += "<h5>" + data.user_nickname + "</h5>";
                        html += "</a>";
                        html += "<p>" + data.reply_content + "</p>";
                        html += "</div>";
                        html += "</div>";
                        form.prev().append(html);
                        textarea.val("");
                        hidePreloader();
                    }else{
                        hidePreloader();
                        $('#registrationModal').modal({'keyboard':false});
                    }


                }
            });
        }
    }
}


function sharePostByFacebook(href){
    // segment tracking
    var pageLocation = window.location.pathname;
    var $event = 'facebook_post_share';
    var $trackDetails = {
        'path': pageLocation
    };
    callSegmentTrack($event, $trackDetails);
    href = "https://www.facebook.com/sharer/sharer.php?u="+href;
    sharePost(href);
}

function sharePostByTwitter(href,text){
    // segment tracking
    var pageLocation = window.location.pathname;
    var $event = 'twitter_post_share';
    var $trackDetails = {
        'path': pageLocation
    };
    callSegmentTrack($event, $trackDetails);
    href = "http://twitter.com/share?text="+text+"&url="+href;
    sharePost(href);
}

function sharePostByGooglePlus(href){
    // segment tracking
    var pageLocation = window.location.pathname;
    var $event = 'google_post_share';
    var $trackDetails = {
        'path': pageLocation
    };
    callSegmentTrack($event, $trackDetails);
    href = "https://plus.google.com/share?url="+href;
    sharePost(href);
}

function sharePost(href){
    window.open(href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    return false;
}