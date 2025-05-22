$(document).ready(function () {
  $('.scrollLink').on('click', function (e) {
    e.preventDefault();
    const targetId = $(this).attr('href');
    const $targetEl = $(targetId);

    if ($targetEl.length) {
      const yOffset = -80;
      const y = $targetEl.offset().top + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    const $navbarCollapse = $('.navbar-collapse');
    if ($navbarCollapse.hasClass('show')) {
      $navbarCollapse.collapse('hide');
    }
  });

  // Scroll to top on navbar toggler open
  $('.navbar-toggler').on('click', function () {
    setTimeout(() => {
      if ($('.navbar-collapse').hasClass('show')) {
        $(window).scrollTop(0);
      }
    }, 200);
  });

  // Collapse nav if clicking outside
  $(document).on('click', function (e) {
    if ($('.navbar-collapse').hasClass('show')) {
      const isInside = $(e.target).closest('.navbar-collapse, .navbar-toggler').length > 0;
      if (!isInside) {
        $('.navbar-collapse').collapse('hide');
      }
    }
  });

  $(window).on('resize', function () {
    if ($(window).width() > 1149.98) {
      $('.navbar-collapse').removeClass('show');
    }
  });

  // Active section tracking
  function updateNavbarState() {
    const scrollTop = $(window).scrollTop();

    const inView = id => {
      const $el = $(id);
      if ($el.length === 0) return false;
      return scrollTop + 100 >= $el.offset().top && scrollTop < $el.offset().top + $el.outerHeight();
    };

    const $navbar = $('.custom-navbar');
    const $desktopLinks = $('.nav-desktop .scrollLink');
    const $mobileItems = $('.nav-mobile .nav-item');
    const $mobileLinks = $('.nav-mobile .nav-link.scrollLink');

    let currentSection = '#home';
    if (inView('#contact')) currentSection = '#contact';
    else if (inView('#tools')) currentSection = '#tools';
    else if (inView('#skills')) currentSection = '#skills';
    else if (inView('#projects')) currentSection = '#projects';
    else if (inView('#about')) currentSection = '#about';

    // Desktop styles
    if (currentSection === '#home') {
      $navbar.removeClass('white-bg');
      $desktopLinks.removeClass('text-green').addClass('text-white');
    } else {
      $navbar.addClass('white-bg');
      $desktopLinks.removeClass('text-white').addClass('text-green');
    }

    $desktopLinks.removeClass('active');
    $desktopLinks.filter(`[href='${currentSection}']`).addClass('active');

    // Mobile styles
    $mobileItems.removeClass('border-green');
    $mobileLinks.removeClass('active text-green text-black text-white');

    const $currentMobileLink = $mobileLinks.filter(`[href='${currentSection}']`);
    $currentMobileLink.addClass('active');
    $currentMobileLink.closest('.nav-item').addClass('border-green');

    if (currentSection === '#home') {
      $mobileLinks.addClass('text-black');
    } else {
      $mobileLinks.addClass('text-green');
    }
  }

  updateNavbarState();
  $(window).on('scroll resize', updateNavbarState);

  const $backToTop = $('#backToTop');
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
      $backToTop.removeClass('d-none');
    } else {
      $backToTop.addClass('d-none');
    }
  });

  $backToTop.on('click', function (e) {
    e.preventDefault();
    $('html, body').scrollTop(0);
  });
});