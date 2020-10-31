//функция возвращающая сегодняшнуюю дату, автоматически обновляется
export function returnTodayDay () {
  const todayDate = new Date().toISOString()
  const todayDateForRequest = todayDate.substr(0,10)
  return todayDateForRequest
}

//функция возвращающая 7 дней назад от сегодняшней даты, автоматически обновляется
export function returnLastDay () {
  const date = new Date()
  date.setDate(date.getDate() - 7)
  const readyDate = date.toISOString()
  const lastDayForRequest = readyDate.substr(0,10)
  return lastDayForRequest
}

export function formatDate () {
  const date = new Date('2020-10-26');
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
}


