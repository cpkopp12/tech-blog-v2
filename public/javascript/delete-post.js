const deleteBtn = document.querySelector("#deletePostBtn");

async function deleteBtnHandler (event) {
    event.preventDefault();
    //get id from route
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    //fetch
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });
    //check response
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
};

deleteBtn.addEventListener('click', deleteBtnHandler);