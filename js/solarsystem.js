$(document).ready(function () {
	
	//Navigation menu tooltips
	$('.menuHome').hover(function() {
		$('.menuHomeHover').show();
		var percent = $(window).width() * .03;
		percent += 120;
		percent += "px";
		$('.menuHomeHover').css("right", percent);
		$('.menuHome').mouseout(function() {
			$('.menuHomeHover').hide();
		});	
	});	
	
	$('.orbitHome').hover(function() {
		$('.menuOrbitHover').show();
		var percent = $(window).width() * .03;
		percent += 80;
		percent += "px";
		$('.menuOrbitHover').css("right", percent);
		$('.orbitHome').mouseout(function() {
			$('.menuOrbitHover').hide();
		});	
	});	
	
	$('.galleryHome').hover(function() {
		$('.menuGalleryHover').show();
		var percent = $(window).width() * .03;
		percent += "px";
		$('.menuGalleryHover').css("right", percent);
		$('.galleryHome').mouseout(function() {
			$('.menuGalleryHover').hide();
		});	
	});
	
});


/** BEGIN REFERENCE **/
		/** 	3D Cover Flow-Style Image Carousel Plugin with jQuery - Cloud 9 Carousel 2014, "jQuery script.net" Accessed 3 October 2014
				http://www.jqueryscript.net/slider/3D-Cover-Flow-Style-Image-Carousel-Plugin-with-jQuery-Cloud-9-Carousel.html
		**/	
				
$(function() {
	$('#distance').hide();
	$('.fromto').hide();
	
	var showcase = $("#showcase"), title = $('#item-title')

    showcase.Cloud9Carousel({
		yOrigin: 42,
        yRadius: 48,
        mirror: {
			gap: 12,
			height: 0.2
        },
        buttonLeft: $("#nav > .left"),
        buttonRight: $("#nav > .right"),
        autoPlay: 0,
        bringToFront: true,
        onRendered: rendered,
        onLoaded: function() {
			showcase.css( 'visibility', 'visible' )
			showcase.css( 'display', 'none' )
			showcase.fadeIn( 1500 )
		}
		
    })

    function rendered( carousel ) {
		title.text( carousel.nearestItem().element.alt )

        // Fade in based on proximity of the item
        var c = Math.cos((carousel.floatIndex() % 1) * 2 * Math.PI)
        title.css('opacity', 0.5 + (0.5 * c))
    }

    //
    // Simulate physical button click effect
    //
    $('#nav > button').click( function( e ) {
		var b = $(e.target).addClass( 'down' )
        setTimeout( function() { b.removeClass( 'down' ) }, 80 )
    })

    $(document).keydown( function( e ) {
		//
        // More codes: http://www.javascripter.net/faq/keycodes.htm
        //
        switch( e.keyCode ) {
			/* left arrow */
			case 37:
				$('#nav > .left').click()
				break;

			/* right arrow */
			case 39:
				$('#nav > .right').click()
				break;
		}
    })
})

/** END REFERENCE **/