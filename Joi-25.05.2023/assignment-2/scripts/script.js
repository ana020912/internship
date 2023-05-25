const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    // prevent the default behavior of refreshing the page
    e.preventDefault(); 
    const formData = new FormData(form); // every form field must have the "name" attriute
                                         // in order to be included in the FormData object
                                         // "name" attribute = key (item[0])
    for (item of formData) {
        console.log(item);  //item - array with two elements: item[0] = key, item[1] = value
    }
    }
)