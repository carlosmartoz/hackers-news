import useSWR from 'swr'
import { getItemInfo } from '../../Services/hacker-news'
import { CommentLoader } from '../../Components/CommentLoader'
import { ListOfComments } from '../../Components/ListOfComments'
import { comments, commentsContainer, commentsLoaderContainer } from './comments.css'

// Comments
export default function Comments ({ params }: { params: { id: string } }) {
  // Fetching All Comments
  const { data, isLoading } = useSWR(`/story/${params.id}`, async () => await getItemInfo(Number(params.id)))

  return (
    <>
      <section className={comments}>
        <div className={commentsContainer}>
          {isLoading
            ? (
            <div className={commentsLoaderContainer}>
              <CommentLoader />
            </div>
              )
            : (
            <ListOfComments ids={data.kids?.slice(0, 10) ?? []} />
              )}
        </div>
      </section>
    </>
  )
}
