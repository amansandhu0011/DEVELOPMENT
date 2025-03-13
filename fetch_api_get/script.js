fetch('https://jsonplaceholder.typicode.com/posts')
   .then(response => response.json())
   .then(data => {
        tabledata(data);
        console.log(data);
   })
   .catch(error=> console.log("error",error));

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