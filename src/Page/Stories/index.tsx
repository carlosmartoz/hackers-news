// Styles
import { section, grid, item, button, loading } from './stories.css'

// Hooks
import { useStories } from '../../Hooks/useStories'

// Components
import Nav from '../../Components/Nav'
import Story from '../../Components/Story'
import StoryLoader from '../../Components/StoryLoader'
import { BiLoaderAlt } from 'react-icons/bi'

export default function Stories () {
  // Use the custom Stories Hook
  const { stories, isLoading, size, setSize, isLoadingMore, isReachingEnd, setIsFetchingMore } = useStories()

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
        <button
          onClick={async () => {
            await setSize(size + 1)
            setIsFetchingMore(true)
          }}
          className={isLoadingMore ? button.loading : button.base}
          disabled={isLoadingMore || isReachingEnd}
        >
          {isLoadingMore ? <BiLoaderAlt className={loading} /> : isReachingEnd ? 'No more stories' : 'Load More'}
        </button>
      </section>
    </>
  )
}
