import "./App.css";

import Header from "./components/Header";
import Card from "./components/Card";
import Cart from "./components/Cart";

import { useEffect, useState } from "react";

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [addToCart, setAddToCart] = useState([]);

  const toggleCart = () => setIsOpenCart((prev) => !prev);

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
    fetch(
      "https://gist.githubusercontent.com/DenisChekvoskyi/977e22b660fc3cf8693d1fb4c92ab463/raw/5e48b74dc6617a29250ecbd0ac68c8c90a7a2150/sneakers.json"
    )
      .then((res) => res.json())
      .then((data) => setSneakers(data));
  }, []);

  return (
    <div>
      {isOpenCart && <Cart items={addToCart} toggleCart={toggleCart} totalSum={totalSum} />}
      <div className="container">
        <Header toggleCart={toggleCart} totalSum={totalSum} />
        <div className="devider"></div>
        <main>
          <div className="main-bar">
            <h3>All sneakers</h3>
            <div className="search">
              <img src="img/icons/search.svg" alt="search" />
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className="cards">
            {sneakers.map(({ img, title, price }, i) => (
              <Card
                key={i}
                img={img}
                title={title}
                price={price}
                addToCart={() => {
                  setAddToCart((prev) => [...prev, { img, title, price }]);
                }}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
