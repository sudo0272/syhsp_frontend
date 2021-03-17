import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

export default class CalendarDataComponent extends Component<CalendarDataComponentProps, CalendarDataComponentState> {
  constructor(props: CalendarDataComponentProps) {
    super(props);

    this.state = {
    };
  }
}

export interface CalendarDataComponentProps {
  data: Array<any>;
}

interface CalendarDataComponentState {
}

export const CalendarDataComponentStyle= StyleSheet.create({
  container: {
    justifyContent: 'center',
  },

  text: {
    textAlign: 'center',
    fontSize: 20,
  },
})


