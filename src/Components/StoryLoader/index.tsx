// Styles
import { loader, loaderItem } from './storyLoader.css'

export const StoryLoader = () => {
  return (
    <>
      <article className={loader}>
        <div className={loaderItem.large}></div>

        <div className={loader}>
          <div className={loaderItem.medium}></div>
          <div className={loaderItem.small}></div>
        </div>
      </article>
    </>
  )
}
