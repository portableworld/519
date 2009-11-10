$(document).ready(function() {

$('#home_hover').hide();
$('#artists_hover').hide();
$('#bookings_hover').hide();
$('#about_hover').hide();
$('#rss_logo_hover').hide();
$('#fb_logo_hover').hide();
$('#twitter_logo_hover').hide();
$('#ms_logo_hover').hide();

$('#home').hover(
    function(){
        $('#home_hover').show();
    },
    function(){
        $('#home_hover').hide();
    });

$('#artists').hover(
    function(){
        $('#artists_hover').show();
    },
    function(){
        $('#artists_hover').hide();
    });

$('#bookings').hover(
    function(){
        $('#bookings_hover').show();
    },
    function(){
        $('#bookings_hover').hide();
    });

$('#about').hover(
    function(){
        $('#about_hover').show();
    },
    function(){
        $('#about_hover').hide();
    });

$('#rss_logo').hover(
    function(){
        $('#rss_logo_hover').show();
    },
    function(){
        $('#rss_logo_hover').hide();
    });

$('#fb_logo').hover(
    function(){
        $('#fb_logo_hover').show();
    },
    function(){
        $('#fb_logo_hover').hide();
    });

$('#twitter_logo').hover(
    function(){
        $('#twitter_logo_hover').show();
    },
    function(){
        $('#twitter_logo_hover').hide();
    });

$('#ms_logo').hover(
    function(){
        $('#ms_logo_hover').show();
    },
    function(){
        $('#ms_logo_hover').hide();
    });

});
