function filterProductByCategory (productsArray) {
    return function (category) {
        return productsArray.filter (product => product.category === category)
    }
}


const products = [
    { name: 'shirt', category: 'clothing' },
    { name: 'Paint', category: 'clothing' },
    { name: 'Hat', category: 'Accessories' },
    { name: 'Sunglasses', category: 'Accessories' },
    
  ];

  const filteredProduct = filterProductByCategory(products)

  console.log(filteredProduct('clothing'));
  