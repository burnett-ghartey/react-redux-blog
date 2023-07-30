import { parseISO, formatDistanceToNow } from 'date-fns'

import React from 'react'

export default function TimeAgo({timestamp}) {

    let timeAgo = ''
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  return (
    <div>{timeAgo}</div>
  )
}
