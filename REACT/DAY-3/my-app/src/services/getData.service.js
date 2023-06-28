async function getData (response) {

    const url = new URL(response.request.url);

       console.log(url);

      const data = await axios.get('https://jsonplaceholder.typicode.com' + url.pathname)  //extract in a service.js

                                  .catch(error => console.log(error))

      return data.data

}

export default getData;