import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';
import {NEISDatasetError} from '../models/NEISDatasetCrawler';

export default class ErrorScreen extends Component<ErrorScreenProps> {
  errorMessage: string;

  constructor(props: ErrorScreenProps) {
    super(props);

    switch (this.props.reason) {
      case 'api':
        this.errorMessage = this.props.apiErrorMessage || '서버에서 값을 읽어올 수 없습니다';
        break;

      case 'fetch':
        this.errorMessage = this.props.fetchErrorMessage || '서버에서 값을 읽어올 수 없습니다';
        break;

      case 'user-data':
        this.errorMessage = this.props.userDataErrorMessage || '학년과 반을 설정해주세요';
        break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.errorMessage}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 20
  }
});

interface ErrorScreenProps extends ErrorScreenMessages{
  reason: NEISDatasetError;
}

export interface ErrorScreenMessages {
  apiErrorMessage?: string;
  fetchErrorMessage?: string;
  userDataErrorMessage?: string;
}

