import React, { useState } from "react";
import styles from "./Home.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import RecipeCard from "../recipeComponents/RecipeCard";

const RecipeSection = ({ recipes }) => {
  const [search, setSearch] = useState("");
  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />;
    });

  return (
    <div className={styles.container}>
      <span>
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Recipe"
        />
      </span>
      <div className={styles.recipeContainer}>
        {recipeDisplay ? recipeDisplay : <h3>Recipes Unavailable</h3>}
      </div>
    </div>
  );
};

export default RecipeSection;
