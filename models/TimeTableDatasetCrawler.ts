import NEISDatasetCrawler from './NEISDatasetCrawler';
import AccountData from './AccountData';

export default class TimeTableDatasetCrawler extends NEISDatasetCrawler {
  setArguments() {
    let accountData = AccountData.getInstance();

    this.requestArguments.url = 'https://open.neis.go.kr/hub/hisTimetable';
    this.requestArguments.all_ti_ymd = this.requestArguments.ymd;

    if (accountData.isAvailable()) {
      this.requestArguments.grade = (accountData.getGrade() as number).toString();
      this.requestArguments.class_nm = (accountData.getClass() as number).toString();
    } else {
      this.error = 'user-data';
    }
  }

  manufacture(data: any): Array<any> {
    let result = [];
    for (const content of data['hisTimetable'][1]['row']) {
      result.push(content['ITRT_CNTNT']);
    }

    return result;
  }
}

