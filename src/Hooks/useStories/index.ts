// React
import { useState } from 'react'

// SWR
import useSWRInfinite from 'swr/infinite'

// Services
import { getStories } from '../../Services/hacker-news'

export function useStories () {
  // Fetching stories using SWRInfinite hook
  const { data, isLoading, setSize, size } = useSWRInfinite(
    // Generating the key for each page
    (index) => `stories/${index + 1}`,
    // Fetching data for a given key (page)
    async (key) => {
      const [, page] = key.split('/')

      // Fetching stories using the getStories function
      return await getStories(Number(page), 10)
    }
  )

  // Flattening the nested data array
  const stories = data?.flat()

  // State for indicating whether more data is being loaded
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  // Manage the state to give feedback about loading state
  const handleLoadMore = () => {
    setIsLoadingMore(true)

    setSize(size + 1)
      .then(() => {
        setIsLoadingMore(false)

        // Scroll to the bottom smoothly after loading more data
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        })
      })
      .catch(() => {
        setIsLoadingMore(false)
      })
  }

  // Returning the fetched stories, scroll indicator reference, loading state, and load more handler
  return { stories, isLoading, setSize, size, isLoadingMore, handleLoadMore }
}
