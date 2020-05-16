$(document).ready(function(){
	$(document.body).on('scroll', function(){
		fadeOut($('.content .title')[0]);
		fadeOut($('.content .text')[0]);

		// for(var i = 0; i < $('.achievement').length; i++)
		// {
		// 	fadeOut($('.achievement')[i]);
		// }
	});

	for(var i = 0; i < $('.achievement').length; i++)
	{
		hoverAbout($('.achievement')[i]);
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
	element.addEventListener("mouseover", function(){
		for (var i = 0; i < element.childNodes.length; i++) {
			if ((element.childNodes[i].className == "about")||(element.childNodes[i].className == "aboutoverlay")||(element.childNodes[i].className == "about alt"))
			{
		    	element.childNodes[i].style.visibility = 'visible';
		    }
		}
	});

	element.addEventListener("mouseout", function(){
		for (var i = 0; i < element.childNodes.length; i++) {
			if ((element.childNodes[i].className == "about")||(element.childNodes[i].className == "aboutoverlay")||(element.childNodes[i].className == "about alt"))
			{
		    	element.childNodes[i].style.visibility = 'hidden';
		    }
		}
	});
}
