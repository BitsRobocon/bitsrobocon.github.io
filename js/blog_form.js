function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

$(document).ready(function(){
    $('#subscribebutton').on('click', function(){
		if (isEmail($('input[name ="Email"]')[0].value)){
			$('#subscribeform').submit();
		}
		else {
			alert('Please enter a valid Email address')
		}
    });
});
