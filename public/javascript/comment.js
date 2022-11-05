const commentFormEl = document.querySelector('#commentForm');


async function commentFormHandler(event) {
    event.preventDefault();
    const textAreaEl = document.querySelector('#commentFormText');
    const comment_text = textAreaEl.value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}



commentFormEl.addEventListener('submit', commentFormHandler);