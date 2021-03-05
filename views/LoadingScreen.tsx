import React from 'react';
import {
  Component
} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class LoadingScreen extends Component<LoadingScreenProps, LoadingScreenState> {
  constructor(props: LoadingScreenProps) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>
          데이터 받아오는 중...
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

interface LoadingScreenProps {
}

interface LoadingScreenState {
}

