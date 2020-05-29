$('<img/>').attr('style', 'width: 100px; height: 100px; opacity: 0px; position: absolute; top: 0px; left: 0px;').attr('src', '../content/images/drone_cross.svg').on('load', function() {
   $(this).remove();
   $('.drone').css('background-image', 'url(../content/images/drone_cross.svg)');
   moveDrone();
});

function moveDrone() {
	var frame = setInterval(function(){
		var pos = $('.drone').css('left');
        if( pos != undefined)
        {
            pos = pos.substring(0, pos.length-2);
    		pos = parseInt(pos);

            var w = $(window).width();
        	var h = $(window).height();
            var increment = ((5/768)*((w+h)/2));

    		if( pos >= (w+((50/768)*((w+h)/2))) )
    		{
                if(document.readyState == 'complete')
    			{
                    $('.loader').fadeOut(1500);
        			clearInterval(frame);
    			}
    			else
    			{
    				pos = ((-175/768)*((w+h)/2));
    			}
    		}
    		else
    		{
    			pos += increment;
    		}

    		$('.block').css({'position': 'absolute', 'left': ((pos+((100/768)*((w+h)/2)))+'px')});
    		pos += 'px';
    		$('.drone').css({'position': 'absolute', 'left': pos});
        }
	}, 10);
}

$(document).ready(function(){
	$(document.body).on('scroll', function(){
		for(var i = 0; i < $('.blogcontent p').length; i++)
		{
			fadeOut($('.blogcontent p')[i]);
		}

		for(var i = 0; i < $('.blogcontent h1').length; i++)
		{
			fadeOut($('.blogcontent h1')[i]);
		}

		for(var i = 0; i < $('.blogcontent h2').length; i++)
		{
			fadeOut($('.blogcontent h2')[i]);
		}

		for(var i = 0; i < $('.blogcontent h3').length; i++)
		{
			fadeOut($('.blogcontent h3')[i]);
		}

		for(var i = 0; i < $('.blogcontent h4').length; i++)
		{
			fadeOut($('.blogcontent h4')[i]);
		}

		for(var i = 0; i < $('.blogcontent h5').length; i++)
		{
			fadeOut($('.blogcontent h5')[i]);
		}

        for(var i = 0; i < $('.blogcontent h6').length; i++)
		{
			fadeOut($('.blogcontent h6')[i]);
		}

        for(var i = 0; i < $('.blogcontent img').length; i++)
		{
			fadeOut($('.blogcontent img')[i]);
		}

        for(var i = 0; i < $('.blogcontent div').length; i++)
		{
			fadeOut($('.blogcontent div')[i]);
		}

        for(var i = 0; i < $('.blogcontent ul').length; i++)
		{
			fadeOut($('.blogcontent ul')[i]);
		}
	});
});

function fadeOut(element){
	var position = ((element.getBoundingClientRect().top + element.getBoundingClientRect().bottom)/2);

	var h = $(window).height();
	var w = $(window).width();

	position -= ((100/768)*((h+w)/2));
	var top = ((110/768)*((h+w)/2));
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
