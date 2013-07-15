

function login()
{
	var username = $("#username").val();
	var password = $("#password").val();
	
	if(username.length == 0 || password.length == 0)
	{
		$("#message").text("You must enter a username and password");
		return false;
	}
	
	pwHash = Fairywren.hashPassword(password);
	
	jQuery.post("api/session", { "username": username,"password" :pwHash }).
	done(
		function(data){
			if("error" in data)
			{
				$("#message").text(data.error);
			}
			else
			{
				window.location = 'torrents.html';				
			}

		}
	).
	fail(
		function()
		{
			$("#message").text("Server error");
		})
		;
	
	return false;
}
