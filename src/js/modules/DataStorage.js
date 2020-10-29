export default class DataStorage {

  setDataStorage (data) {
    localStorage.setItem('totalResults', data.totalResults)
    localStorage.setItem('articles', JSON.stringify(data.articles))
  }

  getTotalResults () {
   return localStorage.getItem('totalResults')
  }

  getArticles () {
    return JSON.parse(getItem('articles'))
  }
}
