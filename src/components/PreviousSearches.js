import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export const PreviousSearches = () => {
  const Searches = [
    "pizza",
    "burger",
    "cokies",
    "beryni",
    "ice creame",
    "soup",
  ];
  return (
    <div className="previous-serches section">
      <h1>Preivous Searches</h1>
      <div className="previous-serches-container">
        {Searches.map((search, index) => (
          <div
            key={index}
            style={{ animationDelay: index * 0.1 + "s" }}
            className="search-item"
          >
            {search}
          </div>
        ))}
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search ...." />
        <button className="btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};
