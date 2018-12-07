$(document).ready (function(){

// fixed header effect

  window.onscroll = function() {myFunction()};

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

// change logo color on scroll

  $(document).scroll(function() {
    var scrollPos = $(document).scrollTop();
    if (scrollPos >= 2134) {   
      $('.logo-color').css("fill","#000000");
    } else {
      $('.logo-color').css("fill","#ffffff");
    }
  });

// project section mouse hover effect

  $(".name-1").hover(
    function () {
        $(".intro-1").fadeIn();
    },
    function () {
        $(".intro-1").fadeOut();
    }
  );

  $(".name-2").hover(
    function () {
        $(".intro-2").fadeIn();
    },
    function () {
        $(".intro-2").fadeOut();
    }
  );

  $(".name-3").hover(
    function () {
        $(".intro-3").fadeIn();
    },
    function () {
        $(".intro-3").fadeOut();
    }
  );

  $(".name-4").hover(
    function () {
        $(".intro-4").fadeIn();
    },
    function () {
        $(".intro-4").fadeOut();
    }
  );

  $(".name-5").hover(
    function () {
        $(".intro-5").fadeIn();
    },
    function () {
        $(".intro-5").fadeOut();
    }
  );

  $(".name-6").hover(
    function () {
        $(".intro-6").fadeIn();
    },
    function () {
        $(".intro-6").fadeOut();
    }
  );
  
// map mouse hover effect

  var svg = SVG.get('#svg-map');

  $('.project-list li').mouseover(function(evt) {
    $(this).css({'color': '#fff'});
    var id = $(this).attr('data-id');
    $('#' + id + ' circle').css({fill: '#000'});
  });

  $('.project-list li').mouseout(function(evt) {
    $(this).css({'color': '#939598'});
    var id = $(this).attr('data-id');
    $('#' + id + ' circle').css({fill: '#D0D2D3'});
  });


// timeline images animated scroll loading effect

  $('.timeline-list').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    offset: 100
   });

   $('#overall-intro').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeIn',
    offset: 100
   });

// intro section typewriter effect

   new TypeIt('#input', {
    strings: "Places I lived from 2011 to 2018.", 
    speed: 100,
    lifeLike: true
    // cursor: false
  });

// upper right corner menu link transition 

  $('.menu a').click(function(event) {
    var id = $(this).attr("href");
    var target = $(id).offset().top;
    $('html, body').animate({
        scrollTop: target
    },1000);
    event.preventDefault();
  });

  $('.menu a').click(function(event) {
    $('#overlay-menu').toggle(0);
  });

// image gallery

  // $(function() {
  //   $('.wrapper').click(function() {
  //     $('.content').toggleClass('open');
  //     $(this).toggleClass('open');
  //   })
    
  // })


  
})

