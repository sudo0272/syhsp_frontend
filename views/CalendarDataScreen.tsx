import React from 'react';
import {
  Component
} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import LoadingScreen from './LoadingScreen';
import NEISDatasetCrawler, { NEISDatasetError, NEISDatasetResult } from '../models/NEISDatasetCrawler'
import CalendarDataComponent from './CalendarDataComponent';
import ErrorScreen, { ErrorScreenMessages } from './ErrorScreen';

export default class CalendarDataScreen extends Component<CalendarDataProps, CalendarDataState> {
  crawler: NEISDatasetCrawler;
  data: Array<any>;

  constructor(props: CalendarDataProps) {
    super(props);

    this.state = {
      error: undefined,
      isLoaded: false,
      year: this.props.year,
      month: this.props.month,
      day: this.props.day
    };
    this.data = [];

    this.crawler = new props.crawler();
  }

  componentDidMount() {
    this.updateData();
  }

  updateData() {
    let error: NEISDatasetError | undefined;
    this.setState({
      isLoaded: false
    });

    this.crawler
    .process(this.state.year, this.state.month, this.state.day)
    .then(data => {
      error = undefined;
      this.data = data;
    }).catch((reason: NEISDatasetError) => {
      error = reason;
    }).finally(() => {
      this.setState({
        isLoaded: true,
        error: error
      });
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps: CalendarDataProps) {
    if (nextProps.day !== this.state.day || nextProps.month !== this.state.month || nextProps.year !== this.state.year) {
      this.setState({
        year: nextProps.year,
        month: nextProps.month,
        day: nextProps.day
      }, () => {
        this.updateData();
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.subject}>
          {this.props.subject}
        </Text>
        {!!this.state.isLoaded
          ? !this.state.error
            ? <View style={{flex: 1, justifyContent: 'center'}}>
                <this.props.component
                  data={ this.data }
                />
              </View>
            : <ErrorScreen
                reason={this.state.error}
                apiErrorMessage={this.props.apiErrorMessage}
                fetchErrorMessage={this.props.fetchErrorMessage}
                userDataErrorMessage={this.props.userDataErrorMessage}
              />
          : <LoadingScreen />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: 70
  },

  subject: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

interface CalendarDataProps extends ErrorScreenMessages {
  year: number;
  month: number;
  day: number;
  crawler: typeof NEISDatasetCrawler;
  component: typeof CalendarDataComponent;
  subject: string;
}

interface CalendarDataState {
  error?: NEISDatasetError;
  isLoaded: boolean;
  year: number;
  month: number;
  day: number;
}

