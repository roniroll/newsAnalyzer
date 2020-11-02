import '../pages/about-page.css';
import CommitCard from '../js/componets/CommitCard.js';
import CommitCardList from '../js/componets/CommitCardList.js';
import GithubApi from '../js/modules/GithubApi.js';


const commitCardList = new CommitCardList(document.querySelector('.commits__cards'), createCardFunction)

const githubApi = new GithubApi ('https://api.github.com/repos/roniroll/newsAnalyzer/commits');


function renderCardCommits () {
  githubApi.getCommits()
  .then((data) => {
    commitCardList.render(data)
  })
}

renderCardCommits()

function createCardFunction (name, email, date, message, avatar_url) {

  return new CommitCard (name, email, date, message, avatar_url).createCard()
}

