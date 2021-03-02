import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeLinkButton from './HomeLinkButton';
import VolunteerHomeLinkButton from './VolunteerHomeLinkButton';
import SchoolHomeLinkButton from './SchoolHomeLinkButton'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <VolunteerHomeLinkButton
          title="1365"
          uri="https://www.1365.go.kr/vols/main.do"
        />
        <VolunteerHomeLinkButton
          title="VMS"
          uri="https://www.vms.or.kr/main.do"
        />
        <VolunteerHomeLinkButton
          title="Dovol"
          uri="https://www.youth.go.kr/youth/"
        />
        <SchoolHomeLinkButton
          title="쌍용고등학교"
          uri="http://www.sy.caehs.kr/"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1
  }
})

