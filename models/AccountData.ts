export default class AccountData {
  private static instance: AccountData;
  private userData: UserData;

  private constructor() {
    this.userData = {
      //name: 'test_name',
      //nickname: 'test_nickname',
      //phoneNumber: '01012345678',
      grade: 3,
      class: 12,
      //number: 1,
      //id: 'test_id'
    }
  }

  static getInstance(): AccountData {
    if (!AccountData.instance) {
      AccountData.instance = new AccountData();
    }

    return AccountData.instance;
  }

  //getName() {
    //return this.userData.name;
  //}

  //getNickname() {
    //return this.userData.nickname;
  //}

  //getPhoneNumber() {
    //return this.userData.phoneNumber;
  //}

  //getFormattedPhoneNumber() {
    //return [
      //this.userData.phoneNumber.slice(0, 3),
      //this.userData.phoneNumber.slice(3, 7),
      //this.userData.phoneNumber.slice(7, 11)
    //].join('-');
  //}

  getGrade() {
    return this.userData.grade;
  }

  getClass() {
    return this.userData.class;
  }

  //getNumber() {
    //return this.userData.number;
  //}

  //getSchoolNumber() {
    //return (
      //this.getGrade() * 10000 +
      //this.getClass() * 100 +
      //this.getNumber()
    //);
  //}

  //getId() {
    //return this.userData.id;
  //}

  isAvailable() {
    return true;
  }
}

export interface UserData {
  //name: string;
  //nickname: string;
  //phoneNumber: string;
  grade: number;
  class: number;
  //number: number;
  //id: string;
}

