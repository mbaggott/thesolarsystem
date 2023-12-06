$( document ).ready(function() {
	// Set right position for navigation menu, to allow for pixel/percentage calculation
	var percent = $(window).width() * .03;
	percent += 15;
	percent += "px";
	$('#navmenu').css("right", percent);
	
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
	
	$('.distanceHome').hover(function() {
		$('.menuDistanceHover').show();
		var percent = $(window).width() * .03;
		percent += 80;
		percent += "px";
		$('.menuDistanceHover').css("right", percent);
		$('.distanceHome').mouseout(function() {
			$('.menuDistanceHover').hide();
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
	
});

/** BEGIN REFERENCE **/
/*********************/
/* Fire event of Idle */
/* http://css-tricks.com/snippets/jquery/fire-event-when-user-is-idle/ */
/* Modified by the website author Michael Baggott to include custome jquery method .fadeOut() 
   and custom elements for these methods and the .show() methods. */

idleTimer = null;
idleState = false;
idleWait = 3000;

(function ($) {

    $(document).ready(function () {
    
        $('*').bind('mousemove keydown scroll', function () {
        
            clearTimeout(idleTimer);
                    
            if (idleState == true) { 
                
                // Reactivated event - Customised
                $('#slidecaption').show(); 
				$('#navmenu').show();   
            }
            
            idleState = false;
            
            idleTimer = setTimeout(function () { 
                
                // Idle Event - Customised
                $('#slidecaption').fadeOut(); 
				$('#navmenu').fadeOut(); 

                idleState = true; }, idleWait);
        });
        
        $("body").trigger("mousemove");
    
    });
}) (jQuery)

/** END REFERENCE **/
/*********************/


	
	