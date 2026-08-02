import { menuItems } from '../data/menuItems'

export function filterMenuItems(items, category, diet, searchTerm) {
  const search = searchTerm.trim().toLowerCase()
  return items.filter((item) => (category === 'All' || item.category === category) && (diet === 'All' || item.diet === diet) && (!search || item.name.toLowerCase().includes(search)))
}

export function getMenuItemById(id) {
  return menuItems.find((item) => item.id === id)
}
