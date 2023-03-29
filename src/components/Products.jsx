import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <div className="products" id="products">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <p>{product.price} USD</p>
          <Link to={`/product${product.id}`}>
            <button>Add to Cart</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
