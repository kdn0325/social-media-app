import {View, Text} from 'react-native';
import React from 'react';
import styled, {css} from '@emotion/native';

const title = () => {
  return (
    <View>
      <Text
        style={css`
          border-radius: 10px;
        `}>
        title
      </Text>
    </View>
  );
};

export default title;
