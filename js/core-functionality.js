$(document).ready(function () {
  // Smooth scrolling
  document.querySelectorAll('.scrollLink').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        const yOffset = -80;
        const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  // Collapse mobile nav on item click
  $('.navbar-nav a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Scroll to top on navbar toggler click
  $('.navbar-toggler').on('click', function () {
    setTimeout(() => {
      if ($('.navbar-collapse').hasClass('show')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 200);
  });

  // Collapse mobile nav if clicking outside
  $(document).on('click', function (e) {
    if ($('.navbar-collapse').hasClass('show')) {
      const isInside = $(e.target).closest('.navbar-collapse, .navbar-toggler').length > 0;
      if (!isInside) {
        $('.navbar-collapse').collapse('hide');
      }
    }
  });

  // Close mobile menu on resize above breakpoint
  $(window).on('resize', function () {
    if ($(window).width() > 1149.98) {
      $('.navbar-collapse').removeClass('show');
    }
  });

  // Update nav styling based on scroll position
  function updateNavbarState() {
    const scrollTop = $(window).scrollTop();

    const inView = id => {
      const el = $(id);
      if (el.length === 0) return false;
      return scrollTop + 100 >= el.offset().top && scrollTop < el.offset().top + el.outerHeight();
    };

    const navbar = $('.custom-navbar');
    const desktopLinks = $('.nav-desktop .scrollLink');
    const mobileItems = $('.nav-mobile .nav-item');
    const mobileLinks = $('.nav-mobile .nav-link.scrollLink');

    let currentSection = '#home';
    if (inView('#contact')) currentSection = '#contact';
    else if (inView('#tools')) currentSection = '#tools';
    else if (inView('#skills')) currentSection = '#skills';
    else if (inView('#projects')) currentSection = '#projects';
    else if (inView('#about')) currentSection = '#about';

    // === Desktop Styling ===
    if (currentSection === '#home') {
      navbar.removeClass('white-bg');
      desktopLinks.removeClass('text-green').addClass('text-white');
    } else {
      navbar.addClass('white-bg');
      desktopLinks.removeClass('text-white').addClass('text-green');
    }

    desktopLinks.removeClass('active');
    desktopLinks.filter(`[href='${currentSection}']`).addClass('active');

    // === Mobile Styling ===
    mobileItems.removeClass('border-green');
    mobileLinks.removeClass('active text-green text-black text-white');

    const currentMobileLink = mobileLinks.filter(`[href='${currentSection}']`);
    currentMobileLink.addClass('active');
    currentMobileLink.closest('.nav-item').addClass('border-green');

    if (currentSection === '#home') {
      mobileLinks.addClass('text-black');
    } else {
      mobileLinks.addClass('text-green');
    }
  }

  updateNavbarState();
  $(window).on('scroll resize', updateNavbarState);
});
