/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

// AOS.init({
//     duration: 800,
//     easing: 'slide'
// });


(function ($) {

    var onePageClick = function() {
		$(document).on('click', '#ftco-nav .nav-link[href^="#"]', function(event) {
			console.log("Link clicked:", $(this).attr('href')); // To check if the event is firing
	
			event.preventDefault();
			var href = $(this).attr('href');
	
			// Scroll animation
			$('html, body').animate({
				scrollTop: $(href).offset().top - 70
			}, 500, function() {
				console.log("***Navigated to:", href); // To confirm navigation
				$('.navbar-collapse').removeClass('show');
			});
		});
	};
	
	onePageClick();

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(100).fadeOut("slow");

        /*------------------
            Portfolio filter
        --------------------*/
        $('.portfolio__filter li').on('click', function () {
            $('.portfolio__filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.portfolio__gallery').length > 0) {
            var containerEl = document.querySelector('.portfolio__gallery');
            var mixer = mixitup(containerEl);
        }
    });



    
    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Masonary
    $('.work__gallery').masonry({
        itemSelector: '.work__item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
		Hero Slider
	--------------------*/
    $('.hero__slider').owlCarousel({
        loop: true,
        dots: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    var dot = $('.hero__slider .owl-dot');
    dot.each(function () {
        var index = $(this).index() + 1;
        if (index < 10) {
            $(this).html('0').append(index);
        } else {
            $(this).html(index);
        }
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".testimonial__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Latest Slider
    --------------------*/
    $(".latest__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Logo Slider
    --------------------*/
    $(".logo__carousel").owlCarousel({
        loop: true,
        margin: 100,
        items: 6,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 5
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 2
            }
        }
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Counter
    --------------------*/
    $('.counter_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $(document).ready(function() {
        $("form").on("submit", function(e) {
            e.preventDefault(); // Prevent the form from submitting traditionally
    
            emailjs.sendForm('service_cq3z5rk', 'template_54bku5t', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
    
                 // Clear the form fields after successful send
                 $("form")[0].reset();
    
                alert("Message sent successfully!");
            }, function(error) {
                console.log('FAILED...', error);
                alert("Message sending failed. Please try again.");
            });
        });
    });


    /**
	 * Scroll top button
	 */
	let scrollTop = document.querySelector('.scroll-top');

	function toggleScrollTop() {
	if (scrollTop) {
		window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        
	}
	}
	scrollTop.addEventListener('click', (e) => {
	e.preventDefault();
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
	});

	window.addEventListener('load', toggleScrollTop);
	document.addEventListener('scroll', toggleScrollTop);


    var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

    /*----------------------------------------
      JS function to add animation to elements
    -----------------------------------------*/
    // var contentWayPoint = function() {
	// 	var i = 0;
	// 	$('.ftco-animate').waypoint( function( direction ) {

	// 		if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
	// 			i++;

	// 			$(this.element).addClass('item-animate');
	// 			setTimeout(function(){

	// 				$('body .ftco-animate.item-animate').each(function(k){
	// 					var el = $(this);
	// 					setTimeout( function () {
	// 						var effect = el.data('animate-effect');
	// 						if ( effect === 'fadeIn') {
	// 							el.addClass('fadeIn ftco-animated');
	// 						} else if ( effect === 'fadeInLeft') {
	// 							el.addClass('fadeInLeft ftco-animated');
	// 						} else if ( effect === 'fadeInRight') {
	// 							el.addClass('fadeInRight ftco-animated');
	// 						} else {
	// 							el.addClass('fadeInUp ftco-animated');
	// 						}
	// 						el.removeClass('item-animate');
	// 					},  k * 50, 'easeInOutExpo' );
	// 				});
					
	// 			}, 300);
				
	// 		}

	// 	} , { offset: '95%' } );
	// };
	// contentWayPoint();

    // $(document).ready(function() {
    //     // Cache selectors
    //     let lastId,
    //       topMenu = $("#ftco-nav"),
    //       topMenuHeight = topMenu.outerHeight() + 1,
    //       // All list items
    //       menuItems = topMenu.find("a.nav-link"),
    //       // Anchors corresponding to menu items
    //       scrollItems = menuItems.map(function() {
    //         let item = $($(this).attr("href"));
    //         if (item.length) { return item; }
    //       });
      
    //     // Bind to scroll
    //     $(window).scroll(function() {
    //       // Get container scroll position
    //       let fromTop = $(this).scrollTop() + topMenuHeight;
      
    //       // Get id of current scroll item
    //       let cur = scrollItems.map(function() {
    //         if ($(this).offset().top < fromTop)
    //           return this;
    //       });
    //       // Get the id of the current element
    //       cur = cur[cur.length - 1];
    //       let id = cur && cur.length ? cur[0].id : "";
      
    //       if (lastId !== id) {
    //         lastId = id;
    //         // Set/remove active class
    //         menuItems
    //           .parent().removeClass("active")
    //           .end().filter("[href='#" + id + "']").parent().addClass("active");
    //       }
    //     });
    //   });

        // Select all section elements and nav links
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let currentSection = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                // Check if the section is currently in view
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    currentSection = section.getAttribute('id'); // get the ID of the current section in view
                }
            });

             
            // Remove the active class from all nav links and add it to the link of the current section
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(currentSection)) {
                    link.classList.add('active');
                }
            });
        });

      
    

})(jQuery);