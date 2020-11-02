export default class GithubApi {
  constructor (url) {
    this.url = url
  }

  getCommits () {
    return fetch (`${this.url}`)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject((res.status))
      })
     .then((data) => {
      return data
     })
     .catch((err) => {
       console.log(err)
     })
  }
}
