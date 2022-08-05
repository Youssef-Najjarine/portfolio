
$(document).ready(function() {
    $('.scrollLink').click(function (event) {
        event.preventDefault();
        $('html').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    })
    $(window).on('scroll', function(e) {
        let homePage = ($(window).scrollTop() + $(window).innerHeight() > $("#home").offset().top) && ($(window).scrollTop() < $("#home").offset().top + $("#home").outerHeight());
        let aboutPage = ($(window).scrollTop() + $(window).innerHeight() > $("#about").offset().top) && ($(window).scrollTop() < $("#about").offset().top + $("#about").outerHeight());  
        let projectsPage = ($(window).scrollTop() + $(window).innerHeight() > $("#projects").offset().top) && ($(window).scrollTop() < $("#projects").offset().top + $("#projects").outerHeight());
        let skillsPage = ($(window).scrollTop() + $(window).innerHeight() > $("#skills").offset().top) && ($(window).scrollTop() < $("#skills").offset().top + $("#skills").outerHeight());
        let toolsPage = ($(window).scrollTop() + $(window).innerHeight() > $("#tools").offset().top) && ($(window).scrollTop() < $("#tools").offset().top + $("#tools").outerHeight());
        let contactPage = ($(window).scrollTop() + $(window).innerHeight() > $("#contact").offset().top) && ($(window).scrollTop() < $("#contact").offset().top + $("#contact").outerHeight());


        if (homePage){
            $(".fixed-top .second-nav-div a:not(a[href='#home'])").removeClass('curPage').addClass('white-underlined');
            $(".fixed-top .second-nav-div a[href='#home']").addClass('white-curPage').removeClass('white-underlined');
            $('.fixed-top a').addClass('white-text').removeClass('black-text');
        } else if (aboutPage) {
            $(".fixed-top .second-nav-div a:not(a[href='#about'])").removeClass('curPage').addClass('underlined');
            $("a[href='#about']").addClass('curPage').removeClass('underlined');
            $('.fixed-top a').addClass('green-text').removeClass('white-text');
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