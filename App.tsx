import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {css} from '@emotion/native';

const styles = {
  container: css`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #3498db;
  `,
  text: css`
    color: #fff;
    font-size: 24px;
    font-family: 'Inter';
  `,
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Abel study</Text>
    </SafeAreaView>
  );
};

export default App;
