import React from 'react';
import CalendarDataComponent, { CalendarDataComponentProps } from './CalendarDataComponent';
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
        <Text style={styles.text}>
          { meal }
        </Text>
      );
    }

    return (
      <View style={styles.container}>
        { meals }
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
})

