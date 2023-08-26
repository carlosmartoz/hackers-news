// SWR
import useSWR from 'swr'

// Wouter
import { Link } from 'wouter'

// React Icons
import { BiArrowBack } from 'react-icons/bi'

// Styles
import { section, article, header, top, back, title, divider, content } from './comments.css'

// Services
import { getItemInfo } from '../../Services/hacker-news'

// Components
import { CommentLoader } from '../../Components/CommentLoader'
import { ListOfComments } from '../../Components/ListOfComments'

export default function Comments ({ params }: { params: { id: string } }) {
  // Fetching All Comments
  const { data, isLoading } = useSWR(`/story/${params.id}`, async () => await getItemInfo(Number(params.id)))

  return (
    <>
      <section className={section}>
        <article className={article}>
          <header className={header}>
            <div className={top}>
              <Link href="/" className={back}>
                <BiArrowBack /> Back
              </Link>

              <h1 className={title}>{data?.title}</h1>
            </div>

            <hr className={divider} />
          </header>

          <footer>
            {isLoading ? (
              <>
                <ul className={content}>
                  <CommentLoader />
                </ul>
              </>
            ) : (
              <>
                <ListOfComments ids={data.kids?.slice(0, 10) ?? []} />
              </>
            )}
          </footer>
        </article>
      </section>
    </>
  )
}
