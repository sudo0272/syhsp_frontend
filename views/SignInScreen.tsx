import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class SignInScreen extends Component<SignInScreenProps, SignInScreenState> {
  constructor(props: SignInScreenProps) {
    super(props);

    this.state = {
      isSignInSuccessed: false
    }
  }

  render() {
    let userPhoneNumber: string;
    let userId: string;
    let userNickname: string;
    let userGrade: number;
    let userClass: number;
    let userNumber: number;

    AsyncStorage.getItem('user-data')
    .then(value => {
      if (value === null) {
        return Promise.reject('user-data-not-found');
      }

      let userData: UserData = JSON.parse(value);
      userPhoneNumber = userData.phoneNumber;
      userId = userData.id;
      userNickname = userData.nickname;
      userGrade = parseInt(userData.grade);
      userClass = parseInt(userData.class);
      userNumber = parseInt(userData.number);

    }).catch(reason => {
      switch (reason) {
        case 'user-data-not-found':
          ;
        default:
          ;
      }
    });

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          로그인
        </Text>
        <View>
          <View style={styles.questionContainer}>
            <Text style={styles.question}>
              전화번호
            </Text>
            <TextInput style={styles.answer}
              keyboardType="phone-pad"
              placeholder="010-0000-0000"
              maxLength={13}
            />
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.question}>
              비밀번호
            </Text>
            <TextInput style={[styles.answer, styles.password]}
              keyboardType="default"
              placeholder="*************"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.accountButtonContainer}>
          <TouchableOpacity
            onPress={() => {}} // sign in
          >
            <Text style={styles.accountText}>로그인</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.accountOr}>
          또는
        </Text>
        <View style={[styles.accountButtonContainer]}>
          <TouchableOpacity
            onPress={() => {this.props.onSignUp && this.props.onSignUp()}} // sign in
          >
            <Text style={styles.accountText}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },

  title: {
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 60
  },

  questionContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 20
  },

  question: {
    fontSize: 20,
    textAlign: 'right',
  },

  answer: {
    fontSize: 20,
    textAlign: 'left',
    overflow: 'scroll',
    flexWrap: 'wrap'
  },

  password: {
    textAlign: 'center'
  },

  accountButtonContainer: {
    textAlign: 'center',
    alignItems: 'center'
  },

  accountText: {
    fontSize: 19,
    textAlign: 'center',
    backgroundColor: '#c5c5e6',
    width: 100,
    paddingVertical: 3,
    borderRadius: 25
  },

  accountOr: {
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 7
  }
});

interface SignInScreenProps {
  onSignUp?: Function;
}

interface SignInScreenState {
  isSignInSuccessed: boolean;
}

interface UserData {
  phoneNumber: string;
  id: string;
  nickname: string;
  grade: string;
  class: string;
  number: string;
}

