import React from 'react';
import CalendarDataComponent, { CalendarDataComponentProps, CalendarDataComponentStyle } from './CalendarDataComponent';
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
          style={CalendarDataComponentStyle.text}
        >
          { content }
        </Text>
      );
    }

    return (
      <View style={CalendarDataComponentStyle.container}>
        { contents }
      </View>
    )
  }
}

