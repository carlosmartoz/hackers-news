// Styles
import { title } from './favorites.css'
import { grid, item, section } from '../Stories/stories.css'

// Hooks
import { useStories } from '../../Hooks/useStories'
import { useRemoveFavorites } from '../../Hooks/useRemoveFavorite'

// Components
import Nav from '../../Components/Nav'
import Story from '../../Components/Story'
import StoryLoader from '../../Components/StoryLoader'

export default function Favorites () {
  // Use the custom Stories Hook
  const { isLoading } = useStories()

  // Custom Hook for remove an item from the favorite list
  const { favoriteStoryIDs, removeFavorite } = useRemoveFavorites()

  return (
    <>
      <section className={section}>
        <Nav />

        {favoriteStoryIDs.length > 0 ? (
          <ul className={grid}>
            {isLoading ? (
              // Render loaders based on the length of the favorites to simulate loading
              <>
                {favoriteStoryIDs.map((favoriteID) => (
                  <li key={favoriteID} className={item}>
                    <StoryLoader />
                  </li>
                ))}
              </>
            ) : (
              // Render the Stories when they are ready
              <>
                {favoriteStoryIDs.map((favoriteID) => (
                  <li key={favoriteID} className={item}>
                    <Story id={favoriteID} onRemove={removeFavorite} />
                  </li>
                ))}
              </>
            )}
          </ul>
        ) : (
          <h2 className={title}>There are not favorites yet 😪</h2>
        )}
      </section>
    </>
  )
}
