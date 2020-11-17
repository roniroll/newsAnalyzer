import '../pages/about-page.css';
import CommitCard from '../js/componets/CommitCard.js';
import CommitCardList from '../js/componets/CommitCardList.js';
import GithubApi from '../js/modules/GithubApi.js';

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  freeMode: true,

  breakpoints: {
    768: {
      slidesPerView: 3
    }
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
})


const commitCardList = new CommitCardList(document.querySelector('.swiper-wrapper'), createCardFunction)
const githubApi = new GithubApi ('https://api.github.com/repos/roniroll/newsAnalyzer/commits');

function renderCardCommits () {
  githubApi.getCommits()
  .then((data) => {
    const commits = data.filter((item) => item.author != null)
    commitCardList.render(commits)
  })
}

renderCardCommits()

function createCardFunction (name, email, date, message, avatar_url) {
  return new CommitCard (name, email, date, message, avatar_url).createCard()
}

