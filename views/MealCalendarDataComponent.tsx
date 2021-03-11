import React from 'react';
import CalendarDataComponent, { CalendarDataComponentProps, CalendarDataComponentStyle } from './CalendarDataComponent';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class MealCalendarDataComponent extends CalendarDataComponent {
  constructor(props: CalendarDataComponentProps) {
    super(props);
  }

  render() {
    let meals = [];

    for (const meal of this.props.data) {
      meals.push(
        <Text
          style={CalendarDataComponentStyle.text}
          key={meal}
        >
          { meal }
        </Text>
      );
    }

    return (
      <View style={CalendarDataComponentStyle.container}>
        { meals }
      </View>
    )
  }
}

