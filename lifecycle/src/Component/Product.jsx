import React from "react";

function Product(props) {
  const products = props.pro;
  return (
    <div className="row center">
      {products.map((el) => (
        <div key={el._id} className="card">
          <img src={el.image} alt={el.name} />
          <div className="card-body">
            <h2>{el.name}</h2>
            <div className="price">Price : {el.price}</div>
          </div>
          <button
            onClick={() => {
              props.btn(el._id);
            }}
            className="Button"
          >
            Show Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default Product;
