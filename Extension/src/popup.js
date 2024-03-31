document.addEventListener('DOMContentLoaded', function () {
    // Function to extract website name and URL
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
        var url = tabs[0].url;
        var title = tabs[0].title;

        // Fill the input fields with the extracted data
        document.getElementById('bookmarkName').value = title;
        document.getElementById('bookmarkURL').value = url;
    });

    // Form submission handling
    var form = document.getElementById('bookmarkForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Extract data from form fields
        var name = document.getElementById('bookmarkName').value;
        var note = document.getElementById('bookmarkNote').value;
        var collection = document.getElementById('bookmarkCollection').value;
        var tag = document.getElementById('bookmarkTag').value;
        var url = document.getElementById('bookmarkURL').value;

        // Prepare data for POST request
        var data = {
            name: name,
            note: note,
            collection_name: collection,
            tag: tag,
            url: url
        };

        // Perform POST request
        fetch('http://localhost:3000/api/data/106583711616221224823', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Bookmark saved successfully:', data);
            // Reset form fields
            document.getElementById('bookmarkName').value = '';
            document.getElementById('bookmarkNote').value = '';
            document.getElementById('bookmarkCollection').value = '';
            document.getElementById('bookmarkTag').value = '';
            // Set name and URL back to website values
            chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
                var newUrl = tabs[0].url;
                var newTitle = tabs[0].title;
                document.getElementById('bookmarkName').value = newTitle;
                document.getElementById('bookmarkURL').value = newUrl;
            });
        })
        .catch(error => {
            console.error('There was a problem saving the bookmark:', error.message);
            // Optionally, you can display an error message to the user
        });
    });
});
