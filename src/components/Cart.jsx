import { useState } from "react";

function Cart() {
  let [isOpenCart, useIsOpenCart] = useState(true);

  const openCart = () => {
    useIsOpenCart((open) => (!open ? (isOpenCart = true) : (isOpenCart = false)));
    console.log(isOpenCart);
  };

  return (
    <div style={isOpenCart ? { display: "flex" } : { display: "none" }} className="overlay">
      <div className="main-cart">
        <div className="main-vart-nav">
          <h5 className="main-cart-header">Корзина</h5>
          <img
            onClick={openCart}
            className="main-cart-close"
            src="/public/img/icons/close.svg"
            alt="close"
          />
        </div>
        <div className="main-cart-items">
          <div className="main-cart-item">
            <img className="photo" src="/public/img/sneakers.png" alt="sneakers" />
            <div className="main-cart-item-info">
              <h5 className="card-name">Мужские Кроссовки Nike Air Max 270</h5>
              <div className="card-prace">12 999 грн.</div>
            </div>
            <img className="close" src="/public/img/icons/close.svg" alt="close" />
          </div>
        </div>

        <div className="main-cart-price">
          <div className="total">
            <div className="total-header">Итого:</div>
            <div className="divider"></div>
            <div className="price">21 498 грн.</div>
          </div>
          <div className="tax">
            <div className="total-header">Налог 5%: </div>
            <div className="divider"></div>
            <div className="price">1 498 грн.</div>
          </div>
        </div>
        <button className="main-cart-btn">
          Оформить заказ
          <img className="arrow" src="/public/img/icons/arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Cart;
