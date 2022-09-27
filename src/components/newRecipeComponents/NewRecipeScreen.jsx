import React, {useState} from "react";
import {Formik} from "formik";
import axios from "axios";
import style from "./NewRecipe.module.css"


const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState();
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState();
  const addIngredient = () => {
    setIngredients(...ingredients, {name, quantity})
    setName("")
    setQuantity("")
  }

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
};

const onSubmit = (values) => {
  values.ingredients = ingredients;
    console.log(values)
    axios
    .post(`https://recipes.devmountain.com/recipes`, values)
}

  return (
    <section>
      <h1 className={style.recipeTitle}>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className={style.inputContainer}>
            <input 
              type="text" 
              placeholder="Name "
              value={values.recipeName}
              onChange={handleChange}
              name="recipeName"/>
            <input 
              type="text" 
              placeholder="Image URL"
              value={values.imageURL}
              onChange={handleChange}
              name="imageURL"/>
          </div>
          <div className={style.radioBtnContainer}>
            <input 
              type="radio"
              value="Cook"
              onChange={handleChange} 
              />
            <p>Cook</p>
            <input 
              type="radio" 
              value="Bake"
              onChange={handleChange}
              />
            <p>Bake</p>
            <input 
              type="radio" 
              value="Drink"
              onChange={handleChange}
              />
            <p>Drink</p>
          </div>
          <div className={style.inputContainer}>
            <input 
              type="text" 
              placeholder="Prep Time"
              value={values.prepTime}
              onChange={handleChange}
              name="prepTime"/>
            <input 
              type="text" 
              placeholder="Cook Time"
              value={values.cookTime}
              onChange={handleChange}
              name="cookTime"/>
            <input 
              type="text" 
              placeholder="Serves"
              value={values.serves}
              onChange={handleChange}
              name="serves"/>
          </div>
          <div className={style.inputContainer}>
            <input 
              type="text" 
              placeholder="Ingredient"
              />
            <input 
              type="text"
              placeholder="Quantity"
              />
          </div>
          <button
            className={style.recipeBtn}
            onClick={addIngredient}
          >
          Add Another
          </button>
          <textarea 
            placeholder="What are the instructions?"
            name="instructions" 
            value={values.instructions}
            rows="5"
            onChange={handleChange}
            
          />
          <button
            type="submit"
            className={style.instructionBtn}
            onSubmit={handleSubmit}>
            Save
          </button>
        </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
