import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Calendar from './Calendar';
import Swiper from 'react-native-swiper';
import CalendarDataScreen from './CalendarDataScreen';
import TimeTableDatasetCrawler from '../models/TimeTableDatasetCrawler';
import TimeTableCalendarDataComponent from './TimeTableCalendarDataComponent';
import ScheduleDatasetCrawler from '../models/ScheduleDatasetCrawler';
import ScheduleCalendarDataComponent from './ScheduleCalendarDataComponent';
import MealDisplay from './MealDisplay';
import MealDatasetCrawler from '../models/MealDatasetCrawler';

export default class CalendarScreen extends Component<CalendarScreenProps, CalendarScreenState> {
  swiper: Swiper | null;

  constructor(props: CalendarScreenProps) {
    super(props);

    let today = new Date();

    this.state = {
      year: today.getFullYear(),
      month: today.getMonth(),
      day: today.getDate()
    };

    this.swiper = null;
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          showsPagination={false}
          showsButtons={false}
          loop={false}
          index={1}
          ref={swiper => { this.swiper = swiper; }}
          onIndexChanged={((index: number) => {
            console.log(index);
            switch (index) {
              case 0:
                this.setState({
                  year: this.state.month === 0 ? this.state.year - 1 : this.state.year,
                  month: this.state.month === 0 ? 11 : this.state.month - 1
                }, () => {
                  this.swiper?.scrollTo(1);
                });

                break;

              case 2:
                this.setState({
                  year: this.state.month === 11 ? this.state.year + 1 : this.state.year,
                  month: this.state.month === 11 ? 0 : this.state.month + 1
                }, () => {
                  this.swiper?.scrollTo(1);
                });

                break;
            }
          }).bind(this)}
        >
          <View style={styles.otherMonthContainer}>
            <Text style={styles.otherMonthText}>
              {this.state.month === 0 ? this.state.year - 1 : this.state.year}??? {this.state.month === 0 ? 11 : this.state.month}???
            </Text>
          </View>
          <Calendar
            year={this.state.year}
            month={this.state.month}
            day={this.state.day}
            onDateChange={((year: number, month: number, day: number) => { this.setState({year: year, month: month, day: day});}).bind(this)}
          />
          <View style={styles.otherMonthContainer}>
            <Text style={styles.otherMonthText}>
              {this.state.month === 11 ? this.state.year + 1 : this.state.year}??? {this.state.month === 11 ? 1 : this.state.month + 2}???
            </Text>
          </View>
        </Swiper>
        <Swiper
          // when Swiper's bug is fixed, the value of loop attribute will be true
          loop={false}
          onIndexChanged={(index) => {
            console.log('current index: ', index);
          }}
        >
          <CalendarDataScreen
            year={this.state.year}
            month={this.state.month}
            day={this.state.day}
            component={MealDisplay}
            crawler={MealDatasetCrawler}
            apiErrorMessage="?????? ???????????? ????????????"
            subject="??????"
          />
          <CalendarDataScreen
            year={this.state.year}
            month={this.state.month}
            day={this.state.day}
            component={TimeTableCalendarDataComponent}
            crawler={TimeTableDatasetCrawler}
            apiErrorMessage="????????? ???????????? ????????????"
            subject="?????????"
          />
          <CalendarDataScreen
            year={this.state.year}
            month={this.state.month}
            day={this.state.day}
            component={ScheduleCalendarDataComponent}
            crawler={ScheduleDatasetCrawler}
            apiErrorMessage="???????????? ???????????? ????????????"
            subject="????????????"
          />
        </Swiper>
      </View>
    );
  }
}

interface CalendarScreenProps {
}

interface CalendarScreenState {
  year: number;
  month: number;
  day: number;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },

  otherMonthContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  otherMonthText: {
    fontSize: 25,
    textAlign: 'center'
  }
});

