import { STORAGE_KEYS } from '../constants/storageKeys'

export function getSavedRecipes() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.SAVED_RECIPES)) || []
  } catch {
    return []
  }
}

export function saveRecipe(recipe) {
  const saved = getSavedRecipes()
  if (saved.some((item) => item.id === recipe.id)) return saved
  const next = [...saved, recipe]
  localStorage.setItem(STORAGE_KEYS.SAVED_RECIPES, JSON.stringify(next))
  return next
}

export function removeRecipe(id) {
  const next = getSavedRecipes().filter((item) => item.id !== id)
  localStorage.setItem(STORAGE_KEYS.SAVED_RECIPES, JSON.stringify(next))
  return next
}
