const products = getAvailableProducts();

const productsList = document.querySelector("#products-list");


function renderProducts(products){
  productsList.innerHTML = "";

  for(const product of products){
    const li = document.createElement("li");

    li.innerHTML = 
    `
      <h3>${product.title}</h3>
      <p>Price: $${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;

    productsList.appendChild(li);}
}
renderProducts(products);

