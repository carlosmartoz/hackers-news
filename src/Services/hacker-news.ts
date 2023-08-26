/**
 * Fetches an array of story IDs from the Hacker News API.
 *
 * @param page - The page number.
 * @param limit - The maximum number of stories per page.
 * @returns An array of story information.
 */

export const getStories = async (page: number, limit: number) => {
  // Fetch the list of top story IDs from the API
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
  const storyIds = await response.json()

  // Calculate the start and end indices of stories for the given page and limit
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  // Slice the array of story IDs to get the IDs for the current page
  const idsForPage = storyIds.slice(startIndex, endIndex)

  // Fetch detailed information for each story using the getItemInfo function
  const itemInfoPromises = idsForPage.map(async (id: number) => await getItemInfo(id))

  // Wait for all promises to resolve and gather the story information
  const stories = await Promise.all(itemInfoPromises)

  // Return the array of story information
  return stories
}

/**
 * Fetches detailed information for a single story/item.
 *
 * @param id - The ID of the story/item to fetch.
 * @returns Detailed information about the story/item.
 */

export const getItemInfo = async (id: number) => {
  // Fetch the story's information using its ID
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)

  // Parse the response JSON to get the story's detailed information
  return await response.json()
}
