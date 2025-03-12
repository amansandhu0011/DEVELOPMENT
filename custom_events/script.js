document.addEventListener("getData", (event) => {
    const data = event.detail; 
    tabledata(data); 
});

function tabledata(data) {
    const tableBody = document.getElementById("tbody");

    data.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.userId}</td>
            <td>${item.id}</td>
            <td>${item.title}</td>
        `;
        tableBody.appendChild(row);
    });
}
