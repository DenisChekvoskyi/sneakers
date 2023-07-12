import "./App.css";

import search from "./assets/img/icons/search.svg";

import Header from "./components/Header";
import Card from "./components/Card";
import Cart from "./components/Cart";

import img1 from "./assets/img/sneakers1.jpg";
import img2 from "./assets/img/sneakers2.jpg";
import img3 from "./assets/img/sneakers3.jpg";
import img4 from "./assets/img/sneakers4.jpg";

const dataBase = [
  {
    img: img1,
    title: "Men sneakers Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    img: img2,
    title: "Men sneakers Nike Air Max 270",
    price: "15 200",
  },
  {
    img: img3,
    title: "Men sneakers Nike Blazer Mid Suede",
    price: "8 500",
  },
  {
    img: img4,
    title: "Sneakers Puma X Aka Boku Future Rider",
    price: "8 999",
  },
];

function App() {
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
              <img src={search} alt="search" />
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className="cards">
            {dataBase.map(({ img, title, price }, i) => (
              <Card key={i} img={img} title={title} price={price} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
