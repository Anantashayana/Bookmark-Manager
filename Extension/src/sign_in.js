document.getElementById('signin').addEventListener('click', function() {
    chrome.identity.getAuthToken({interactive: true}, function(token) {
        if (chrome.runtime.lastError) {
            console.log(chrome.runtime.lastError.message);
            return;
        }

        // Use the token to access the user's Google data.
        fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token)
            .then(response => response.json())
            .then(userinfo => {
                console.log(userinfo);
                // User is signed in at this point.
                // You can use userinfo to get the user's information.
                // Now you can redirect to popup.js or do whatever you want.
                chrome.browserAction.setPopup({popup: 'src/popup.html'});
            });
    });
});
