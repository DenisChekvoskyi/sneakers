import Card from "./Card";

function Favorites({ items = [], closeFavorite }) {
  return (
    <div>
      <div className="favorite-title">
        <img onClick={closeFavorite} src="img/icons/back.svg" alt="back" />
        <h3>My favorites</h3>
      </div>

      <div className="cards">
        {items.map(({ img, title, price, id }, i) => (
          <Card
            key={i}
            img={img}
            title={title}
            price={price}
            addToCart={() => {
              setAddToCart((prev) => [...prev, { img, title, price, id }]);
            }}
            AddToFavorites={() => {
              setAddToFavorites((prev) => [...prev, { img, title, price, id }]);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
