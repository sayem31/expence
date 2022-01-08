$(document).ready(function() {
    $('.popup_youtube').magnificPopup({
      disableOn: 200,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false,
    });

    // Start Humber Main Menu Icon Js
      $('.all_p_humber').click(function(){
             $(this).toggleClass('open');
         });
    //==== End Humber Main Menu Icon Js


      $('.all_p_humber').click(function(){
          $('.menu ul').slideToggle();
        });
      $('.menu ul li a').click(function(){
          $('.all_p_humber').removeClass('open');
      });
  });

  $(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
});