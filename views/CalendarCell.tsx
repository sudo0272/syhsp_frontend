import React from 'react';
import {
  Component
} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class CalendarCell extends Component<CalendarCellProps, CalendarCellState> {
  constructor(props: CalendarCellProps) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.isToday ? styles.today : {}, !this.props.isToday && this.props.isSelected && styles.selected]}
        onPress={(() => {this.props.day && this.props.onPress && this.props.onPress(this.props.day)}).bind(this)}
      >
        <Text>
          { this.props.day &&
            this.props.day }
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5
  },

  today: {
    borderRadius: 20,
    backgroundColor: '#b1d4e0'
  },

  selected: {
    borderRadius: 20,
    backgroundColor: '#ff6961'
  }
});

interface CalendarCellProps {
  day?: number;
  isToday?: boolean;
  isSelected?: boolean;
  onPress?: Function
};

interface CalendarCellState {
}

