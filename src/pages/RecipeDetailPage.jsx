import { Link, Navigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import { getMenuItemById } from '../utils/menuUtils'
<<<<<<< HEAD
import { useSavedRecipes } from '../context/SavedRecipesContext'

export default function RecipeDetailPage() {
  const { id } = useParams()
  const { addRecipe, removeSavedRecipe, isSaved } = useSavedRecipes()
  const item = getMenuItemById(id)

  if (!item) return <Navigate to="/" replace />

  const saved = isSaved(item.id)

  function handleToggleSave() {
    if (saved) {
      removeSavedRecipe(item.id)
      return
    }

    addRecipe(item)
  }

  return (
    <main className="page-container" aria-labelledby="recipe-detail-heading">
      <Header />
      <div className="detail-actions">
        <Link
          className="button button-secondary"
          to="/"
          aria-label="Back to Menu"
        >
          ← Back to Menu
        </Link>
        <div className="detail-action-group">
          <Link
            className="button button-secondary"
            to="/saved-recipes"
            aria-label="View saved recipes"
          >
            Saved Recipes
          </Link>
          <button
            type="button"
            className="button button-primary"
            onClick={handleToggleSave}
            aria-label={saved ? `Remove ${item.name} from saved recipes` : `Save ${item.name} to saved recipes`}
          >
            {saved ? 'Saved' : 'Save Recipe'}
          </button>
        </div>
      </div>
      <section className="recipe-hero" aria-labelledby="recipe-detail-heading">
        <img
          src={item.image}
          alt={item.name}
          aria-label={`Image of ${item.name}`}
        />
        <div>
          <div className="detail-tags">
            <span className="category-badge" aria-label={`Category: ${item.category}`}>
              {item.category}
            </span>
            <span className={`diet-badge ${item.diet === 'Veg' ? 'veg' : 'non-veg'}`} aria-label={`${item.diet}`}>
              {item.diet === 'Veg' ? '🌿 Veg' : '🍗 Non-Veg'}
            </span>
          </div>
          <h1 id="recipe-detail-heading">{item.name}</h1>
          <p aria-label={`Servings: ${item.serves}`}>
            Servings: {item.serves}
          </p>
          <p className="detail-description">{item.description}</p>
        </div>
      </section>
      <section className="ingredients" aria-labelledby="ingredients-heading">
        <h2 id="ingredients-heading">Ingredients</h2>
        <ul className="ingredients-list">
          {item.ingredients.map(([name, amount]) => (
            <li key={name} className="ingredient-row">
              <strong>{name}</strong>
              <span>{amount}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
=======

const SAVED_KEY = 'party-menu-saved-recipes'
function getSavedRecipes() { try { return JSON.parse(localStorage.getItem(SAVED_KEY)) || [] } catch { return [] } }

export default function RecipeDetailPage() {
  const { id } = useParams(); const item = getMenuItemById(id)
  if (!item) return <Navigate to="/" replace />
  const isSaved = getSavedRecipes().some((recipe) => recipe.id === item.id)
  function saveRecipe() { const saved = getSavedRecipes(); if (!saved.some((recipe) => recipe.id === item.id)) localStorage.setItem(SAVED_KEY, JSON.stringify([...saved, item])); window.location.reload() }
  return <main className="page-container"><Header /><div className="detail-actions"><Link className="button button-secondary" to="/">← Back to Menu</Link><button className="button button-primary" onClick={saveRecipe} disabled={isSaved}>{isSaved ? 'Recipe Saved' : 'Save Recipe'}</button></div><section className="recipe-hero"><img src={item.image} alt={item.name} /><div><div className="detail-tags"><span>{item.category}</span><span>{item.diet === 'Veg' ? '🌿 Veg' : '🍗 Non-Veg'}</span></div><h1>{item.name}</h1><p>For {item.serves} people</p><p className="detail-description">{item.description}</p></div></section><section className="ingredients"><h2>Ingredients</h2>{item.ingredients.map(([name, amount]) => <div className="ingredient-row" key={name}><strong>{name}</strong><span>{amount}</span></div>)}</section></main>
>>>>>>> ff65ebb31bd781d137ffde87d22e7f163cb42e18
}
