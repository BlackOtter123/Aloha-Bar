$(document).ready(function()
   {
      $('#wb_FontAwesomeIcon3').addClass('visibility-hidden');
      $('#wb_FontAwesomeIcon8').addClass('visibility-hidden');
      $('#wb_FontAwesomeIcon10').addClass('visibility-hidden');
      $('#wb_FontAwesomeIcon11').addClass('visibility-hidden');
      $('#wb_FontAwesomeIcon26').addClass('visibility-hidden');
      $("a[href*='#home']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#home').offset().top }, 600, 'easeOutExpo');
      }); 
      //first parallax goes here
      $('#home').parallax();
      $('#wb_galleryRound').parallax();
      function onScrollFontAwesomeIcon3()
      {
         var $obj = $("#wb_FontAwesomeIcon3");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_FontAwesomeIcon3', 'transform-lightspeed-in', 100, 1000);
         }
      }
      //Animated social media icons
      onScrollFontAwesomeIcon3();
      $(window).scroll(function(event)
      {
         onScrollFontAwesomeIcon3();
      });
      function onScrollFontAwesomeIcon8()
      {
         var $obj = $("#wb_FontAwesomeIcon8");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_FontAwesomeIcon8', 'transform-lightspeed-in', 200, 1000);
         }
      }
      onScrollFontAwesomeIcon8();
      $(window).scroll(function(event)
      {
         onScrollFontAwesomeIcon8();
      });
      function onScrollFontAwesomeIcon10()
      {
         var $obj = $("#wb_FontAwesomeIcon10");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_FontAwesomeIcon10', 'transform-lightspeed-in', 300, 1000);
         }
      }
      onScrollFontAwesomeIcon10();
      $(window).scroll(function(event)
      {
         onScrollFontAwesomeIcon10();
      });
      function onScrollFontAwesomeIcon11()
      {
         var $obj = $("#wb_FontAwesomeIcon11");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_FontAwesomeIcon11', 'transform-lightspeed-in', 400, 1000);
         }
      }
      onScrollFontAwesomeIcon11();
      $(window).scroll(function(event)
      {
         onScrollFontAwesomeIcon11();
      });
      function onScrollFontAwesomeIcon26()
      {
         var $obj = $("#wb_FontAwesomeIcon26");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_FontAwesomeIcon26', 'transform-lightspeed-in', 500, 1000);
         }
      }
      onScrollFontAwesomeIcon26();
      $(window).scroll(function(event)
      {
         onScrollFontAwesomeIcon26();
      });
      //Carousel slide
      $("#Carousel1").bootstrapcarousel({interval:6000, pause: false});
      $("a[data-rel='PhotoGallery1']").attr('rel', 'PhotoGallery1');
      $("#PhotoGallery1").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   });