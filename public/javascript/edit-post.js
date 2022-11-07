const editPostForm = document.querySelector('#editPostForm');

async function editPostHandler(event) {
    event.preventDefault();

    //form inputs
    const title = document.querySelector('#editPostTitle').value.trim();
    const post_text = document.querySelector('#editPostText').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    //fetch
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
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
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }

};




editPostForm.addEventListener('submit', editPostHandler);