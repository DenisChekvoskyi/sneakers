import add from "../assets/img/icons/add.svg";
import likeOn from "../assets/img/icons/likeOn.svg";
import likeOff from "../assets/img/icons/likeOff.png";

function Card({ img, title, price }) {
  return (
    <div className="card">
      <div className="favorite">
        <img style={{ display: "none " }} src={likeOn} alt="likeOn" />
        <img src={likeOff} alt="likeOff" />
      </div>
      <img className="sneakers-img" src={img} alt="sneakers" />
      <h5 className="card-name">{title}</h5>
      <div className="card-footer">
        <div>
          <p className="card-name-prace">price:</p>
          <div className="card-prace">{price} UAH</div>
        </div>
        <img className="card-add" src={add} alt="add" />
      </div>
    </div>
  );
}

export default Card;
