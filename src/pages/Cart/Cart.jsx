import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../Redux/CartRedux/CartAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Cart.css";
import Footer from "../Footer/Footer";
function Cart() {
  const cartItem = useSelector((state) => state.cart) || [];
  const dispatch = useDispatch();

  const handleRemoveCart = () => {
    dispatch(removeFromCart());
  };

  let totleBill = 0;

  // const handleIncrement = (productId) => {
  //   dispatch(incrementQuantity(productId));
  // };
  // const handleDecrement = (productId) => {
  //   dispatch(decrementQuantity(productId));
  // };
  return (
    <>
      {cartItem.length === 0 ? (
        <h1
          style={{
            textAlign: "center",
            marginTop: "10%",
            fontSize: "2rem",
            color: "#747BFF",
            marginBottom:"9%",
          }}
        >
          Your cart is empty.
        </h1>
      ) : (
        <div>
          <h1 className="cart-heading">Cart items</h1>
          <div className="cart-title">
            <h3>PRODUCT</h3>
            <h3>UNIT PRICE</h3>
            <h3>QUANTITY</h3>
            <h3>AMOUNT</h3>
          </div>
          {cartItem.map((p, index) => {
            if (p.quantities > 0) {
              const totalQ = p.item.price * p.quantities;

              totleBill += totalQ;

              return (
                <div key={index}>
                  <div className="cart-item">
                      <img src={p.item.image} className="cart-img"/>
                          <div className="cart-price">
                      <h3>${p.item.price}</h3>
                          </div>

                      <div className="qty-btn">
                        {/* <button onClick={() => handleDecrement(p.item.id)} className="cart-btn">
                          -
                        </button> */}
                        <h3>{p.quantities}</h3>
                        {/* <button onClick={() => handleIncrement(p.item.id)}className="cart-btn">
                          +
                        </button> */}
                      </div>
                      <h3 className="cart-amount">${totalQ}</h3>
                    <div >
                      <FontAwesomeIcon
                        icon={faXmarkCircle}
                        className="cart-icon"
                        onClick={handleRemoveCart}
                        title="Remove Item"
                        
                      />
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
          <h3 className="cart-bill">
            <b style={{ color: "#406BD0", fontSize: "22px" }}>Total Bill:</b>$ {" "}
            {totleBill}
            <Link to={"/checkout"}>
              <button>Proceed To Checkout</button>
            </Link>
          </h3>
        </div>
      )}
      <Footer/>
    </>
  );
}

export default Cart;
