import { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response1 = await fetch(
        "https://fakestoreapi.com/products/category/men's clothing"
      );
      const data1 = await response1.json();
      const response2 = await fetch(
        "https://fakestoreapi.com/products/category/women's clothing"
      );
      const data2 = await response2.json();
      const combinedData = [...data1, ...data2];

      setProducts(combinedData);
    };
    fetchProducts();
  }, []);

  return (
    <div className="products">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <p>{product.price} USD</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
