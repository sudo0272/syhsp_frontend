import NEISDatasetCrawler from './NEISDatasetCrawler';
import AccountData from './AccountData';

export default class ScheduleDatasetCrawler extends NEISDatasetCrawler {
  setArguments() {
    this.requestArguments.url = 'https://open.neis.go.kr/hub/SchoolSchedule';
    this.requestArguments.aa_ymd = this.requestArguments.ymd;
  }

  manufacture(data: any): Array<any> {
    let contents = [];
    let accountData = AccountData.getInstance();
    let inCheck: string;

    inCheck = ['ONE_GRADE_EVENT_YN', 'TW_GRADE_EVENT_YN', 'THREE_GRADE_EVENT_YN'][(accountData.getGrade() as number) - 1];

    for (const content of data['SchoolSchedule'][1]['row']) {
      if (content[inCheck] === 'Y') {
        contents.push([content['EVENT_NM'], content['EVENT_CNTNT']]);
      }
    }

    return contents;
  }
}

