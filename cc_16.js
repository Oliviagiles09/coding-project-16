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
// Task 4 
function displayProducts(products) {
  const container = document.getElementById('product-container');
  container.innerHTML = '';  // Clear previous content

  products.slice(0, 5).forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const productName = document.createElement('h2');
    productName.textContent = product.name;

    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price}`;

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;

    productElement.appendChild(productName);
    productElement.appendChild(productPrice);
    productElement.appendChild(productImage);
    container.appendChild(productElement);
  });
}
