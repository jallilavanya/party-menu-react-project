const categories = ['All', 'Starter', 'Main', 'Sides', 'Desert']
const diets = ['All', 'Veg', 'Non-Veg']

<<<<<<< HEAD
export default function FilterPanel({
  category,
  diet,
  searchInput,
  onCategoryChange,
  onDietChange,
  onSearchInputChange,
  onSearchSubmit,
}) {
  function handleSearchKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      onSearchSubmit()
    }
  }

  return (
    <section className="filter-panel" aria-label="Filter menu items">
      <div className="filter-group">
        <span id="category-label">Category</span>
        <div role="group" aria-labelledby="category-label">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={category === item ? 'filter-button active' : 'filter-button'}
              onClick={() => onCategoryChange(item)}
              aria-pressed={category === item}
              aria-label={`Filter by category: ${item}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="filter-group">
        <span id="diet-label">Diet</span>
        <div role="group" aria-labelledby="diet-label">
          {diets.map((item) => (
            <button
              key={item}
              type="button"
              className={diet === item ? 'filter-button active' : 'filter-button'}
              onClick={() => onDietChange(item)}
              aria-pressed={diet === item}
              aria-label={`Filter by diet: ${item}`}
            >
              {item === 'Veg' && '🌿 '}
              {item === 'Non-Veg' && '🍗 '}
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="search-row">
        <label htmlFor="search-input" className="visually-hidden">
          Search by name
        </label>
        <input
          id="search-input"
          type="text"
          value={searchInput}
          onChange={(event) => onSearchInputChange(event.target.value)}
          onKeyDown={handleSearchKeyDown}
          placeholder="Search by name (e.g. chicken)"
          aria-label="Search by recipe name"
        />
        <button
          type="button"
          className="search-button"
          onClick={onSearchSubmit}
          aria-label="Search menu items"
        >
          Search
        </button>
      </div>
    </section>
  )
=======
export default function FilterPanel({ category, diet, searchTerm, onCategoryChange, onDietChange, onSearchChange }) {
  return <section className="filter-panel"><div className="filter-group"><span>Category</span><div>{categories.map((item) => <button key={item} className={category === item ? 'filter-button active' : 'filter-button'} onClick={() => onCategoryChange(item)}>{item}</button>)}</div></div><div className="filter-group"><span>Diet</span><div>{diets.map((item) => <button key={item} className={diet === item ? 'filter-button active' : 'filter-button'} onClick={() => onDietChange(item)}>{item === 'Veg' && '🌿 '}{item === 'Non-Veg' && '🍗 '}{item}</button>)}</div></div><label className="search-row"><input value={searchTerm} onChange={(event) => onSearchChange(event.target.value)} placeholder="Search by name (e.g. chicken)" /><span>Search</span></label></section>
>>>>>>> ff65ebb31bd781d137ffde87d22e7f163cb42e18
}
