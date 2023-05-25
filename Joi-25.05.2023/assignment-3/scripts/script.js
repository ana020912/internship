const select = document.querySelector('select');
select.addEventListener('change', () => {
      const id = select.value;
      console.log(id);
    try {
        const request = new XMLHttpRequest();
        // response handler
        request.onreadystatechange = () => {
                if (request.readyState === XMLHttpRequest.DONE) {
                    if (request.status === 200) {
                        console.log("Response!");
                    } else {
                        console.log("Error! Didn't get the response!");
                    }
                } else {
                    console.log("Error at request");
                }
        }
        // make server request
        request.open("POST", 'https://jsonplaceholder.typicode.com/todos/' + id, true);
        request.send();
    } catch (error) {
        console.log(error);
    }
})