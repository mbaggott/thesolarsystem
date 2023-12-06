/** Code used for the CSS Orbit Interaction **/
/* Written by the website author - Michael Baggott */
/* No reference required */


$(function(){
	$('#pauseplay').click(function(){
		console.log('Running animation');
		var imgs = document.querySelectorAll('.planetImg');
		let id;
		for ( var i = 0; i < imgs.length; i++ ) {
			if ( imgs[i].style.animationPlayState == 'paused' ) {
				id = imgs[i].id;
				document.getElementById(id).style.animationPlayState = 'running';
				//imgs[i].style.animationPlayState = 'running';
			} else {
				imgs[i].style.animationPlayState = 'paused';
			}
			/*if ( imgs[i].style.webkitAnimationPlayState == 'paused' ) {
				id = imgs[i].id;
				document.getElementById(id).style.webkitAnimationPlayState = 'running'
				//imgs[i].style.webkitAnimationPlayState = 'running';
			} else {
				imgs[i].style.webkitAnimationPlayState = 'paused';
			}*/
		}      
	});	
});

$( document ).ready(function() {
	console.log('Document Ready');
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
	
	$('.galleryHome').hover(function() {
		$('.menuGalleryHover').show();
		var percent = $(window).width() * .03;
		percent += "px";
		$('.menuGalleryHover').css("right", percent);
		$('.galleryHome').mouseout(function() {
			$('.menuGalleryHover').hide();
		});	
	});
	
	// retrieve the element
	element = document.getElementById("reset");

	// reset the transition by...
	element.addEventListener("click", function(e) {
		
		e.preventDefault;
  
		// -> removing the class
		$('#earth').attr('id', 'earthNone');
		$('#mercury').attr('id', 'mercuryNone');
		$('#venus').attr('id', 'venusNone');
		$('#mars').attr('id', 'marsNone');
		$('#jupiter').attr('id', 'jupiterNone');
		$('#saturn').attr('id', 'saturnNone');
		$('#uranus').attr('id', 'uranusNone');
		$('#neptune').attr('id', 'neptuneNone');
		
		// -> triggering reflow /* The actual magic */
		// without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
		element.offsetWidth = element.offsetWidth;
  
		// -> and re-adding the class
		$('#earthNone').attr('id', 'earth');
		$('#mercuryNone').attr('id', 'mercury');
		$('#venusNone').attr('id', 'venus');
		$('#marsNone').attr('id', 'mars');
		$('#jupiterNone').attr('id', 'jupiter');
		$('#saturnNone').attr('id', 'saturn');
		$('#uranusNone').attr('id', 'uranus');
		$('#neptuneNone').attr('id', 'neptune');
		
		var imgs = document.querySelectorAll('.planetImg');
		for ( var i = 0; i < imgs.length; i++ ) {
			imgs[i].style.webkitAnimationPlayState = "paused";  
			imgs[i].style.animationPlayState = "paused";  
		}

	}, false);
	
	
	var imgs = document.querySelectorAll('.planetImg');
	for ( var i = 0; i < imgs.length; i++ ) {
		imgs[i].style.webkitAnimationPlayState = "paused";  
		imgs[i].style.animationPlayState = "paused"; 
	}
	
	$('#sunText').hover(function() {
			$('#sun').addClass('planetHighlighted');
		}, function() {
		// on mouseout, reset the background colour
			$('#sun').removeClass('planetHighlighted');
	});
	
	$('#mercuryText').hover(function() {
			$('#mercury').addClass('planetHighlighted');
		}, function() {
		// on mouseout, reset the background colour
			$('#mercury').removeClass('planetHighlighted');
	});
	
	$('#venusText').hover(function() {
			$('#venus').addClass('planetHighlighted');
		}, function() {
		// on mouseout, reset the background colour
			$('#venus').removeClass('planetHighlighted');
	});
	
	$('#earthText').hover(function() {
			$('#earth').addClass('planetHighlighted');
		}, function() {
		// on mouseout, reset the background colour
			$('#earth').removeClass('planetHighlighted');
	});
	
	$('#marsText').hover(function() {
			$('#mars').addClass('planetHighlighted');
		}, function() {
		// on mouseout, reset the background colour
			$('#mars').removeClass('planetHighlighted');
	});
	
	$('#jupiterText').hover(function() {
			$('#jupiter').addClass('planetHighlighted');
		}, function() {
		// on mouseout, reset the background colour
			$('#jupiter').removeClass('planetHighlighted');
	});
	
	$('#saturnText').hover(function() {
			$('#saturn').addClass('planetHighlighted');
		}, function() {
		// on mouseout, reset the background colour
			$('#saturn').removeClass('planetHighlighted');
	});
	
	$('#uranusText').hover(function() {
			$('#uranus').addClass('planetHighlighted');
		}, function() {
		// on mouseout, reset the background colour
			$('#uranus').removeClass('planetHighlighted');
	});
	
	$('#neptuneText').hover(function() {
			$('#neptune').addClass('planetHighlighted');
		}, function() {
		// on mouseout, reset the background colour
			$('#neptune').removeClass('planetHighlighted');
	});
	
	document.getElementById('reset').click();
	
});

