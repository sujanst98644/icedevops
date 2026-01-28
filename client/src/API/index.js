export const getAllProducts = () => {
    return fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            // Do something with the data
            console.log(data);
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });
};
