import useSWR from 'swr'
import { CommentLoader } from '../CommentLoader'
import { ListOfComments } from '../ListOfComments'
import { getItemInfo } from '../../Services/hacker-news'
import { getRelativeTime } from '../../Utils/getRelativeTime'
import { summary, small, comment } from './comment.css'

// Comment
export const Comment = ({ id }: { id: number }) => {
  // Fetching Comment Data
  const { data, isLoading } = useSWR(`/comment/${id}`, async () => await getItemInfo(id))

  return (
    <>
      {isLoading
        ? (
        <CommentLoader />
          )
        : (
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
