export default class Statistics {
  constructor (data) {
    this.data = data
  }

  renderAnalytics () {
    const analyticsWeek = document.querySelector('.analytics__week_count');
    const analyticsMention = document.querySelector('.analytics__mention_count');
    const analuticsRequestValue = document.querySelector('.analytics__request_value');


    analyticsWeek.textContent = this.data.getTotalResults();
    analuticsRequestValue.textContent = this.data.getKeyWord()


    const countMention = this.data.getArticles().reduce((prev, next) => {
    const count = (next.title.match(this.data.getKeyWord()) || []).length;
    prev += count;

    return prev
    },0)
    analyticsMention.textContent = countMention

  }



  chartAnalytics () {
    //Подстановка текущего месяца в аналитику
    const analyticsMounte = document.querySelector('.analytics__date_mounth');
    const date = new Date();
    analyticsMounte.textContent = this._formatMounth(date);

    const countDayGraph = this.data.getArticles().reduce((prev, next) => {
      const key = this._formatDate(next.publishedAt)
     if (!prev[key]) {
       prev[key] = 0
     }
     prev[key] += (`${next.title} ${next.description}`.match(this.data.getKeyWord()) || []).length
    return prev
    }, {})
    return countDayGraph
  }

  totalResult (obj) {
   let sum = 0
   for (let key of Object.values(obj)) {
    sum += key
   }
   return sum
  }

  renderDay () {
    const result = this.chartAnalytics();
    const sum = this.totalResult(result)

    const infographicsDates = document.querySelector('.infographics__dates');
    const infographicsLines = document.querySelector('.infographics__lines');

    Object.keys(result).sort((a,b)=>
    new Date(a).getTime() - new Date(b).getTime(),
    ).forEach(day=>{
    const infographicsDay = document.createElement('p');
    infographicsDay.classList.add('infographics__day')
    infographicsDay.innerText = this._formatDay(day);
    infographicsDates.append(infographicsDay)

    const ingographicsLine = document.createElement('p');
    ingographicsLine.classList.add('ingographics__line')
    ingographicsLine.style.width = result[day] / sum * 100 + '%'
    ingographicsLine.innerText = result[day]
    infographicsLines.append(ingographicsLine)
    });
  }

  _formatDay(publishedAt) {
    const date = new Date (publishedAt);
    const daysWeek = {
      '1': 'пн',
      '2': 'вт',
      '3': 'ср',
      '4': 'чт',
      '5': 'пт',
      '6': 'сб',
      '0': 'вс',
    }
    return`${date.getDate()}, ${daysWeek[date.getDay()]}`
  }

  _formatMounth (publishedAt) {
    const date = new Date(publishedAt);
    const mounth = {
      '0': 'январь',
      '1': 'февраль',
      '2': 'март',
      '3': 'апрель',
      '4': 'май',
      '5': 'июнь',
      '6': 'июль',
      '7': 'август',
      '8': 'сентябрь',
      '9': 'октябрь',
      '10': 'ноябрь',
      '11': 'декабрь',
    }
      return `${mounth[date.getMonth()]}`
  }

  _formatDate (dateFromArg) {
    const result = new Date (dateFromArg)
     return`${result.getMonth() + 1}.${result.getDate()}.${result.getFullYear()}`
  }
}
