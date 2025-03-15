import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";


const Mealinfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
        );
        const jsonData = await response.json();
        if (jsonData.meals) {
          setInfo(jsonData.meals[0]);
        }
      } catch (error) {
        console.error("Error fetching meal data:", error);
      }
    };

    if (mealid) {
      getInfo();
    }
  }, [mealid]);

  return (
    <div className="mealinfo-container">
      {info ? (
        <>
          <div className="mealinfo-image">
            <img src={info.strMealThumb} alt={info.strMeal} />
          </div>
          <div className="mealinfo-content">
            <h1>{info.strMeal}</h1>
            <button>{info.strMeal}</button>
            <h3>Instructions</h3>
            <p>{info.strInstructions}</p>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Mealinfo;
