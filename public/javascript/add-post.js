const postFormEl = document.querySelector('#dashboardForm');

async function newFormHandler(event) {
    event.preventDefault();
    // text and title els and values
    const titleEl = document.querySelector('#postTitle');
    const textEl = document.querySelector('#postText');
    const title = titleEl.value;
    const post_text = textEl.value;
    //fetch
    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    //check response
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

postFormEl.addEventListener('submit', newFormHandler)