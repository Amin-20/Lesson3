import React, { Component } from "react";
import { products } from "./data";

const Products = products.map((product) => ProductItemFunc({ product }));

function ProductItemFunc({ product }) {
  const mainDivStyle = {
    display: "inline-block",
    margin: "10px",
   
  };

  const sectionStyle = {
    margin: "15px",
    marginTop: "5px",
    display: "inline-block",
  };

  return (
    <div style={mainDivStyle} >
      <div style={{backgroundColor:"#2FB7FF"}} id="maincard" className="card">
        <img src={product.productImage} alt="photo" className="sneaaker-img" />
        <isProductExpired
          expiredDate={product.productExpiredDate}
          image={product.productImage}
        ></isProductExpired>
        <h1 className="title sizes-box">
          <section style={sectionStyle}>
            <b style={{ fontSize: "35px",marginLeft:"50px" }}>{product.productName}</b>
            <br></br>
            <b style={{ fontSize: "15px", marginLeft: "40px" }}>
              Expired Time : {product.productExpiredDate.toDateString()}
            </b>
          </section>
        </h1>
        <p style={{ marginTop: "-20px", marginBottom: "20px" }}>
          {product.productDescription}
        </p>
        <b>Discount : {product.productDiscount}%</b>
        <div className="button-box">
          <button style={{ marginBottom: "-20px",backgroundColor:"#00516D",color:"white" }} className="purchase">
            Price : {product.productPirce}$
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
