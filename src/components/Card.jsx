import { useState } from "react";

function Card({ img, title, price, addToCart }) {
  const [isfacorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const toggleIsFavorite = () => {
    setIsFavorite((prev) => !prev);
  };
  const toggleIsAdded = () => {
    setIsAdded((prev) => !prev);
    addToCart();
  };

  return (
    <div className="card">
      <div className="favorite">
        <img
          onClick={toggleIsFavorite}
          src={isfacorite ? "img/icons/likeOn.svg" : "img/icons/likeOff.png"}
          alt="favorite"
        />
      </div>
      <img className="sneakers-img" src={img} alt="sneakers" />
      <h5 className="card-name">{title}</h5>
      <div className="card-footer">
        <div>
          <p className="card-name-prace">price:</p>
          <div className="card-prace">{price} UAH</div>
        </div>
        <img
          onClick={toggleIsAdded}
          className="card-add"
          src={isAdded ? "img/icons/addOk.svg" : "img/icons/addPlus.svg"}
          alt="add"
        />
      </div>
    </div>
  );
}

export default Card;
