// Styles
import { loader, loaderItem } from '../StoryLoader/storyLoader.css'

// Comment Loader
export const CommentLoader = () => (
  <>
    <li className={loader}>
      <span className={loaderItem.medium}></span>

      <span className={loaderItem.giant}></span>
    </li>
  </>
)
