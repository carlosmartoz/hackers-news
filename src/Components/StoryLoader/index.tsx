import { storyLoader, storyLoaderTitle, storyLoaderItems } from './storyLoader.css'

// StoryLoader
export const StoryLoader = () => {
  return (
    <>
      <article className={storyLoader}>
        <div className={storyLoaderTitle}></div>

        <div className={storyLoader}>
          <div className={storyLoaderItems}></div>
          <div className={storyLoaderItems}></div>
        </div>
      </article>
    </>
  )
}
