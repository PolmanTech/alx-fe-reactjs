
import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import RecipeList from './components/RecipeList'

function App() {

  return (
    <>
      <RecipeList />
      <AddRecipeForm />
      <RecipeDetails />
    </>
  )
}

export default App
