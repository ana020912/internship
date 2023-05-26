const select = document.querySelector('select');
const element =  document.createElement('p');
document.body.appendChild(element);
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
                           element.innerHTML = "";
                           const title = document.createTextNode(response.title);
                           element.appendChild(title);
                    } else {
                        console.log("Error! Didn't get the response!");
                    }
                }
            } 
        // make server request
        request.open("GET", 'https://jsonplaceholder.typicode.com/todos/' + id, true);
        request.send();
    } catch (error) {
        console.log(error);
    }
})
