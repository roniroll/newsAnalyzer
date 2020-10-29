export default class NewsCardList {
  constructor(domElement, createCard) {
    this.domElement = domElement
    this.createCard = createCard
  }

  addCard(source, title, publishedAt, description, url) {
    this.domElement.appendChild(this.createCard(source, title, publishedAt, description, url))
  }

  render(result) {
    result.foreach(item => {
      this.addCard(item.source, item.title, item.publishedAt, item.description, item.url)
    })
  }
}
