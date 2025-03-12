fetch('https://jsonplaceholder.typicode.com/posts')
   .then(response => response.json())
   .then(data => {
        const event = new CustomEvent("getData", { detail: data });
        document.dispatchEvent(event);
   })
   .catch(error=> console.log("error",error));


