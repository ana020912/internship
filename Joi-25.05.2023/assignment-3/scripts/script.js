const select = document.querySelector('select');
select.addEventListener('change', () => {
      const id = select.value;
    //   console.log(id);
    try {
        const request = new XMLHttpRequest();
        // response handler
        request.onreadystatechange = () => {
                
                if (request.readyState === XMLHttpRequest.DONE) {
                    if (request.status === 200) {
                           const response = JSON.parse(request.response);
                           const element =  document.createElement('div');
                           const title = document.createTextNode(response.title);
                           element.appendChild(title);
                           document.body.appendChild(element);
                        
                    } else {
                        console.log("Error! Didn't get the response!");
                    }
                }
        }
        // make server request
        request.open("GET", 'https://jsonplaceholder.typicode.com/todos/' + id, true);
        request.send();
    } catch (error) {
        // console.log(error);
    }
})