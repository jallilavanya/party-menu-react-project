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
}
