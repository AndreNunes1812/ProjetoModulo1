import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

import colors from '../util/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.azulClaro,
  },
});

const Todo = ({ title }) => (
  <View style={styles.container}>
    <Text>{title}</Text>
  </View>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Todo;
