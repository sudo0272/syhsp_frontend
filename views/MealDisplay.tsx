import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import MealCalendarDataComponent from './MealCalendarDataComponent';
import Swiper from 'react-native-swiper';
import CalendarDataComponent, {CalendarDataComponentProps} from './CalendarDataComponent';
import ErrorScreen from './ErrorScreen'

export default class MealDisplay extends CalendarDataComponent {
  constructor(props: CalendarDataComponentProps) {
    super(props);
  }

  render() {
    return (
      <Swiper
        horizontal={false}
      >
        <View style={styles.container}>
          <Text style={styles.subtitle}>
            중식
          </Text>
          {this.props.data[0].length !== 0
            ? <MealCalendarDataComponent
                data={this.props.data[0]}
               />
            : <ErrorScreen
                reason="api"
                apiErrorMessage="중식 데이터가 없습니다"
              />
          }
        </View>
        <View style={styles.container}>
          <Text style={styles.subtitle}>
            석식
          </Text>
          {this.props.data[1].length !== 0
            ? <MealCalendarDataComponent
                data={this.props.data[1]}
               />
            : <ErrorScreen
                reason="api"
                apiErrorMessage="석식 데이터가 없습니다"
              />
          }
        </View>
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly'
  },

  subtitle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 25
  }
});

