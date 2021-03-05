import React from 'react';
import {
  Component
} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import CalendarCell from './CalendarCell';

export default class Calendar extends Component<CalendarProps, CalendarState> {
  constructor(props: CalendarProps) {
    super(props);

    this.state = {
      today: {
        year: props.year,
        month: props.month,
        day: props.day
      },
      year: props.year,
      month: props.month,
      day: props.day
    };
  }


  componentWillReceiveProps(nextProps: CalendarProps) {
    if (nextProps.day !== this.state.day ||
        nextProps.month !== this.state.month ||
        nextProps.year !== this.state.year) {
      this.setState({
        year: nextProps.year,
        month: nextProps.month,
        day: nextProps.day
      });
    }
  }

  render() {
    let dates: (number|undefined)[] = [];
    let start: number = new Date(this.state.year, this.state.month, 1).getDay();
    let last: number = new Date(this.state.year, this.state.month + 1, 0).getDate();

    for (let i = 0; i < start; i++) {
      dates.push(undefined);
    }

    for (let i = 1; i <= last; i++) {
      dates.push(i);
    }

    for (let i = 0; i < 35 - last; i++) {
      dates.push(undefined);
    }

    let calendarRows = [];
    let datesIndex = 0;

    for (let i = 0; i < 5; i++) {
      let cells = [];

      for (let j = 0; j < 7; datesIndex++, j++) {
        cells.push(
          <CalendarCell
            day={ dates[datesIndex] }
            isToday={ this.state.year === this.state.today.year && this.state.month === this.state.today.month && dates[datesIndex] === this.state.today.day }
            isSelected={ this.state.day === dates[datesIndex] }
            onPress={((day: number | undefined) => { day !== undefined && this.props.onDateChange(this.state.year, this.state.month, day); }).bind(this)}
          />
        );
      }

      calendarRows.push(
        <View style={styles.row}>
          { cells }
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.yearMonth}>
          {this.state.year}년 {this.state.month + 1}월
        </Text>
        <View style={styles.dayOfWeek}>
          <Text>일</Text>
          <Text>월</Text>
          <Text>화</Text>
          <Text>수</Text>
          <Text>목</Text>
          <Text>금</Text>
          <Text>토</Text>
        </View>
        <View style={styles.calendar}>
          { calendarRows }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: 25,
  },

  yearMonth: {
    fontSize: 17,
    textAlign: 'center',
    marginVertical: 10
  },

  dayOfWeek: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  calendar: {
    flexDirection: 'column',
    paddingBottom: 5
  },

  row: {
    flexDirection: 'row',
  }
});

interface CalendarProps {
  year: number;
  month: number;
  day: number;
  onDateChange: Function;
}

interface CalendarState {
  today: {
    year: number;
    month: number;
    day: number;
  };
  year: number;
  month: number;
  day: number;
}

