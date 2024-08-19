import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const ChiefCrad = ({ chief }) => {
  return (
    <div className="chief-card">
      <img src={chief.img} alt="" />
      <div className="chief-card-info">
        <h1 className="chief-card-name">{chief.name}</h1>
        <p className="chief-recipe-count">
          Recipes: <b>{chief.recipesCount}</b>
        </p>
        <p className="chief-cuisine">
          Cuisine: <b>{chief.cuisine}</b>
        </p>
        <p className="chief-icon">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faWhatsapp} />
        </p>
      </div>
    </div>
  );
};

export default ChiefCrad;
