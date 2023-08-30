import { useState, useEffect } from 'react'

// Custom hook for managing the list of favorite story IDs
export const useRemoveFavorites = () => {
  // Use state to store the list of favorite story IDs
  const [favoriteStoryIDs, setFavoriteStoryIDs] = useState<number[]>(() => {
    // Initialize the list of favorite story IDs from local storage
    return Object.keys(localStorage)
      .filter((key) => key.startsWith('favorite_'))
      .map((key) => parseInt(key.substring(9)))
  })

  // Function to remove a story from the list of favorite story IDs
  const removeFavorite = (idToRemove: number) => {
    // Filter out the ID to remove from the list of favorites
    const updatedFavorites = favoriteStoryIDs.filter((id) => id !== idToRemove)

    // Update the list of favorite story IDs in state
    setFavoriteStoryIDs(updatedFavorites)

    // Remove the story from local storage
    localStorage.removeItem(`favorite_${idToRemove}`)
  }

  // Load favorite story IDs from local storage when the component mounts
  useEffect(() => {
    const updatedFavorites = Object.keys(localStorage)
      .filter((key) => key.startsWith('favorite_'))
      .map((key) => parseInt(key.substring(9)))

    // Update the list of favorite story IDs in state
    setFavoriteStoryIDs(updatedFavorites)
  }, [])

  // Return the list of favorite story IDs and the removeFavorite function
  return { favoriteStoryIDs, removeFavorite }
}
