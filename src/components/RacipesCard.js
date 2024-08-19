import { CustomImage } from "./CustomImage";
export const RacipesCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.image} pt="65%" />
      <div className="recipes-card-info">
        <p className="recipes-title"> {recipe.title}</p>
        <p className="recipes-description">
          سلطة الروبيان المشوي مع الخس و الذرة الحلوة و الافوكادو مع عصير
          الليمون و زيت الزيتون 😋 .
        </p>
        <a href="#!" className="view-btn">
          {" "}
          VIEW RECIPE
        </a>
      </div>
    </div>
  );
};
