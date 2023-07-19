function Cart({ toggleCart, items = [], totalSum, deliteFromCart }) {
  return (
    <div className="overlay">
      <div className="main-cart">
        <div className="main-vart-nav">
          <h5 className="main-cart-header">Cart</h5>
          <img
            onClick={toggleCart}
            className="main-cart-close"
            src="/img/icons/close.svg"
            alt="close"
          />
        </div>
        {items.length > 0 ? (
          <div className="main-cart-toAdd">
            <div className="main-cart-items">
              {items.map((obj, i) => (
                <div key={i} className="main-cart-item">
                  <img className="photo" src={obj.img} alt="sneakers" />
                  <div className="main-cart-item-info">
                    <h5 className="card-name">{obj.title}</h5>
                    <div className="card-prace">{obj.price} UAH</div>
                  </div>
                  <img
                    onClick={() => deliteFromCart(obj.id)}
                    className="close"
                    src="/img/icons/close.svg"
                    alt="close"
                  />
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
        ) : (
          <div className="main-cart-clear">
            <img src="img/box.png" alt="box" />
            <h3>Cart is empty</h3>
            <p>Add at least one pair of sneakers to place an order.</p>
            <button onClick={toggleCart} className="main-cart-btn">
              <img src="img/icons/arrowBack.svg" alt="arrow" />
              come back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
