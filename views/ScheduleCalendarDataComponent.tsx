import React from 'react';
import CalendarDataComponent, { CalendarDataComponentProps } from './CalendarDataComponent';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class ScheduleCalendarDataComponent extends CalendarDataComponent {
  constructor(props: CalendarDataComponentProps) {
    super(props);
  }

  render() {
    let contents = [];

    for (const content of this.props.data) {
      contents.push(
        <Text
          style={styles.text}
        >
          { content }
        </Text>
      );
    }

    return (
      <View style={styles.container}>
        { contents }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },

  text: {
    textAlign: 'center',
    fontSize: 20
  }
});

