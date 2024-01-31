import React from "react";

export function isProductExpired({ expiredDate, image }) {
  var date = Date.now();
  if (expiredDate < date) {
    return (
        <img
          style={{ marginBottom: "1px", marginTop: "-280px",rotate:"-30deg" }}
          src="https://cdn.theatlantic.com/media/mt/food/Expired-SS-Post.jpg"
          alt="asus.jpg"
          className="sneaker-img"
        />
    );
  }
  return null;
}