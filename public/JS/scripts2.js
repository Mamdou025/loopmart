$(window).on('scroll load', function() {
    if ($(".navbar").offset().top > 60) {
        $(".fixed-top").addClass("top-nav-collapse");
    } else {
        $(".fixed-top").removeClass("top-nav-collapse");
    }
  });


  $(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 600, 'easeInOutExpo');
        event.preventDefault();
    });
});


//   const featuredlist=[images.at(-5),images.at(-4),images.at(-10),images.at(-12)]
