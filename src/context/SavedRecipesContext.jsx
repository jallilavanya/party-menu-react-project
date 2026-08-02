import { createContext, useCallback, useContext, useState } from 'react'
import { getSavedRecipes, removeRecipe, saveRecipe } from '../utils/savedRecipesUtils'

const SavedRecipesContext = createContext(null)

export function SavedRecipesProvider({ children }) {
  const [recipes, setRecipes] = useState(getSavedRecipes)

  const addRecipe = useCallback((recipe) => {
    setRecipes(saveRecipe(recipe))
  }, [])

  const removeSavedRecipe = useCallback((id) => {
    setRecipes(removeRecipe(id))
  }, [])

  const isSaved = useCallback(
    (id) => recipes.some((recipe) => recipe.id === id),
    [recipes]
  )

  return (
    <SavedRecipesContext.Provider
      value={{ recipes, count: recipes.length, addRecipe, removeSavedRecipe, isSaved }}
    >
      {children}
    </SavedRecipesContext.Provider>
  )
}

export function useSavedRecipes() {
  return useContext(SavedRecipesContext)
}
