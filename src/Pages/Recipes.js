import { PreviousSearches } from "../components/PreviousSearches";
import { RacipesCard } from "../components/RacipesCard";
const Recipes = () => {
  const recipes = [
    {
      title: "Arugula Salad",
      image: "img/gallery/img_10.jpg",
    },
    {
      title: "Sugi",
      image: "img/gallery/img_11.jpg",
    },
    {
      title: "Chiken pan p",
      image: "img/gallery/img_12.jpg",
    },
    {
      title: "Fish Supreme",
      image: "img/gallery/img_13.jpg",
    },
    {
      title: "Wight Rice",
      image: "img/gallery/img_14.jpg",
    },
    {
      title: "Sultani Kabab",
      image: "img/gallery/img_1.jpg",
    },
  ].sort(() => Math.random() - 0.5);
  return (
    <div>
      <PreviousSearches />
      <div className="recipes-container">
        {/* <RacipesCard/> */}
        {recipes.map((recipe, index) => (
          <RacipesCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
