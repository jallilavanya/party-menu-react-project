import { Link, Navigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import { getMenuItemById } from '../utils/menuUtils'

const SAVED_KEY = 'party-menu-saved-recipes'
function getSavedRecipes() { try { return JSON.parse(localStorage.getItem(SAVED_KEY)) || [] } catch { return [] } }

export default function RecipeDetailPage() {
  const { id } = useParams(); const item = getMenuItemById(id)
  if (!item) return <Navigate to="/" replace />
  const isSaved = getSavedRecipes().some((recipe) => recipe.id === item.id)
  function saveRecipe() { const saved = getSavedRecipes(); if (!saved.some((recipe) => recipe.id === item.id)) localStorage.setItem(SAVED_KEY, JSON.stringify([...saved, item])); window.location.reload() }
  return <main className="page-container"><Header /><div className="detail-actions"><Link className="button button-secondary" to="/">← Back to Menu</Link><button className="button button-primary" onClick={saveRecipe} disabled={isSaved}>{isSaved ? 'Recipe Saved' : 'Save Recipe'}</button></div><section className="recipe-hero"><img src={item.image} alt={item.name} /><div><div className="detail-tags"><span>{item.category}</span><span>{item.diet === 'Veg' ? '🌿 Veg' : '🍗 Non-Veg'}</span></div><h1>{item.name}</h1><p>For {item.serves} people</p><p className="detail-description">{item.description}</p></div></section><section className="ingredients"><h2>Ingredients</h2>{item.ingredients.map(([name, amount]) => <div className="ingredient-row" key={name}><strong>{name}</strong><span>{amount}</span></div>)}</section></main>
}
