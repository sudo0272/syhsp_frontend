import React, {
  Component
} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import AccountDatat from '../models/AccountData';
import Profile from './Profile';

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Profile
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  }
});

