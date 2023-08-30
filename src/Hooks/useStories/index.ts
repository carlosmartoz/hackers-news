// React
import { useState, useEffect } from 'react'

// SWR
import useSWRInfinite from 'swr/infinite'

// Services
import { getStories } from '../../Services/hacker-news'

export const useStories = () => {
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

  // Check if the first page is empty
  const isEmpty = data?.[0]?.length === 0

  // Determine if we're reaching the end of data
  const isReachingEnd = isEmpty || (data != null && data[data.length - 1]?.length < 10)

  // Determine if we're currently loading more data
  const isLoadingMore = isLoading || (size > 0 && data != null && typeof data[size - 1] === 'undefined')

  // State to track if we're currently fetching more data
  const [isFetchingMore, setIsFetchingMore] = useState(false)

  // Effect to observe changes and perform scroll when fetching more data
  useEffect(() => {
    if (isFetchingMore) {
      const observer = new MutationObserver(() => {
        // Scroll to the bottom smoothly after loading more data
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        })

        // Reset the fetching flag and disconnect the observer
        setIsFetchingMore(false)
        observer.disconnect()
      })

      // Observe changes to the body element, including its subtree
      observer.observe(document.body, { childList: true, subtree: true })
    }
  }, [isFetchingMore])

  // Flattening the nested data array
  const stories = data?.flat()

  // Return the fetched stories, loading state, and control functions
  return { stories, isLoading, size, setSize, isLoadingMore, isReachingEnd, setIsFetchingMore }
}
