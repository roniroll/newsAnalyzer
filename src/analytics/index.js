import '../pages/analytics-page.css';
import Statistics from '../js/componets/Statistics.js';
import DataStorage from '../js/modules/DataStorage.js';

const statistics = new Statistics (new DataStorage)

statistics.renderAnalytics()

statistics.renderDay()

