(function($) {
    "use strict";
    
    jQuery(document).ready(function($){
        // jQuery Menu Trigger and Sidebar
        $(".trigger-menu").on("click", function(){
        	$(".trigger-menu").toggleClass('active');
        });
        $(".trigger-menu").on("click", function(){
            $(".sidebar-menu").toggleClass('active');
        });
        $(".menu-close").on("click", function(){
            $(".trigger-menu").removeClass('active');
        });
        $(".menu-close").on("click", function(){
        	$(".sidebar-menu").removeClass('active');
        });

        // jQuery Typer Js
        typer();
        $(".count").counterUp({
            time: 2000,
            delay: 20
        });

        // filter items on button click
        $('.project-title li').on( 'click', function() {
            $('.project-title li').removeClass('active');
            $(this).addClass('active');

          var selector = $(this).attr('data-filter');
                      $(".project-list").isotope({
                          filter: selector
                      });
        });

        // Owl-carousel Active
        $('.testimonial-carousel').owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            animateIn: 'slideInRight',
            animateOut: 'fadeOutDown',
            autoplay: true
        });

        // Wow Js Active
        new WOW().init();

        // Barfiller Active
        // Bar One
        $('#bar1').barfiller({
            barColor: '#0ABEF1',
            duration: 2000
        });
        // Bar One
        $('#bar2').barfiller({
            barColor: '#F92659',
            duration: 2000
        });
        // Bar One
        $('#bar3').barfiller({
            barColor: '#FEBF01',
            duration: 2000
        });
        // Bar One
        $('#bar4').barfiller({
            barColor: '#06D6A0',
            duration: 2000
        });
        // Bar One
        $('#bar5').barfiller({
            barColor: '#F77D0E',
            duration: 2000
        });
        // Bar One
        $('#bar6').barfiller({
            barColor: '#299A0B',
            duration: 2000
        });
        
        // G-map3 Active
        $('#map')
              .gmap3({
                center:[22.8006922,89.4415025],
                zoom:10,
                mapTypeId: "shadeOfGrey", // to select it directly
                mapTypeControlOptions: {
                  mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
                },
                scrollwheel: false
              })
              .styledmaptype(
                "shadeOfGrey",
                [
                  {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#725034"},{"lightness":40}]},
                  {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":15}]},
                  {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                  {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#282828"},{"lightness":20}]},
                  {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#282828"},{"lightness":17},{"weight":1.2}]},
                  {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#282828"},{"lightness":20}]},
                  {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#282828"},{"lightness":21}]},
                  {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#383838"},{"lightness":17}]},
                  {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#383838"},{"lightness":29},{"weight":0.2}]},
                  {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#383838"},{"lightness":18}]},
                  {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#383838"},{"lightness":16}]},
                  {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#6C6D69"},{"lightness":19}]},
                  {"featureType":"water","elementType":"geometry","stylers":[{"color":"#003F44"},{"lightness":17}]}
                ],
                {name: "Shades of Grey"}
              );
        
    });

    // jQuery Typer Js
    function typer() {
	    var win = jQuery(window),
	        foo = jQuery('#typer');
	    foo.typer(['<h1>Jibon Kumar <span>Biswas</span></h1>', '<h1>Web <span>Designer</span></h1>', '<h1><span>Frontend</span> Developer</h1>']);

	}
    
    jQuery(window).load(function(){
        
    });
    
    
}(jQuery));