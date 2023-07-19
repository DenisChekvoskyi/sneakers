function Header({ toggleCart, toggleFavorite, totalSum, closeFavorite }) {
  return (
    <header className="header">
      <div onClick={closeFavorite} className="main-header">
        <a href="#">
          <img className="logo" src="img/icons/logo.png" alt="logo" />
        </a>
        <div className="main-header-info">
          <h1 className="main-header-info-header">SNEAKERS</h1>
          <h3 className="main-header-info-description">The shop best sneakers</h3>
        </div>
      </div>
      <nav className="nav-header">
        <ul>
          <li onClick={toggleCart} className="cart">
            <img src="img/icons/cart.svg" alt="cart" />
            <span>{totalSum} UAH</span>
          </li>
          <li>
            <img onClick={toggleFavorite} src="img/icons/favorite.svg" alt="favorite" />
          </li>
          <li>
            <img src="img/icons/admin.svg" alt="admin" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
