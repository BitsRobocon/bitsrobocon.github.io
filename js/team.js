$(document).ready(function(){
	$(document.body).on('scroll', function(){
		for(var i = 0; i < $('.heading').length; i++)
		{
			fadeOut($('.heading')[i]);
		}

		for(var i = 0; i < $('.membercard').length; i++)
		{
			fadeOut($('.membercard')[i]);
		}

		fadeOut($('.content .title')[0]);
		fadeOut($('.content .text')[0]);
	});

	for(var i = 0; i < $('.membercard').length; i++)
	{
		hoverAbout($('.membercard')[i]);
	}
});

function fadeOut(element){
	var position = ((element.getBoundingClientRect().top + element.getBoundingClientRect().bottom)/2);

	var h = $(window).height();
	var w = $(window).width();

	position -= ((80/768)*((h+w)/2));
	var top = ((100/768)*((h+w)/2));
	position/=top;

	if(position < 1)
	{
		element.style.opacity = position;
	}
	else
	{
		element.style.opacity = 1;
	}
}

function hoverAbout(element){
	// element.addEventListener("touchend", function(event){
	// 	event.preventDefault();
	// 	for (var i = 0; i < element.childNodes.length; i++) {
	// 	    if ((element.childNodes[i].className == "about")||(element.childNodes[i].className == "aboutoverlay"))
	// 		{
	// 			if (element.childNodes[i].style.visibility == 'hidden')
	// 			{
	// 				element.childNodes[i].style.visibility = 'visible';
	// 			}
	// 			else
	// 			{
	// 				element.childNodes[i].style.visibility = 'hidden';
	// 			}
	// 	    }
	// 	}
	// });

	element.addEventListener("mouseover", function(){
		for (var i = 0; i < element.childNodes.length; i++) {
			if ((element.childNodes[i].className == "about")||(element.childNodes[i].className == "aboutoverlay"))
			{
		    	element.childNodes[i].style.visibility = 'visible';
		    }
		}
	});

	element.addEventListener("mouseout", function(){
		for (var i = 0; i < element.childNodes.length; i++) {
			if ((element.childNodes[i].className == "about")||(element.childNodes[i].className == "aboutoverlay"))
			{
		    	element.childNodes[i].style.visibility = 'hidden';
		    }
		}
	});
}
