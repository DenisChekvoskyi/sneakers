function Cart({ toggleCart, items = [], totalSum }) {
  return (
    <div className="overlay">
      <div className="main-cart">
        <div className="main-vart-nav">
          <h5 className="main-cart-header">Cart</h5>
          <img
            onClick={toggleCart}
            className="main-cart-close"
            src="/public/img/icons/close.svg"
            alt="close"
          />
        </div>
        <div className="main-cart-items">
          {items.map((obj, i) => (
            <div key={i} className="main-cart-item">
              <img className="photo" src={obj.img} alt="sneakers" />
              <div className="main-cart-item-info">
                <h5 className="card-name">{obj.title}</h5>
                <div className="card-prace">{obj.price} UAH</div>
              </div>
              <img className="close" src="/img/icons/close.svg" alt="close" />
            </div>
          ))}
        </div>

        <div className="main-cart-price">
          <div className="total">
            <div className="total-header">Total:</div>
            <div className="divider"></div>
            <div className="price">{totalSum} UAH</div>
          </div>
          <div className="tax">
            <div className="total-header">Tax 5%: </div>
            <div className="divider"></div>
            <div className="price">{(totalSum * 5) / 100} UAH</div>
          </div>
        </div>
        <button className="main-cart-btn">
          Checkout
          <img className="arrow" src="/img/icons/arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Cart;