$(function(){
   	$('#sunText').click(function(){
		if ($('#sunPanel').hasClass('visible')) {
			$('#sunPanel').removeClass('visible');
			$('#sunPanel').fadeOut(500);
		}
		else {
			$('.panel').removeClass('visible');
			$('.panel').hide();
			$('#sunPanel').fadeIn(500);
			$('#sunPanel').addClass('visible');
		}
	});	
});

$(function(){
   	$('#mercuryText').click(function(){
		if ($('#mercuryPanel').hasClass('visible')) {
			$('#mercuryPanel').removeClass('visible');
			$('#mercuryPanel').fadeOut(500);
		}
		else {
			$('.panel').removeClass('visible');
			$('.panel').hide();
			$('#mercuryPanel').fadeIn(500);
			$('#mercuryPanel').addClass('visible');
		}
	});	
});

$(function(){
   	$('#venusText').click(function(){
		if ($('#venusPanel').hasClass('visible')) {
			$('#venusPanel').removeClass('visible');
			$('#venusPanel').fadeOut(500);
		}
		else {
			$('.panel').removeClass('visible');
			$('.panel').hide();
			$('#venusPanel').fadeIn(500);
			$('#venusPanel').addClass('visible');
		}
	});	
});

$(function(){
   	$('#earthText').click(function(){
		if ($('#earthPanel').hasClass('visible')) {
			$('#earthPanel').removeClass('visible');
			$('#earthPanel').fadeOut(500);
		}
		else {
			$('.panel').removeClass('visible');
			$('.panel').hide();
			$('#earthPanel').fadeIn(500);
			$('#earthPanel').addClass('visible');
		}
	});	
});

$(function(){
   	$('#marsText').click(function(){
		if ($('#marsPanel').hasClass('visible')) {
			$('#marsPanel').removeClass('visible');
			$('#marsPanel').fadeOut(500);
		}
		else {
			$('.panel').removeClass('visible');
			$('.panel').hide();
			$('#marsPanel').fadeIn(500);
			$('#marsPanel').addClass('visible');
		}
	});	
});

$(function(){
   	$('#jupiterText').click(function(){
		if ($('#jupiterPanel').hasClass('visible')) {
			$('#jupiterPanel').removeClass('visible');
			$('#jupiterPanel').fadeOut(500);
		}
		else {
			$('.panel').removeClass('visible');
			$('.panel').hide();
			$('#jupiterPanel').fadeIn(500);
			$('#jupiterPanel').addClass('visible');
		}
	});	
});

$(function(){
   	$('#saturnText').click(function(){
		if ($('#saturnPanel').hasClass('visible')) {
			$('#saturnPanel').removeClass('visible');
			$('#saturnPanel').fadeOut(500);
		}
		else {
			$('.panel').removeClass('visible');
			$('.panel').hide();
			$('#saturnPanel').fadeIn(500);
			$('#saturnPanel').addClass('visible');
		}
	});	
});

$(function(){
   	$('#uranusText').click(function(){
		if ($('#uranusPanel').hasClass('visible')) {
			$('#uranusPanel').removeClass('visible');
			$('#uranusPanel').fadeOut(500);
		}
		else {
			$('.panel').removeClass('visible');
			$('.panel').hide();
			$('#uranusPanel').fadeIn(500);
			$('#uranusPanel').addClass('visible');
		}
	});	
});

$(function(){
   	$('#neptuneText').click(function(){
		if ($('#neptunePanel').hasClass('visible')) {
			$('#neptunePanel').removeClass('visible');
			$('#neptunePanel').fadeOut(500);
		}
		else {
			$('.panel').removeClass('visible');
			$('.panel').hide();
			$('#neptunePanel').fadeIn(500);
			$('#neptunePanel').addClass('visible');
		}
	});	
});

$(function(){
   	$('#showIcon').click(function(){
		$('#planetList').slideDown();
		$('#showIcon').hide();
		$('#showIconPanel').show();
		$('#handIcon').show();
		$('#clickIcon').show();
	});	
});

$(function(){
   	$('#showIconPanel').click(function(){
		$('#planetList').slideUp();
		$('#showIcon').show();
		$('#showIconPanel').hide();
		$('#handIcon').hide();
		$('#clickIcon').hide();
		$('.panel').hide();
	});	
});

