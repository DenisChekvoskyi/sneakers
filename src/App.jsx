import axios from "axios";

import "./App.css";

import Header from "./components/Header";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";

import { useEffect, useState } from "react";

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenFavorite, setIsOpenFavorite] = useState(false);
  const [addToCart, setAddToCart] = useState([]);
  const [addToFavorites, setAddToFavorites] = useState([]);
  const [search, setSearch] = useState("");

  const onAddToCart = (img, title, price, id) => {
    setAddToCart((prev) => [...prev, { img, title, price, id }]);
  };

  const onAddToFavorite = (img, title, price, id) => {
    setAddToFavorites((prev) => [...prev, { img, title, price, id }]);
  };

  const deliteFromCart = (id) => {
    setAddToCart((prev) => prev.filter((item) => item.id !== id));
  };

  const searchArrResult = sneakers.filter((item) =>
    item.title.toLowerCase().includes(search.toLocaleLowerCase())
  );

  const onChangeInputValue = (e) => {
    setSearch(e.target.value);
  };

  const toggleCart = () => setIsOpenCart((prev) => !prev);
  const toggleFavorite = () => setIsOpenFavorite((prev) => !prev);
  const closeFavorite = () => setIsOpenFavorite((prev) => (prev = false));

  const checkToSum = () => {
    let sum = 0;
    addToCart.forEach((item) => {
      const priceWithoutSpaces = item.price.replace(/\s/g, "");
      const priceAsNumber = parseInt(priceWithoutSpaces);
      sum += priceAsNumber;
    });
    return sum;
  };

  const totalSum = checkToSum();

  useEffect(() => {
    axios.get("https://642844a446fd35eb7c4f363d.mockapi.io/sneakers").then((data) => {
      setSneakers(data.data);
    });
  }, []);

  return (
    <div>
      {isOpenCart && (
        <Cart
          items={addToCart}
          toggleCart={toggleCart}
          totalSum={totalSum}
          deliteFromCart={deliteFromCart}
        />
      )}
      <div className="container">
        <Header
          toggleCart={toggleCart}
          toggleFavorite={toggleFavorite}
          totalSum={totalSum}
          closeFavorite={closeFavorite}
        />

        <div className="devider"></div>
        {isOpenFavorite ? (
          <Favorites items={addToFavorites} closeFavorite={closeFavorite} />
        ) : (
          <main>
            <div className="main-bar">
              <h3>{search ? `Search...${search}` : "All sneakers"}</h3>
              <div className="search">
                <img src="img/icons/search.svg" alt="search" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={onChangeInputValue}
                />
                {search && (
                  <img
                    onClick={() => setSearch((prev) => (prev = ""))}
                    className="close"
                    src="img/icons/close.svg"
                    alt="close"
                  />
                )}
              </div>
            </div>
            <div className="cards">
              {searchArrResult.length > 0 ? (
                searchArrResult.map(({ img, title, price, id }) => (
                  <Card
                    key={id}
                    img={img}
                    title={title}
                    price={price}
                    addToCart={() => onAddToCart(img, title, price, id)}
                    AddToFavorites={() => onAddToFavorite(img, title, price, id)}
                  />
                ))
              ) : (
                <h2>The search has not given any results</h2>
              )}
            </div>
          </main>
        )}
        {/* <Favorites items={addToFavorites} />
        <main>
          <div className="main-bar">
            <h3>{search ? `Search...${search}` : "All sneakers"}</h3>
            <div className="search">
              <img src="img/icons/search.svg" alt="search" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={onChangeInputValue}
              />
              {search && (
                <img
                  onClick={() => setSearch((prev) => (prev = ""))}
                  className="close"
                  src="img/icons/close.svg"
                  alt="close"
                />
              )}
            </div>
          </div>
          <div className="cards">
            {searchArrResult.length > 0 ? (
              searchArrResult.map(({ img, title, price, id }) => (
                <Card
                  key={id}
                  img={img}
                  title={title}
                  price={price}
                  addToCart={() => onAddToCart(img, title, price, id)}
                  AddToFavorites={() => onAddToFavorite(img, title, price, id)}
                />
              ))
            ) : (
              <h2>The search has not given any results</h2>
            )}
          </div>
        </main> */}
      </div>
    </div>
  );
}

export default App;
