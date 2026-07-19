import { useState } from 'react'
import { Link } from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'

const SAVED_KEY = 'party-menu-saved-recipes'
function getSavedRecipes() { try { return JSON.parse(localStorage.getItem(SAVED_KEY)) || [] } catch { return [] } }

export default function SavedRecipesPage() {
  const [recipes, setRecipes] = useState(getSavedRecipes)
  function removeRecipe(id) { const nextRecipes = recipes.filter((recipe) => recipe.id !== id); localStorage.setItem(SAVED_KEY, JSON.stringify(nextRecipes)); setRecipes(nextRecipes) }
  return <main className="page-container saved-page"><div className="saved-header"><div><h1>Saved Recipes</h1><p>{recipes.length} recipes saved</p></div><Link className="button button-secondary" to="/">Back to Menu</Link></div>{recipes.length ? <section className="recipe-grid saved-grid">{recipes.map((item) => <RecipeCard key={item.id} item={item} showRemove onRemove={removeRecipe} />)}</section> : <div className="empty-message"><p>No saved recipes yet.</p><Link to="/">Browse the menu</Link></div>}</main>
}
