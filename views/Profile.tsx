import AccountData from '../models/AccountData';
import React, {
  Component
} from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Profile extends Component<ProfileProps, ProfileState> {
  accountData: AccountData;

  constructor(props: ProfileProps) {
    super(props);

    this.state = {
    };

    this.accountData = AccountData.getInstance();
  }

  render() {
    return (
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="account-circle"
          size={100}
          style={styles.userIcon}
        />
        <View style={styles.information}>
          {/*
            *<Text style={styles.name}>
            *  {this.accountData.getName()}
            *</Text>
            *<Text style={styles.nickname}>
            *  {this.accountData.getNickname()}
            *</Text>
            */}
          <Text style={styles.schoolNumber}>
            {this.accountData.getGrade()}학년
            {this.accountData.getClass()}반
          </Text>
          {/*
            *<Text style={styles.phoneNumber}>
            *  {this.accountData.getFormattedPhoneNumber()}
            *</Text>
            */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginHorizontal: 20
  },

  userIcon: {
  },

  information: {
    flexDirection: "column",
    justifyContent: 'space-evenly',
    alignItems: 'flex-end'
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  nickname: {
    fontSize: 15
  },

  schoolNumber: {
    fontSize: 15
  },

  phoneNumber: {
    fontSize: 15
  }
});

export interface ProfileProps {
}

export interface ProfileState {
}

