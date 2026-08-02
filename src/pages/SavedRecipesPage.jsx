<<<<<<< HEAD
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import RecipeCard from '../components/RecipeCard'
import { useSavedRecipes } from '../context/SavedRecipesContext'

export default function SavedRecipesPage() {
  const { recipes, removeSavedRecipe } = useSavedRecipes()

  return (
    <main className="page-container saved-page" aria-labelledby="saved-recipes-heading">
      <Header />
      <div className="saved-header">
        <div>
          <h1 id="saved-recipes-heading">Saved Recipes</h1>
          <p aria-live="polite" aria-atomic="true">
            {recipes.length} recipe{recipes.length !== 1 ? 's' : ''} saved
          </p>
        </div>
        <Link
          className="button button-secondary"
          to="/"
          aria-label="Back to Menu"
        >
          Back to Menu
        </Link>
      </div>
      {recipes.length ? (
        <section className="recipe-grid saved-grid" aria-label="Saved recipes">
          {recipes.map((item) => (
            <RecipeCard
              key={item.id}
              item={item}
              showRemove
              onRemove={removeSavedRecipe}
            />
          ))}
        </section>
      ) : (
        <div className="empty-message" role="status">
          <p>No saved recipes yet.</p>
          <Link to="/" aria-label="Browse Menu">
            Browse Menu
          </Link>
        </div>
      )}
    </main>
  )
=======
import { useState } from 'react'
import { Link } from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'

const SAVED_KEY = 'party-menu-saved-recipes'
function getSavedRecipes() { try { return JSON.parse(localStorage.getItem(SAVED_KEY)) || [] } catch { return [] } }

export default function SavedRecipesPage() {
  const [recipes, setRecipes] = useState(getSavedRecipes)
  function removeRecipe(id) { const nextRecipes = recipes.filter((recipe) => recipe.id !== id); localStorage.setItem(SAVED_KEY, JSON.stringify(nextRecipes)); setRecipes(nextRecipes) }
  return <main className="page-container saved-page"><div className="saved-header"><div><h1>Saved Recipes</h1><p>{recipes.length} recipes saved</p></div><Link className="button button-secondary" to="/">Back to Menu</Link></div>{recipes.length ? <section className="recipe-grid saved-grid">{recipes.map((item) => <RecipeCard key={item.id} item={item} showRemove onRemove={removeRecipe} />)}</section> : <div className="empty-message"><p>No saved recipes yet.</p><Link to="/">Browse the menu</Link></div>}</main>
>>>>>>> ff65ebb31bd781d137ffde87d22e7f163cb42e18
}
