export default class FormValidator {
  constructor(form, newsApi) {
    this.form = form
    this.newsApi = newsApi
  }

  setEventListener() {
    const input = document.querySelector('.search__input')
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (input.value == '') {
        input.setCustomValidity('Нужно ввести ключевое слово')
      } else {
        this.checkInputFalse()
        const request = this.form.form__input.value;
        this.newsApi.getNews(request)
        this.form.reset()
      }
    })
    input.addEventListener('input', this.checkInputFalse)
  }

  checkInputFalse () {
    const input = document.querySelector('.search__input')
    if (input.value !== '') {
      input.setCustomValidity('')
    }
  }
}

