import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, TouchableWithoutFeedback, Linking } from 'react-native';
import HomeLinkButtonProps from '../interfaces/HomeLinkButtonProps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HomeLinkButton extends Component<HomeLinkButtonProps> {
  title: string;
  uri: string;
  icon: string;
  backgroundColor: string;

  constructor(props: HomeLinkButtonProps) {
    super(props);

    this.title = props.title;
    this.uri = props.uri;
    this.icon = props.icon;
    this.backgroundColor = props.backgroundColor;
  }

  private openLink() {
    Linking.openURL(this.uri)
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.openLink.bind(this)}
      >
        <View
          style={styles.container}
        >
          <MaterialCommunityIcons
            name={this.icon}
            size={25}
            style={[styles.icon, { backgroundColor: this.backgroundColor }]}
          />
          <Text
            style={styles.label}
          >
            {this.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center'
  },

  icon: {
    color: 'white',
    padding: 9,
    borderRadius: 50,
    margin: 5
  },

  label: {
    fontSize: 13,
    marginTop: 5
  }
});

