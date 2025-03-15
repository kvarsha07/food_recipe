import React from "react";
import { Link } from "react-router-dom";

const Mealcard = ({ details }) => {
  return (
    <div className="meals">
      {details &&
        details.map((curItem) => (
          <div key={curItem.idMeal}>
            <img src={curItem.strMealThumb} alt={curItem.strMeal} />
            <p>{curItem.strMeal}</p>
            {curItem.idMeal && (
              <Link to={`/meal/${curItem.idMeal}`}>
                <button>Recipe</button>
              </Link>
            )}
          </div>
        ))}
    </div>
  );
};

export default Mealcard;
