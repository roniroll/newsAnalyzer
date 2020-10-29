export default class SearchInput {
  constructor(submitFn, form, input) {
    this.submitFn = submitFn;
    this.form = form;
    this.input = input
  }

  setEventListeners () {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault()
      if(this.validate() == true) {
        this.submitFn(this.input.value)
      }
    })
    this.input.addEventListener('input', () => {
      this.validate()
    })
  }

  validate () {
      if(this.input.value == '') {
        this.input.setCustomValidity('Нужно ввести ключевое слово');
        return false
      } else {
        this.input.setCustomValidity('')
        return true
      }
  }
}
