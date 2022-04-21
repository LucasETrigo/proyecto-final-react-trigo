import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount() {
  const [count, setCount] = useState(1);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleSubstract() {
    setCount(count - 1);
  }

  return (
    <div className="btnDiv">
      <h2>Comprar NFT</h2>
      <div>
        <button onClick={handleSubstract}>-</button>
        <span> {count} </span>
        <button onClick={handleAdd}>+</button>
      </div>
      <div>
        <button>Agregar Al Carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;
