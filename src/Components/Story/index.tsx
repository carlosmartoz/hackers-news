import useSWR from 'swr'
import { Link } from 'wouter'
import { StoryLoader } from '../StoryLoader'
import { BiTime, BiCommentDetail } from 'react-icons/bi'
import { getItemInfo } from '../../Services/hacker-news'
import { getRelativeTime } from '../../Utils/getRelativeTime'
import { storyContent, storyTitle, storyLink, storyInformation, storyInformationLink } from './story.css'

// Story
export const Story = ({ id }: { id: number }) => {
  // Fetching Story Data
  const { data, isLoading } = useSWR(`/story/${id}`, async () => await getItemInfo(id))

  return (
    <>
      {isLoading
        ? (
        <StoryLoader />
          )
        : (
        <article className={storyContent}>
          <header>
            <h3 className={storyTitle}>
              <a href={data.url} target="_blank" rel="noopener noreferrer" className={storyLink}>
                {data.title}
              </a>
            </h3>
          </header>

          <footer className={storyContent}>
            <span className={storyInformation}>
              <BiTime size="16px" />{' '}
              <time dateTime={new Date(data.time * 1000).toISOString()}>{getRelativeTime(data.time)}</time> by {data.by}{' '}
            </span>

            <Link href={`/article/${id}`} className={storyInformationLink}>
              <BiCommentDetail size="16px" />
              {data.kids?.length ?? 0} comments
            </Link>
          </footer>
        </article>
          )}
    </>
  )
}
