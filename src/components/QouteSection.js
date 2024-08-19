import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const QouteSection = () => {
  return (
    <div className="section quote">
      <p className="qoute-text">
        <FontAwesomeIcon icon={faQuoteLeft} />
        Restaurants in Sharjah, Sharjah Restaurants, Industrial Area
        restaurants, Best Industrial Area restaurants, Industrial Area & Around
        restaurants, Casual Dining in Sharjah, Casual Dining near me, Casual
        Dining in Industrial Area & Around, Casual Dining in Industrial Area, in
        Sharjah,
      </p>
      <p className="qoute-auther">Awais Mangat</p>
    </div>
  );
};

export default QouteSection;
