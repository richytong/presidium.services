const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

// date string -> published string
const DatePublished = function (date) {
  const [yyyy, mm, dd] = date.split('-')
  const monthName = monthNames[Number(mm) - 1]
  return `${monthName} ${dd.startsWith('0') ? dd.slice(1) : dd}, ${yyyy}`
}

export default DatePublished
