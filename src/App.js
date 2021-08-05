import "./styles.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App() {
  const [productList, setProductList] = useState([]);
  const getProduct = async () => {
    try {
      const response = await axios.get(
        "https://6102d7aa79ed680017482359.mockapi.io/productlist"
      );
      if (response.data) {
        setProductList(response.data);
      }
    } catch (e) {
      console.log(`e`, e);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="App">
      {productList.map((product) => {
        return (
          <div className="container-fluid">
            <img
              src={product.prdImageUrl}
              alt="product"
              width="200"
              height="300"
            />
            <p1>{product.prdname}</p1>
            <p2>{product.prdPrice}</p2>
          </div>
        );
      })}
      <div className="wrap-product-list"></div>
    </div>
  );
}
