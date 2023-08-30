// Styles
import { section, grid, item, button } from './stories.css'

// Hooks
import { useStories } from '../../Hooks/useStories'

// Components
import Nav from '../../Components/Nav'
import Story from '../../Components/Story'
import StoryLoader from '../../Components/StoryLoader'

export default function Stories () {
  // Use the custom Stories Hook
  const { stories, isLoading, isLoadingMore, handleLoadMore } = useStories()

  return (
    <>
      <section className={section}>
        <Nav />

        <ul className={grid}>
          {isLoading ? (
            // Render 10 Loaders to simulate loading
            <>
              {Array.from({ length: 10 }, (_, index) => (
                <li key={index} className={item}>
                  <StoryLoader />
                </li>
              ))}
            </>
          ) : (
            // Render the Stories when they are ready
            <>
              {stories?.map((story) => (
                <li key={story.id} className={item}>
                  <Story id={story.id} />
                </li>
              ))}
            </>
          )}
        </ul>

        {/* Button to load more Stories */}
        <button onClick={handleLoadMore} className={button} disabled={isLoadingMore}>
          {isLoadingMore ? 'Loading...' : 'Load more'}
        </button>
      </section>
    </>
  )
}
