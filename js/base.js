$('<img/>').attr('style', 'width: 100px; height: 100px; opacity: 0px; position: absolute; top: 0px; left: 0px;').attr('src', 'content/images/drone_cross.svg').on('load', function() {
   $(this).remove();
   $('.drone').css('background-image', 'url(content/images/drone_cross.svg)');
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
