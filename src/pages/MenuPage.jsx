import { useState } from 'react'
import Header from '../components/Header'
import FilterPanel from '../components/FilterPanel'
import RecipeCard from '../components/RecipeCard'
import { menuItems } from '../data/menuItems'
import { filterMenuItems } from '../utils/menuUtils'

export default function MenuPage() {
  const [category, setCategory] = useState('All'); const [diet, setDiet] = useState('All'); const [searchTerm, setSearchTerm] = useState('')
  const filteredItems = filterMenuItems(menuItems, category, diet, searchTerm)
  return <main className="page-container"><Header /><FilterPanel category={category} diet={diet} searchTerm={searchTerm} onCategoryChange={setCategory} onDietChange={setDiet} onSearchChange={setSearchTerm} /><p className="item-count">{filteredItems.length} items found</p>{filteredItems.length ? <section className="recipe-grid">{filteredItems.map((item) => <RecipeCard key={item.id} item={item} />)}</section> : <p className="empty-message">No dishes found. Try different filters.</p>}</main>
}
