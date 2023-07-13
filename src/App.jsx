import "./App.css";

import Header from "./components/Header";
import Card from "./components/Card";
import Cart from "./components/Cart";

import { useEffect, useState } from "react";

// const dataBase = [
//   {
//     img: "img1",
//     title: "Men sneakers Nike Blazer Mid Suede",
//     price: "12 999",
//   },
//   {
//     img: "img2",
//     title: "Men sneakers Nike Air Max 270",
//     price: "15 200",
//   },
//   {
//     img: "img3",
//     title: "Men sneakers Nike Blazer Mid Suede",
//     price: "8 500",
//   },
//   {
//     img: "img4",
//     title: "Sneakers Puma X Aka Boku Future Rider",
//     price: "8 999",
//   },
// ];

function App() {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/DenisChekvoskyi/977e22b660fc3cf8693d1fb4c92ab463/raw/5e48b74dc6617a29250ecbd0ac68c8c90a7a2150/sneakers.json"
    )
      .then((res) => res.json())
      .then((data) => setSneakers(data));
  }, []);

  return (
    <div>
      <Cart />
      <div className="container">
        <Header />
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
              <Card key={i} img={img} title={title} price={price} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
