
$(document).ready(function() {
    $('.scrollLink').click(function (event) {
        event.preventDefault();
        $('html').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    })
    let homePage = ($(window).scrollTop() + $(window).innerHeight() > $("#home").offset().top) && ($(window).scrollTop() < $("#home").offset().top + $("#home").outerHeight());
    let aboutPage = ($(window).scrollTop() + $(window).innerHeight() > $("#about").offset().top) && ($(window).scrollTop() < $("#about").offset().top + $("#about").outerHeight());
    let projectsPage = ($(window).scrollTop() + $(window).innerHeight() > $("#projects").offset().top) && ($(window).scrollTop() < $("#projects").offset().top + $("#projects").outerHeight());
    let skillsPage = ($(window).scrollTop() + $(window).innerHeight() > $("#skills").offset().top) && ($(window).scrollTop() < $("#skills").offset().top + $("#skills").outerHeight());
    let toolsPage = ($(window).scrollTop() + $(window).innerHeight() > $("#tools").offset().top) && ($(window).scrollTop() < $("#tools").offset().top + $("#tools").outerHeight());
    let contactPage = ($(window).scrollTop() + $(window).innerHeight() > $("#contact").offset().top) && ($(window).scrollTop() < $("#contact").offset().top + $("#contact").outerHeight());
    if (homePage){
        $(".fixed-top .second-nav-div a:not(a[href='#home'])").removeClass('green-curPage green-underlined').addClass('white-underlined');
        $(".fixed-top .second-nav-div a[href='#home']").addClass('white-curPage').removeClass('white-underlined green-underlined');
        $('.fixed-top a').addClass('white-text').removeClass('green-text');
    } else if (aboutPage) {
        $('.fixed-top').addClass('white-bg');
        $(".fixed-top .second-nav-div a:not(a[href='#about'])").removeClass('white-curPage green-curPage').addClass('green-underlined');
        $("a[href='#about']").addClass('green-curPage').removeClass('white-underlined green-underlined');
        $('.fixed-top a').addClass('green-text').removeClass('white-text');
    } else if (projectsPage) {
        $('.fixed-top').addClass('white-bg');
        $(".fixed-top .second-nav-div a:not(a[href='#projects'])").removeClass('white-curPage green-curPage').addClass('green-underlined');
        $("a[href='#projects']").addClass('green-curPage').removeClass('white-underlined green-underlined');
        $('.fixed-top a').addClass('green-text').removeClass('white-text');
    } else if (skillsPage) {
        $('.fixed-top').addClass('white-bg');
        $(".fixed-top .second-nav-div a:not(a[href='#skills'])").removeClass('white-curPage green-curPage').addClass('green-underlined');
        $("a[href='#skills']").addClass('green-curPage').removeClass('white-underlined green-underlined');
        $('.fixed-top a').addClass('green-text').removeClass('white-text');
    } else if (contactPage) {
        $('.fixed-top').addClass('white-bg');
        $(".fixed-top .second-nav-div a:not(a[href='#tools'])").removeClass('white-curPage green-curPage').addClass('green-underlined');
        $("a[href='#tools']").addClass('green-curPage').removeClass('white-underlined green-underlined');
        $('.fixed-top a').addClass('green-text').removeClass('white-text');
    } else if (toolsPage) {
        $('.fixed-top').addClass('white-bg');
        $(".fixed-top .second-nav-div a:not(a[href='#contact'])").removeClass('white-curPage green-curPage').addClass('green-underlined');
        $("a[href='#contact']").addClass('green-curPage').removeClass('white-underlined green-underlined');
        $('.fixed-top a').addClass('green-text').removeClass('white-text');
    }
    $(window).on('scroll', function(e) {
        let homePage = ($(window).scrollTop() + $(window).innerHeight() > $("#home").offset().top) && ($(window).scrollTop() < $("#home").offset().top + $("#home").outerHeight());
        let aboutPage = ($(window).scrollTop() + $(window).innerHeight() > $("#about").offset().top) && ($(window).scrollTop() < $("#about").offset().top + $("#about").outerHeight());
        let projectsPage = ($(window).scrollTop() + $(window).innerHeight() > $("#projects").offset().top) && ($(window).scrollTop() < $("#projects").offset().top + $("#projects").outerHeight());
        let skillsPage = ($(window).scrollTop() + $(window).innerHeight() > $("#skills").offset().top) && ($(window).scrollTop() < $("#skills").offset().top + $("#skills").outerHeight());
        let toolsPage = ($(window).scrollTop() + $(window).innerHeight() > $("#tools").offset().top) && ($(window).scrollTop() < $("#tools").offset().top + $("#tools").outerHeight());
        let contactPage = ($(window).scrollTop() + $(window).innerHeight() > $("#contact").offset().top) && ($(window).scrollTop() < $("#contact").offset().top + $("#contact").outerHeight());
        if (homePage){
            $('.fixed-top').removeClass('white-bg');
            $(".fixed-top .second-nav-div a:not(a[href='#home'])").removeClass('green-curPage green-underlined').addClass('white-underlined');
            $(".fixed-top .second-nav-div a[href='#home']").addClass('white-curPage').removeClass('white-underlined green-underlined');
            $('.fixed-top a').addClass('white-text').removeClass('green-text');
        } else if (aboutPage) {
            $('.fixed-top').addClass('white-bg');
            $(".fixed-top .second-nav-div a:not(a[href='#about'])").removeClass('white-curPage green-curPage').addClass('green-underlined');
            $("a[href='#about']").addClass('green-curPage').removeClass('white-underlined green-underlined');
            $('.fixed-top a').addClass('green-text').removeClass('white-text');
        } else if (projectsPage) {
            $('.fixed-top').addClass('white-bg');
            $(".fixed-top .second-nav-div a:not(a[href='#projects'])").removeClass('white-curPage green-curPage').addClass('green-underlined');
            $("a[href='#projects']").addClass('green-curPage').removeClass('white-underlined green-underlined');
            $('.fixed-top a').addClass('green-text').removeClass('white-text');
        } else if (skillsPage) {
            $('.fixed-top').addClass('white-bg');
            $(".fixed-top .second-nav-div a:not(a[href='#skills'])").removeClass('white-curPage green-curPage').addClass('green-underlined');
            $("a[href='#skills']").addClass('green-curPage').removeClass('white-underlined green-underlined');
            $('.fixed-top a').addClass('green-text').removeClass('white-text');
        } else if (contactPage) {
            $('.fixed-top').addClass('white-bg');
            $(".fixed-top .second-nav-div a:not(a[href='#tools'])").removeClass('white-curPage green-curPage').addClass('green-underlined');
            $("a[href='#tools']").addClass('green-curPage').removeClass('white-underlined green-underlined');
            $('.fixed-top a').addClass('green-text').removeClass('white-text');
        } else if (toolsPage) {
            $('.fixed-top').addClass('white-bg');
            $(".fixed-top .second-nav-div a:not(a[href='#contact'])").removeClass('white-curPage green-curPage').addClass('green-underlined');
            $("a[href='#contact']").addClass('green-curPage').removeClass('white-underlined green-underlined');
            $('.fixed-top a').addClass('green-text').removeClass('white-text');
        }
    });
});
