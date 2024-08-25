
import { useState } from 'react';
import useRecipeStore from './recipeStore';
import DeleteRecipeButton from "./DeleteRecipeButton"
import EditRecipeForm from "./EditRecipeForm"

const RecipeDetails = () => {
    const recipes = useRecipeStore(state => state.recipes);

    // return (

    //     <div key={recipeId}>
    //         <DeleteRecipeButton />
    //         <h1>{recipe.title}</h1>
    //         <p>{recipe.description}</p>
    //         {/* Render EditRecipeForm and DeleteRecipeButton here */}
    //         <EditRecipeForm />
    //     </div>
    // );

    console.log(recipes)

    // const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const [isEditing, setIsEditing] = useState(false);

    // const handleDelete = () => {
    //     deleteRecipe(recipe.id);
    // };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleClose = () => {
        setIsEditing(false);
    };

    return (
        <div>
            {recipes.map(recipe => (
                isEditing ? (
                    <div>
                        {/* recipe.id === recipeId */}
                        < EditRecipeForm recipe={recipe} onClose={handleClose} />
                        {/* <button onClick={handleEdit}>Edit</button> */}
                    </div>

                ) : (
                    <div>
                        <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                        <button onClick={handleEdit}>Edit</button>
                        {/* <button onClick={handleDelete}>Delete</button> */}
                        <DeleteRecipeButton />
                    </div>
                )
            ))}
        </div >
    );
};

export default RecipeDetails;
