  window.fbAsyncInit = function() {
    FB.init({
      appId            : '509917229384323',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.11'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));






function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

/*
FB.api(
    "/{user-id}/music",
    function (response) {
        if (response && !response.error) {
            //handle the result 
            alert("holi")
        } else {
            alert("holi")

        }
    }
);

*/




