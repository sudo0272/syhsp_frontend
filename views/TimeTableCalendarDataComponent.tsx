import React from 'react';
import CalendarDataComponent, { CalendarDataComponentProps, CalendarDataComponentStyle } from './CalendarDataComponent';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { v4 as uuidv4 } from 'react-native-uuid';

export default class TimeTableCalendarDataComponent extends CalendarDataComponent {
  constructor(props: CalendarDataComponentProps) {
    super(props);
  }

  render() {
    let contents = [];

    for (const content of this.props.data) {
      contents.push(
        <Text
          style={CalendarDataComponentStyle.text}
          key={ uuidv4() }
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

