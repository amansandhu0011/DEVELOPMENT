document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const formData = new FormData(event.target); // Use 'this' to reference the form
    let getUserId = formData.get("userId"); 
    let getTitle = formData.get("title");
    let getBody = formData.get("body");

    createPost(getUserId, getTitle, getBody);
    event.target.reset();
});

async function createPost(getUserId, getTitle, getBody) {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const postData = {
        title: getTitle,
        body: getBody,
        userId: getUserId
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        tabledata(result);
        console.log("Success:", result);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

function tabledata(data) {
    const tableBody = document.getElementById('tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${data.title}</td>
        <td>${data.body}</td>
        <td>${data.userId}</td>
    `;

    tableBody.appendChild(row);
}
