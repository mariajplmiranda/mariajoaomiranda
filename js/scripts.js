var currentPage = 'home';

$(document).ready(function(){
	renderPage();
	renderOnMouseOver();
	mouseWheel();
	mouseClick();
});

var renderPage = function(){
	var height = document.documentElement.clientHeight;
	var containers = document.getElementsByClassName('pages');
	for (var index = 0; index < containers.length; ++index) {

		//definir a altura de cada pagina
		containers[index].style.height = height + 'px';
	}
	var texts = document.getElementsByTagName('article');
	for (var index = 0; index < texts.length; ++index) {

		//colocar os textos a meio verticalmente da pagina
		var contentHeight = texts[index].clientHeight;	
		var menuHeight = document.getElementById('menu').style.height;
		contentHeight -= menuHeight;
		texts[index].style.top = (height/2 - contentHeight/2) + 'px'; 
	}

	//avaliar se mostrar ou nao o menu no topo
	var currentPageIndex = document.URL.indexOf('#');
	var start = 0; 
	if(currentPageIndex > 0){
		start = currentPageIndex + 1; //para mostrar s o valor apos o #
		currentPage = document.URL.slice(start);

		if(currentPage !== 'home'){
			document.getElementById('menu').style.visibility = 'visible';
		}
	}
}	

var mouseWheel = function () {
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object
		var $window = $(window);
		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
			 
			// Put together our final background position
			var coords = '0 '+ yPos + 'px';
 
			// Move the background
			$bgobj.css({ backgroundPosition: coords });
		});    		 
	});

	$(document).keydown(function (e) {
		var firstPage = parseInt(document.getElementById('home').style.height);

		if(e.keyCode == 40){ //descer
			if(scrollY > firstPage){
				document.getElementById('menu').style.visibility = 'visible';
			}
		}
		else if(e.keyCode == 38){ //subir
			if(scrollY < firstPage){
				document.getElementById('menu').style.visibility = 'hidden';
			}
		}
    });

	$('.pages').bind('mousewheel', function (e) {
		var firstPage = parseInt(document.getElementById('home').style.height);
		var index = parseInt(scrollY / firstPage);

		var nextPageIndex = null;
 		if (e.originalEvent.wheelDelta / 120 > 0 && index >  0) {
			nextPageIndex = document.getElementById('menuDescription').children[0].children[index - 1].children[0];
		}else if(e.originalEvent.wheelDelta / 120 <= 0 && index < document.getElementById('menuDescription').children[0].children.length){
			nextPageIndex = document.getElementById('menuDescription').children[0].children[index + 1].children[0];
		}

		if(nextPageIndex){
			var $nextPage = $(nextPageIndex.hash);

			$('html, body').stop().animate({
		        'scrollTop': $nextPage.offset().top
		    }, 1000, 'easeInCubic', function () {
		        window.location.hash = nextPageIndex.hash;
		        $('#menuDescription').find('.active').removeClass('active');
		        if (nextPageIndex.hash !== "#home") {
		        	document.getElementById(nextPageIndex.hash).classList.add('active');
		        	document.getElementById('menu').style.visibility = 'visible';
		        } else {
		        	document.getElementById('menu').style.visibility = 'hidden';
		        }
		    });
		}
    });

    $('.pages').onScrollAfter
}

var renderOnMouseOver = function(){
	$( ".changeBackRight" ).mouseover(function() {
		$( ".arrow" ).fadeIn('slow');
	});
	$( ".changeBackRight" ).mouseleave(function() {
		$( ".arrow" ).fadeOut('slow');
	});
}

var mouseClick = function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });

	    if(target == '#home'){
	    	document.getElementById('menu').style.visibility = 'hidden';
	    }else{
            window.setTimeout(function(){document.getElementById('menu').style.visibility = 'visible'; document.getElementById(target).classList.add('active');}, 1000);    	
	    }

	});
}
