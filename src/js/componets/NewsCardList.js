export default class NewsCardList {
  constructor(domElement, createCard) {
    this.domElement = domElement
    this.createCard = createCard
  }

  addCard(source, title, publishedAt, description, url, link) {
    this.domElement.appendChild(this.createCard(source, title, publishedAt, description, url, link))
  }

  render(result) {
    this.domElement.innerHTML = '';
    result.forEach(item => {
      this.addCard(item.source, item.title, item.publishedAt, item.description, item.urlToImage, item.url)
    })
  }
}
