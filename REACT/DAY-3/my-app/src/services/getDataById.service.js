import axios from "axios";

async function getDataById (response) {

     const url = new URL(response.request.url);
         console.log(url);
        const data = await axios.get('https://jsonplaceholder.typicode.com' + url.pathname) 
                                .catch(error => console.log(error))
          return data.data
    }
  
    export default getDataById;
