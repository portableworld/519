$(document).ready(function() {

$('#home_hover').hide();
$('#artists_hover').hide();
$('#bookings_hover').hide();
$('#about_hover').hide();

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


});
