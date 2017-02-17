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
 * Created by malcaino on 27/05/15.
 */

//Initializing calendar in sport page
$('.dateCalendar.cursor-pointer').click(function(e){
    e.preventDefault();
    var prevDate = $(this).prev().attr("date");
    $('.popular .eventsTitle p').text($(this).attr('date-string'));
    var date = $(this).attr('date');
    $(".dateCalendar a").removeClass("active");
    $(this).children("a").addClass("active");
    var target_id = $(this).attr("target_id");
    $(".betting_container").hide();
    $(target_id).show();
    if($(target_id).children(".events").length == 0){
        $("#loadmoreajaxloader").show();
        $.ajax({
                url: Routing.generate("get_events_for_sport_page_ajax"),
                type: "POST",
                data: {
                    startDate: date,
                    prevDate: prevDate,
                    sport_slug: window.location.href.split("/")[4].toLowerCase()
                },
                success: function(data){
                    var view = $(data.view);
                    $(target_id).html(view);
                    initOddsButtons(view.find("button.addToBetslip.non-active"));
                    removeOdd(view.find("button.addToBetslip.active"));
                    $("#loadmoreajaxloader").hide();
                    initViewEventButtons();
                    //Resizing main div
                    resizeSbSiteDiv($('.container.content').height());
                }
            }
        );
    }else{
        //Resizing main div
        resizeSbSiteDiv($('.container.content').height());
    }
});


var prev = 0;
var $window = $(window);
var nav = $('.sportsEventTop');

$window.on('scroll', function () {
    var scrollTop = $window.scrollTop();
    nav.toggleClass('hidden', scrollTop > prev);
    prev = scrollTop;
});