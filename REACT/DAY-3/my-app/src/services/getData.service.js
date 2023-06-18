import axios from "axios";
async function getData (response) {
    const url = new URL(response.request.url);
       console.log(url);
    const data = await axios.get('https://jsonplaceholder.typicode.com' + url.pathname + '?_start=0&_limit=10')  
                                  .catch(error => console.log(error))
      return data.data
}

export default getData;
