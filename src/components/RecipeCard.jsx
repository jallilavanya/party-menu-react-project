import { Link } from 'react-router-dom'

export default function RecipeCard({ item, showRemove, onRemove }) {
  return <article className="recipe-card"><Link to={`/menu/${item.id}`} className="recipe-link"><div className="recipe-image"><img src={item.image} alt={item.name} /><span className={`diet-badge ${item.diet === 'Veg' ? 'veg' : 'non-veg'}`}>{item.diet === 'Veg' ? 'VEG' : 'NON-VEG'}</span></div><div className="recipe-content"><span className="category-label">{item.category}</span><h2>{item.name}</h2><p>{item.description}</p><small>For {item.serves} people</small></div></Link>{showRemove && <button className="remove-button" onClick={() => onRemove(item.id)}>Remove</button>}</article>
}
