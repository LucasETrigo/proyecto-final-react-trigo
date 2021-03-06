import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  function handleAdd() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function handleSubstract() {
    if (count > 0) {
      setCount(count - 1);
    }
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
