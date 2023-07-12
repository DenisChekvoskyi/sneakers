import logo from "../assets/img/icons/logo.png";
import cart from "../assets/img/icons/cart.svg";
import favorite from "../assets/img/icons/favorite.svg";
import admin from "../assets/img/icons/admin.svg";

function Header() {
  return (
    <header className="header">
      <div className="main-header">
        <a href="#">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <div className="main-header-info">
          <h1 className="main-header-info-header">SNEAKERS</h1>
          <h3 className="main-header-info-description">The shop best sneakers</h3>
        </div>
      </div>
      <nav className="nav-header">
        <ul>
          <li className="cart">
            <img src={cart} alt="cart" />
            <span>1205 UAH</span>
          </li>
          <li>
            <img src={favorite} alt="favorite" />
          </li>
          <li>
            <img src={admin} alt="admin" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
