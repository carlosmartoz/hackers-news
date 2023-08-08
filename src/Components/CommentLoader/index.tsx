import { commentLoader, commentLoaderTitle, commentLoaderItem } from './commentLoader.css'

// Comment Loader
export const CommentLoader = () => (
  <>
    <div className={commentLoader}>
      <div className={commentLoaderTitle}></div>

      <div className={commentLoaderItem}></div>
    </div>
  </>
)
