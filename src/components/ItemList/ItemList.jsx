import React from "react";
import Item from "./Item"

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
};

export default ItemList;