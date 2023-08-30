// SWR
import useSWR from 'swr'

// Styles
import { summary, small, comment } from './comment.css'

// Utils
import { getRelativeTime } from '../../Utils/getRelativeTime'

// Services
import { getItemInfo } from '../../Services/hacker-news'

// Components
import CommentLoader from '../CommentLoader'
import ListOfComments from '../ListOfComments'

export default function Comment ({ id }: { id: number }) {
  // Fetching Comment Data
  const { data, isLoading } = useSWR(`/comment/${id}`, async () => await getItemInfo(id))

  return (
    <>
      {isLoading ? (
        // Loader for the content
        <>
          <CommentLoader />
        </>
      ) : (
        <>
          <details open className="details">
            <summary className={summary}>
              <small className={small}>
                {data.by} | {getRelativeTime(data.time)}
              </small>
            </summary>

            <p dangerouslySetInnerHTML={{ __html: data.text }} className={comment} />
          </details>

          {data.kids?.length > 0 && <ListOfComments ids={data.kids.slice(0, 10)} />}
        </>
      )}
    </>
  )
}
