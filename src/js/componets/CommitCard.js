export default class CommitCard {
  constructor (name, email, date, message, avatar_url) {
    this.name = name;
    this.email = email;
    this.date = date;
    this.message = message;
    this.avatar_url = avatar_url;
  }

  createCard() {
    const wiperSlide = document.createElement('div');
    const commitsDate = document.createElement('p');
    const commitsBlock = document.createElement('div');
    const commitsImage = document.createElement('img');
    const commitsPersonal = document.createElement('div');
    const commitsName = document.createElement('p');
    const commitsEmail = document.createElement('p');
    const commitsText = document.createElement('p')

    wiperSlide.classList.add('swiper-slide');
    commitsDate.classList.add('commits__date');
    commitsBlock.classList.add('commits__block');
    commitsImage.classList.add('commits__image');
    commitsPersonal.classList.add('commits__personal');
    commitsName.classList.add('commits__name');
    commitsEmail.classList.add('commits__email');
    commitsText.classList.add('commits__text');

    commitsPersonal.appendChild(commitsName);
    commitsPersonal.appendChild(commitsEmail);
    commitsBlock.appendChild(commitsImage);
    commitsBlock.appendChild(commitsPersonal);
    wiperSlide.appendChild(commitsDate);
    wiperSlide.appendChild(commitsBlock);
    wiperSlide.appendChild(commitsText);

    commitsDate.innerHTML = this.formatDate(this.date)
    if (this.avatar_url == null) {
      this.avatar_url = 'https://lh3.googleusercontent.com/proxy/2dqul4QIg3xMiL7xOzTdc5exrob0LNA8u_49dlLMlsBRLsrrz3L9-5AuWAdgAYzhDq4oW23-gprhQJgdO9NQlaeUuPOMtUDoVXs'
    }
    commitsImage.src = this.avatar_url;
    commitsName.innerHTML = this.name;
    commitsEmail.innerHTML = this.email;
    commitsText.innerHTML = this.message;

    return wiperSlide
  }

  formatDate (date) {
    const days = new Date(date);
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
      if (days.getDate() <= 9) {
        return  `0${days.getDate()} ${mounth[days.getMonth()]}, ${days.getFullYear()}`
      }
      return `${days.getDate()} ${mounth[days.getMonth()]}, ${days.getFullYear()}`
}
}
