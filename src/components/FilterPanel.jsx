const categories = ['All', 'Starter', 'Main', 'Sides', 'Desert']
const diets = ['All', 'Veg', 'Non-Veg']

export default function FilterPanel({ category, diet, searchTerm, onCategoryChange, onDietChange, onSearchChange }) {
  return <section className="filter-panel"><div className="filter-group"><span>Category</span><div>{categories.map((item) => <button key={item} className={category === item ? 'filter-button active' : 'filter-button'} onClick={() => onCategoryChange(item)}>{item}</button>)}</div></div><div className="filter-group"><span>Diet</span><div>{diets.map((item) => <button key={item} className={diet === item ? 'filter-button active' : 'filter-button'} onClick={() => onDietChange(item)}>{item === 'Veg' && '🌿 '}{item === 'Non-Veg' && '🍗 '}{item}</button>)}</div></div><label className="search-row"><input value={searchTerm} onChange={(event) => onSearchChange(event.target.value)} placeholder="Search by name (e.g. chicken)" /><span>Search</span></label></section>
}
