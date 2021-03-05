export default class NeisDatasetCrawler {
  requestArguments: RequestArguments;
  data: {[key: string]: any};
  error?: NEISDatasetError;

  constructor() {
    this.requestArguments = {
      key: '5dfb7f5aeb654d3881070d2170fd9b61',
      type: 'json',
      pIndex: '1',
      pSize: '100',
      atpt_ofcdc_sc_code: 'N10',
      sd_schul_code: '8140219',
      ymd: '',
      url: ''
    };

    this.data = {};
  }

  // will be overridden
  setArguments(): void {
  }

  process(year: number, month: number, day: number): Promise<NEISDatasetResult> {
    this.requestArguments.ymd = year.toString().padStart(4, '0') + (month + 1).toString().padStart(2, '0') + day.toString().padStart(2, '0')
    this.setArguments();

    if (this.error) {
      return Promise.reject('user-data');
    } else {
      return this.request()
      .then((data: JSON) => {
        if ('RESULT' in data) {
          return Promise.reject('api');
        } else {
          return Promise.resolve(this.manufacture(data))
        }
      });
    }
  }

  request(): Promise<JSON> {
    let requestUrl: string = this.requestArguments.url;
    requestUrl += '?';

    for (const [key, value] of Object.entries(this.requestArguments)) {
      requestUrl += key;
      requestUrl += '=';
      requestUrl += value;
      requestUrl += '&';
    }

    return fetch(requestUrl, {
      method: 'GET',
    }).then(data => {
      return data.json();
    }).catch(() => {
      return Promise.reject('fetch');
    });
  }

  // will be overridden
  manufacture(data: any): Array<any> {
    return []
  }
}

interface RequestArguments  {
  key: string;
  type: string;
  pIndex: string;
  pSize: string;
  atpt_ofcdc_sc_code: string;
  sd_schul_code: string;
  ymd: string;
  url: string;
  [key: string]: string;
}

export type NEISDatasetResult = Array<any>;

export type NEISDatasetError = 'fetch' | 'api' | 'user-data';

