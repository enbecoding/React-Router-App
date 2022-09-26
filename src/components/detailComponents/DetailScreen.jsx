import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailBanner from "./DetailBanner";
import styles from "./Details.module.css";

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const url = "https://recipes.devmountain.com";
  console.log(recipe);
  
  useEffect(() => {
    axios
      .get(`${url}/recipes/${id}`)
      .then((res) => {
      setRecipe(res.data);
    });
  }, []);

  return (
    <section>
      <DetailBanner title={recipe.recipe_name} image={recipe.image_url} />
      <div className={styles.detailContainer}>
        <div className={styles.leftContainer}>
          <h3>Recipe</h3>
          <p>Prep Time: {recipe.prep_time}</p>
          <p>Cook Time: {recipe.cook_time}</p>
          <p>Serves: {recipe.serves}</p>
          <br></br>
          <h3>Ingredients</h3>
          {recipe.ingredients &&
            recipe.ingredients.map((ing, index) => {
              return (
                <h4>
                  {ing.quantity} {ing.ingredient}
                </h4>
              );
            })}
        </div>
        <div className={styles.rightContainer}>
          <h3>Instruction</h3>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
