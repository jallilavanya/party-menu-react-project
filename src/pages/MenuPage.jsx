import { useState } from 'react'
import Header from '../components/Header'
import FilterPanel from '../components/FilterPanel'
import RecipeCard from '../components/RecipeCard'
import { menuItems } from '../data/menuItems'
import { filterMenuItems } from '../utils/menuUtils'

export default function MenuPage() {
<<<<<<< HEAD
  const [category, setCategory] = useState('All')
  const [diet, setDiet] = useState('All')
  const [searchInput, setSearchInput] = useState('')
  const [appliedSearch, setAppliedSearch] = useState('')

  const filteredItems = filterMenuItems(menuItems, category, diet, appliedSearch)

  function handleSearchSubmit() {
    setAppliedSearch(searchInput)
  }

  return (
    <main className="page-container" aria-labelledby="menu-heading">
      <Header />
      <h1 id="menu-heading" className="visually-hidden">Party Menu</h1>
      <FilterPanel
        category={category}
        diet={diet}
        searchInput={searchInput}
        onCategoryChange={setCategory}
        onDietChange={setDiet}
        onSearchInputChange={setSearchInput}
        onSearchSubmit={handleSearchSubmit}
      />
      <p className="item-count" aria-live="polite">
        {filteredItems.length} items found
      </p>
      {filteredItems.length ? (
        <section className="recipe-grid" aria-label="Menu items">
          {filteredItems.map((item) => (
            <RecipeCard key={item.id} item={item} />
          ))}
        </section>
      ) : (
        <div className="empty-message" role="status">
          <p>No dishes found.</p>
          <p>Try different filters.</p>
        </div>
      )}
    </main>
  )
=======
  const [category, setCategory] = useState('All'); const [diet, setDiet] = useState('All'); const [searchTerm, setSearchTerm] = useState('')
  const filteredItems = filterMenuItems(menuItems, category, diet, searchTerm)
  return <main className="page-container"><Header /><FilterPanel category={category} diet={diet} searchTerm={searchTerm} onCategoryChange={setCategory} onDietChange={setDiet} onSearchChange={setSearchTerm} /><p className="item-count">{filteredItems.length} items found</p>{filteredItems.length ? <section className="recipe-grid">{filteredItems.map((item) => <RecipeCard key={item.id} item={item} />)}</section> : <p className="empty-message">No dishes found. Try different filters.</p>}</main>
>>>>>>> ff65ebb31bd781d137ffde87d22e7f163cb42e18
}
