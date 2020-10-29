export default class RenederLoader {
  constructor(loader) {
    this.loader = loader
  }

  renderLoader(isLoading) {
    const loader = document.querySelector('.loader')
    const results = document.querySelector('.results')
    if(isLoading) {
      loader.classList.add('loader_visible')
      results.classList.add('results_hidden')
    } else {
      loader.classList.remove('loader_visible')
      results.classList.remove('results_hidden')
  }}
}




