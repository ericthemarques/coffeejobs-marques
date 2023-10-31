import React from "react";
import "./Items.css"

const Item = ({ item }) => {
  return (
  <div className="item-box">
    <div className="Item">
      <h3>{item.name}</h3>
      <p>Preço: R${item.price.toFixed(2)}</p>
      <p>Descrição: {item.description}</p>
    </div>
  </div>
  );
};

export default Item;