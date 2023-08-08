import { useEffect, useRef } from 'react'
import useSWRInfinite from 'swr/infinite'
import { getStories } from '../../Services/hacker-news'

// Custom Hook
export function useStories () {
  // Fetching stories using SWRInfinite hook
  const { data, isLoading, setSize } = useSWRInfinite(
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

  // Creating a reference for the scroll indicator element
  const scrollIndicator = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Creating an IntersectionObserver to detect scroll indicator visibility
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading) {
        // When the scroll indicator becomes visible and data is not loading, increase the page size
        void setSize((prevSize) => prevSize + 1)
      }
    })

    if (scrollIndicator.current == null) {
      return
    }

    // Attaching the IntersectionObserver to the scroll indicator element
    observer.observe(scrollIndicator.current)

    // Clean up the observer when the component unmounts or when the observer changes
    return () => {
      observer.disconnect()
    }
  }, [isLoading, setSize])

  // Returning the fetched stories, scroll indicator reference, and loading state
  return { stories, scrollIndicator, isLoading }
}
