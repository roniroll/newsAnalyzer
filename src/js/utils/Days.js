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

export function formatDate (publishedAt) {
  const date = new Date(publishedAt);
  const mounth = {
    '0': 'января',
    '1': 'февраля',
    '2': 'марта',
    '3': 'апреля',
    '4': 'мая',
    '5': 'июня',
    '6': 'июля',
    '7': 'августа',
    '8': 'сентября',
    '9': 'октября',
    '10': 'ноября',
    '11': 'декабря',
  }
    if (date.getDate() <= 9) {
      return `0${date.getDate()} ${mounth[date.getMonth()]}, ${date.getFullYear()}`
    }
    return `${date.getDate()} ${mounth[date.getMonth()]}, ${date.getFullYear()}`
}


