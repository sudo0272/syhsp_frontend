import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, TouchableWithoutFeedback, Linking } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HomeLinkButton extends Component<HomeLinkButtonProps> {
  backgroundColor: string;
  icon: string;

  constructor(props: HomeLinkButtonProps) {
    super(props);

    // will be chagned in inherited class
    this.backgroundColor = '';
    this.icon = '';
  }

  private openLink() {
    Linking.openURL(this.props.uri)
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
            {this.props.title}
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

export interface HomeLinkButtonProps {
  title: string;
  uri: string;
}

