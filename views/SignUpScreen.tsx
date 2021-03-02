import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class SignUpScreen extends Component<SignUpScreenProps> {
  constructor(props: SignUpScreenProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          회원가입
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
              아이디
            </Text>
            <TextInput style={styles.answer}
              keyboardType="default"
              placeholder="ssangyong"
            />
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.question}>
              닉네임
            </Text>
            <TextInput style={styles.answer}
              keyboardType="default"
              placeholder="세미콜론 최고"
            />
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.question}>
              학번
            </Text>
            <TextInput style={styles.answer}
              keyboardType="numeric"
              placeholder="00000"
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
          <View style={styles.questionContainer}>
            <Text style={styles.question}>
              비밀번호 확인
            </Text>
            <TextInput style={[styles.answer, styles.password]}
              keyboardType="default"
              placeholder="*************"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={[styles.accountButtonContainer]}>
          <TouchableOpacity
            onPress={() => {}} // sign up
          >
            <Text style={styles.accountText}>회원가입</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.accountOr}>
          또는
        </Text>
        <View style={styles.accountButtonContainer}>
          <TouchableOpacity
            onPress={() => {this.props.onSignIn && this.props.onSignIn()}} // sign in
          >
            <Text style={styles.accountText}>로그인</Text>
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

interface SignUpScreenProps {
  onSignIn?: Function;
}

