// Styles
import { loader, loaderItem } from '../StoryLoader/storyLoader.css'

// Comment Loader
export default function CommentLoader () {
  return (
    <>
      <li className={loader}>
        <span className={loaderItem.medium}></span>

        <span className={loaderItem.giant}></span>
      </li>
    </>
  )
}
