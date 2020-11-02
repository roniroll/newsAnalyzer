export default class CommitCardList {
  constructor (domElement, createCard) {
    this.domElement = domElement;
    this.createCard = createCard;
  }

  addCard(name, email, date, message, avatar_url) {
    this.domElement.appendChild(this.createCard(name, email, date, message, avatar_url))
  }

  render (result) {
    result.forEach(item => {
      this.addCard(item.commit.committer.name, item.commit.committer.email, item.commit.committer.date,
        item.commit.message, item.author.avatar_url)
    })
  }
}
