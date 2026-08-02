import { Link } from 'react-router-dom'

export default function RecipeCard({ item, showRemove, onRemove }) {
<<<<<<< HEAD
  return (
    <article className="recipe-card">
      <Link
        to={`/menu/${item.id}`}
        className="recipe-link"
        aria-label={`View details for ${item.name}`}
      >
        <div className="recipe-image">
          <img
            src={item.image}
            alt={item.name}
            aria-hidden={showRemove ? 'false' : 'true'}
          />
          <span
            className={`diet-badge ${item.diet === 'Veg' ? 'veg' : 'non-veg'}`}
            aria-label={`${item.diet}`}
          >
            {item.diet === 'Veg' ? 'VEG' : 'NON-VEG'}
          </span>
        </div>
        <div className="recipe-content">
          <span
            className="category-label"
            aria-label={`Category: ${item.category}`}
          >
            {item.category}
          </span>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <small aria-label={`Serves ${item.serves} people`}>
            For {item.serves} people
          </small>
        </div>
      </Link>
      {showRemove && (
        <button
          type="button"
          className="remove-button"
          onClick={() => onRemove(item.id)}
          aria-label={`Remove ${item.name} from saved recipes`}
        >
          Remove
        </button>
      )}
    </article>
  )
=======
  return <article className="recipe-card"><Link to={`/menu/${item.id}`} className="recipe-link"><div className="recipe-image"><img src={item.image} alt={item.name} /><span className={`diet-badge ${item.diet === 'Veg' ? 'veg' : 'non-veg'}`}>{item.diet === 'Veg' ? 'VEG' : 'NON-VEG'}</span></div><div className="recipe-content"><span className="category-label">{item.category}</span><h2>{item.name}</h2><p>{item.description}</p><small>For {item.serves} people</small></div></Link>{showRemove && <button className="remove-button" onClick={() => onRemove(item.id)}>Remove</button>}</article>
>>>>>>> ff65ebb31bd781d137ffde87d22e7f163cb42e18
}
