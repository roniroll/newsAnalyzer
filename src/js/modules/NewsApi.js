export default class NewsApi {
  constructor(baseUrl, apiKey, today, lastday) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
    this.today = today
    this.lastday = lastday
  }

  getNews(request) {
   return fetch(`${this.baseUrl}q=${request}&from=${this.lastday}&to=${this.today}&pageSize=100&apiKey=${this.apiKey}`)
    .then((res) => {
      if(res.ok) {
         return res.json()
      }
      return Promise.reject(res.status)
    })
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log(err)
    })
  }
}


