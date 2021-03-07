import React, { Component } from 'react';
import { } from 'react-native'
import MainScreen from './views/MainScreen';
import SignInScreen from './views/SignInScreen';
import SignUpScreen from './views/SignUpScreen';
import AccountData from './models/AccountData';

export default class App extends Component<AppProps, AppState> {
  accountData: AccountData;

  constructor(props: any) {
    super(props);

    this.accountData = AccountData.getInstance();

    this.state = {
      isLoggedIn: false,
      activity: 'sign-in'
    };
  }

  componentDidMount() {
    if (this.accountData.isAvailable()) {
      this.setState({
        isLoggedIn: true,
        activity: 'main'
      });
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      return <MainScreen />;
    } else if (this.state.activity === 'sign-in') {
      return (
        <SignInScreen
          onSignUp={() => { this.setState({activity: 'sign-up'}); }}
        />);
    } else {
      return (
        <SignUpScreen
          onSignIn={() => { this.setState({activity: 'sign-in'}) }}
        />
      );
    }
  }
}

interface AppProps {
}

interface AppState {
  isLoggedIn: boolean;
  activity: string
}

