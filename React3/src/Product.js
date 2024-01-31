import React, { Component } from "react";
import { products } from "./data";

import { isProductExpired } from "./Utils";
const Products = products.map((product) => ProductItemFunc({ product }));

function ProductItemFunc({ product }) {
  return (
    <div style={{ display: "inline-block", margin: "50px" }}>
      <div id="maincard" className="card">
      <img src={product.productImage} alt="photo" className="sneaaker-img" />
        <isProductExpired expiredDate={product.productExpiredDate} image="{product.productImage}"></isProductExpired>
        <h1 className="title sizes-box">
          <section
            style={{
              margin: "15px",
              marginTop: "-5px",
              display: "inline-block",
            }}
          >
            <b style={{ fontSize: "30px" }}>{product.productName}</b>
            <br></br>
            <b style={{ fontSize: "13px", marginLeft: "3px" }}>
              Expired Time : {product.productExpiredDate.toDateString()}
            </b>
          </section>
        </h1>
        <p style={{ marginTop: "-20px", marginBottom: "20px" }}>
          {product.productDescription}
        </p>
        <b
            >
              Discount : {product.productDiscount}%
            </b>
        <div className="button-box">
          <button style={{ marginBottom: "50px" }} className="purchase">
            Price :  {product.productPirce}$
          </button>
        </div>
      </div>
    </div>
  );
}

export default class Product extends Component {
  render() {
    return <div>{Products}</div>;
  }
}