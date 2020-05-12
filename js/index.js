$(document).ready(function(){
	$(document.body).on('scroll', function(){
		for(var i = 0; i < $('.title').length; i++)
		{
			fadeOut($('.title')[i]);
		}

		for(var i = 0; i < $('.subtitle').length; i++)
		{
			fadeOut($('.subtitle')[i]);
		}

		for(var i = 0; i < $('.buttonlink').length; i++)
		{
			fadeOut($('.buttonlink')[i]);
		}

		for(var i = 0; i < $('.centerboard').length; i++)
		{
			fadeOut($('.centerboard')[i]);
		}

		for(var i = 0; i < $('.sociallinks').length; i++)
		{
			fadeOut($('.sociallinks')[i]);
		}

		for(var i = 0; i < $('.upbutton').length; i++)
		{
			fadeOut($('.upbutton')[i]);
		}
	});
});

function fadeOut(element){
	var position = ((element.getBoundingClientRect().top + element.getBoundingClientRect().bottom)/2);

	var h = $(window).height();
	var w = $(window).width();

	position -= ((100/768)*((h+w)/2));
	var top = ((150/768)*((h+w)/2));
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
