import { grid, item } from './stories.css'
import { Story } from '../../Components/Story'
import { useStories } from '../../Hooks/useStories'

// Stories
export default function Stories () {
  // Stories Custom Hook
  const { stories, scrollIndicator, isLoading } = useStories()

  return (
    <>
      <section className="stories">
        <ul className={grid}>
          {stories?.map((story) => (
            <li key={story.id} className={item}>
              <Story id={story.id} />
            </li>
          ))}
        </ul>

        {!isLoading && <span ref={scrollIndicator}>.</span>}
      </section>
    </>
  )
}
