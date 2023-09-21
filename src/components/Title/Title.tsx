import {View, Text} from 'react-native';
import React from 'react';
import {ITitle} from '@types';
import {styles} from './styles';

const Title = ({title}: ITitle) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title;
