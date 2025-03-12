async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); 
        tabledata(data);
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData(); 
function tabledata(data){
    const tableBody = document.getElementById('tbody');
     data.forEach((item,index) => {
        const row = document.createElement('tr');
        row.innerHTML =`
            <td>${item.userId}</td>
            <td>${item.id}</td>
            <td>${item.title}</td>`;
        tableBody.appendChild(row);
        
     });
}