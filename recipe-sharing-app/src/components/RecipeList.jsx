
import useRecipeStore from "./recipeStore"
import DeleteRecipeButton from "./DeleteRecipeButton";
// import RecipeDetails from "./RecipeDetails";

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  // console.log(recipes)
  return (
    <div>
      {recipes.map(recipe => (
        <>
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
          {/* <DeleteRecipeButton /> */}
        </>
      ))}

    </div>
  );
};

export default RecipeList;
