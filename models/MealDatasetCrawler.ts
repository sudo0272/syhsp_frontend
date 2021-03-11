import NEISDatasetCrawler from './NEISDatasetCrawler';

export default class MealDatasetCrawler extends NEISDatasetCrawler {
  setArguments() {
    this.requestArguments.url = 'https://open.neis.go.kr/hub/mealServiceDietInfo';
    this.requestArguments.mlsv_ymd = this.requestArguments.ymd;
  }

  manufacture(data: any): Array<any> {
    let meals: any[][] = [[], []];
    for (let mealIndex = 0; mealIndex < data['mealServiceDietInfo'][1]['row'].length; mealIndex++) {
      for (const meal of data['mealServiceDietInfo'][1]['row'][mealIndex]['DDISH_NM'].split('<br/>')) {
        meals[mealIndex].push(meal);
      }
    }

    return meals;
  }
}

