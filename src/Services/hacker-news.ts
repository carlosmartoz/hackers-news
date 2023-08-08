// Function to fetch an array of story IDs from the Hacker News API
export const getStories = async (page: number, limit: number) => {
  // Fetch the list of top story IDs from the API
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')

  const json = await response.json()

  // Calculate the start and end indices of stories for the given page and limit
  const startIndex = (page - 1) * limit

  const endIndex = startIndex + limit

  // Slice the array of story IDs to get the IDs for the current page
  const ids = json.slice(startIndex, endIndex)

  // Fetch detailed information for each story using the getItemInfo function
  const itemInfoPromises = ids.map(async (id: number) => await getItemInfo(id))

  // Wait for all promises to resolve and gather the story information
  const itemInfoArray = await Promise.all(itemInfoPromises)

  // Return the array of story information
  return itemInfoArray
}

// Function to fetch detailed information for a single story/item
export const getItemInfo = async (id: number) => {
  // Fetch the story's information using its ID
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)

  // Parse the response JSON to get the story's detailed information
  return await response.json()
}
