(function ($) {
	"use strict";

    jQuery(document).ready(function($){

 			
    			
		        

		        // Owl-Carousel Plugin Active Start
		        $(".hero-area").owlCarousel({
		            items:1,
		            nav:true,
		            dot:false,
		            loop:true,
		            margin:0,
		            animateOut: 'fadeOut',
		            autoplay:false,
		            autoplayTimeout:3000,
		            smartSpeed:1000,
		             navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
		             

		        });
		        // Owl-Carousel Plugin Active End



		        // Owl-Carousel Plugin Animtion Active Start
		         $(".hero-area").on("translate.owl.carousel", function(){
		            $(".hero-slider-item h1").removeClass("animated fadeInDown").css("opacity", "0");
		            $(".hero-slider-item h4").removeClass("animated fadeInDown").css("opacity", "0");
		            $(".hero-slider-item p").removeClass("animated fadeInDown").css("opacity", "0");
		            $(".hero-slider-item a").removeClass("animated fadeInUp").css("opacity", "0");
		            $(".slider-bottom-text p").removeClass("animated fadeInUp").css("opacity", "0");
		        });
		        
		        $(".hero-area").on("translated.owl.carousel", function(){
		            $(".hero-slider-item h1").addClass("animated fadeInDown").css("opacity", "1");
		            $(".hero-slider-item h4").addClass("animated fadeInDown").css("opacity", "1");
		            $(".hero-slider-item p").addClass("animated fadeInDown").css("opacity", "1");
		            $(".hero-slider-item a").addClass("animated fadeInUp").css("opacity", "1");
		            $(".slider-bottom-text p").addClass("animated fadeInUp").css("opacity", "1");
		            
		        });
		        // Owl-Carousel Plugin Animtion Active End

		       
		        $(".custom-btn").click(function(){
				  $(".play-botton, .slider-bottom, .project-details, .owl-nav, .overlay, .home-page-wrapper").addClass("active");
				});


		        $(".overlay").click(function(){
				  $(".play-botton, .slider-bottom, .project-details, .owl-nav, .overlay, .home-page-wrapper").removeClass("active");
				});

		        $(".search-boxs button").click(function(){
				  $(".search-boxs").toggleClass("active");
				});

		        // Nice_select Plugin Active Start
		          $(document).ready(function() {
		            $('select').niceSelect();
		          });
		        // Nice_select Plugin Active End




	});



jQuery(window).load(function(){

	$('.video-play-btn').magnificPopup({
		
		type: 'iframe',
		autoplay: 1,
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: function (url) { return url },
                    src: '%id%'
                }
            }
        }
    

		});
	

});


}(jQuery));	



