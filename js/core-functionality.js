
$(document).ready(function() {
    $('.scrollLink').click(function (event) {
        event.preventDefault();
        $('html').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    })
    let curScreen = 'home';
    if (curScreen === 'home') $('.fixed-top a').addClass('white-text');
    $(window).on('scroll', function(e) {
        let homePage = ($(window).scrollTop() + $(window).innerHeight() > $("#home").offset().top) && ($(window).scrollTop() < $("#home").offset().top + $("#home").outerHeight());
        let aboutPage = ($(window).scrollTop() + $(window).innerHeight() > $("#about").offset().top) && ($(window).scrollTop() < $("#about").offset().top + $("#about").outerHeight());  
        let projectsPage = ($(window).scrollTop() + $(window).innerHeight() > $("#projects").offset().top) && ($(window).scrollTop() < $("#projects").offset().top + $("#projects").outerHeight());
        let skillsPage = ($(window).scrollTop() + $(window).innerHeight() > $("#skills").offset().top) && ($(window).scrollTop() < $("#skills").offset().top + $("#skills").outerHeight());
        let toolsPage = ($(window).scrollTop() + $(window).innerHeight() > $("#tools").offset().top) && ($(window).scrollTop() < $("#tools").offset().top + $("#tools").outerHeight());
        let contactPage = ($(window).scrollTop() + $(window).innerHeight() > $("#contact").offset().top) && ($(window).scrollTop() < $("#contact").offset().top + $("#contact").outerHeight());


        if (homePage){
            console.log('Home Page!!');
        } else if (aboutPage) {
            console.log('About Page!!!');
        } else if (projectsPage) {
            console.log('Projects Page!!!');
        } else if (skillsPage) {
            console.log('Skills Page!!');
        } else if (toolsPage) {
            console.log('Tools Page!!');
        } else if (contactPage) {
            console.log('Contact Page!!');
        }
    });
});