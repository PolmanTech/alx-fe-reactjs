
import React, {useState} from 'react'
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({recipe, onClose}) => {

    const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      id: recipe ? recipe.id : Date.now(),
      title,
      description,
    };

    if (recipe) {
      updateRecipe(newRecipe);
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
      </div>
      <button type="submit">{!recipe ? 'Update' : 'Add'} Recipe</button>
    </form>
  );
}

export default EditRecipeForm;
