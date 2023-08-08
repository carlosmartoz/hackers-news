// Mapping of time units to their corresponding seconds
const DATE_UNITS: Record<string, number> = {
  year: 31536000, // Number of seconds in a year
  month: 2629800, // Number of seconds in a month (approximated)
  day: 86400, // Number of seconds in a day
  hour: 3600, // Number of seconds in an hour
  minute: 60, // Number of seconds in a minute
  second: 1 // Number of seconds in a second
} as const

// Create a new Intl.RelativeTimeFormat instance for relative time formatting
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

// Function to calculate and format relative time based on epoch time
export const getRelativeTime = (epochTime: number) => {
  // Convert epoch time to milliseconds and get the current time in milliseconds
  const started = new Date(epochTime * 1000).getTime()
  const now = new Date().getTime()

  // Calculate the elapsed time in seconds
  const elapsed = (started - now) / 1000

  // Iterate through each time unit to determine the appropriate relative time format
  for (const unit in DATE_UNITS) {
    const absoluteElapsed = Math.abs(elapsed)

    // Check if the elapsed time is greater than the current time unit or if it's the smallest unit (seconds)
    if (absoluteElapsed > DATE_UNITS[unit] || unit === 'second') {
      // Calculate the relative time and format it using the Intl.RelativeTimeFormat instance
      return rtf.format(Math.round(elapsed / DATE_UNITS[unit]), unit as Intl.RelativeTimeFormatUnit)
    }
  }

  // If the elapsed time is not significant, return an empty string
  return ''
}
