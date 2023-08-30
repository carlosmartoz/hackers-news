import { useState } from 'react'

// Custom hook for managing favorite stories
export const useFavorites = (id: number) => {
  // Check if the story with the given ID is already marked as a favorite
  const isFavorite = localStorage.getItem(`favorite_${id}`) === 'true'

  // Use state to manage the favorite status locally
  const [favorite, setFavorite] = useState(isFavorite)

  // Toggle the favorite status
  const toggleFavorite = () => {
    if (favorite) {
      // If it's already a favorite, remove it from local storage and update state
      localStorage.removeItem(`favorite_${id}`)
      setFavorite(false)
    } else {
      // If it's not a favorite, mark it as a favorite in local storage and update state
      localStorage.setItem(`favorite_${id}`, 'true')
      setFavorite(true)
    }
  }

  // Return the current favorite status, the toggle function, and the setFavorite function
  return { isFavorite: favorite, toggleFavorite, setFavorite }
}
