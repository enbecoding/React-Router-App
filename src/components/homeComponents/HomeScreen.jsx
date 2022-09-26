import React, { useEffect, useState } from "react";
import AdBanner from "./AdBanner";
import axios from "axios";
import RecipeSection from "./RecipeSection";

const HomeScreen = () => {
  const url = "https://recipes.devmountain.com";
  const [recipes, setRecipes] = useState([]);
  const getRecipes = () => {
    axios.get(`${url}/recipes`).then((res) => {
      setRecipes(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AdBanner />
      <RecipeSection recipes={recipes} />
    </div>
  );
};

export default HomeScreen;
