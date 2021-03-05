import NEISDatasetCrawler from './NEISDatasetCrawler';

export default class MealDatasetCrawler extends NEISDatasetCrawler {
  setArguments() {
    this.requestArguments.url = 'https://open.neis.go.kr/hub/mealServiceDietInfo';
    this.requestArguments.mlsv_ymd = this.requestArguments.ymd;
  }

  manufacture(data: any): Array<any> {
    let meals = [];
    for (const meal of data['mealServiceDietInfo'][1]['row'][0]['DDISH_NM'].split('<br/>')) {
      meals.push(meal);
    }

    return meals;
  }
}

