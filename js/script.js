$(function(){
    
    //make the current page active
    $("#home a:contains('Home')").parent().addClass('active');
    $("#about a:contains('About Us')").parent().addClass('active');
    $("#service a:contains('Services')").parent().addClass('active');
    $("#contact a:contains('Contact Us')").parent().addClass('active');
    
    //slidedown navigation when hover around
    $('ul.nav li.dropdown').hover(function() {
        $('.dropdown-menu', this).fadeIn();
    },function(){ 
        $('.dropdown-menu',this).fadeOut('fast');
    
    });
    
});