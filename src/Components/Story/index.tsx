// SWR
import useSWR from 'swr'

// Wouter
import { Link } from 'wouter'

// React Icons
import { BiTime, BiCommentDetail, BiSolidHeart, BiHeart } from 'react-icons/bi'

// Styles
import { container, content, title, link, text, favorites } from './story.css'

// Hooks
import { useFavorites } from '../../Hooks/useFavorites'

// Utils
import { getRelativeTime } from '../../Utils/getRelativeTime'

// Services
import { getItemInfo } from '../../Services/hacker-news'

// Components
import StoryLoader from '../StoryLoader'

export default function Story ({ id, onRemove }: { id: number, onRemove?: (idToRemove: number) => void }) {
  // Fetching Story Data
  const { data, isLoading } = useSWR(`/story/${id}`, async () => await getItemInfo(id))

  // Custom hook for handle favorite list
  const { isFavorite, toggleFavorite } = useFavorites(id)

  return (
    <>
      {isLoading ? (
        // Loader for the content
        <>
          <StoryLoader />
        </>
      ) : (
        <>
          <article className={container}>
            <div className={content}>
              <header>
                <h3 className={title}>
                  <a href={data.url} target="_blank" rel="noopener noreferrer" className={link}>
                    {data.title}
                  </a>
                </h3>
              </header>

              <footer className={content}>
                <span className={text.default}>
                  <BiTime size="16px" />{' '}
                  <time dateTime={new Date(data.time * 1000).toISOString()}>{getRelativeTime(data.time)}</time> by {data.by}{' '}
                </span>

                <Link href={`/article/${id}`} className={text.link}>
                  <BiCommentDetail size="16px" />
                  {data.kids?.length ?? 0} comments
                </Link>
              </footer>
            </div>

            {onRemove != null ? (
              <button
                className={isFavorite ? favorites.active : favorites.base}
                onClick={() => {
                  onRemove(id)
                  toggleFavorite()
                }}
              >
                {isFavorite ? <BiSolidHeart /> : <BiHeart />}
              </button>
            ) : (
              <button className={isFavorite ? favorites.active : favorites.base} onClick={toggleFavorite}>
                {isFavorite ? <BiSolidHeart /> : <BiHeart />}
              </button>
            )}
          </article>
        </>
      )}
    </>
  )
}
