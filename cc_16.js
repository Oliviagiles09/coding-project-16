// Task 2
function fetchProductsThen() {
  fetch('https://www.course-api.com/javascript-store-products')
  .then(response => response.json())
  .then(products => {
    console.log('Products fetched using .then():');
    products.forEach(product => {
      console.log(product.name);
    });
  })
  .catch(error => {
    handleError(error);
  });
}
// Task 3 
async function fetchProductsAsync() {
  try {
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    const products = await response.json();
    console.log('Products fetched using async/await:');
    displayProducts(products);
  } catch (error) {
   handleError(error);
  }
}
