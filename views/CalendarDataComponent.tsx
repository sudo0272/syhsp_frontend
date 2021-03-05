import React, { Component } from 'react';
import {
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

