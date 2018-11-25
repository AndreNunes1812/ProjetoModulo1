import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import Todo from './components/Todo';

import colors from './util/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.azulClaro,
  },
});

export default class App extends Component {
  state = {
    todos: [
      { id: 0, text: 'Estudar JavaScript' },
      { id: 1, text: 'Estudar React Native' },
      { id: 2, text: 'Estudar Oracle' },
      { id: 3, text: 'Estudar Bilbia Sagrada' },
    ],
  };

  addTodo = () => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos, { id: Math.random(), text: 'Estudar React' }],
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <View style={styles.container}>
        {todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button title="Adcionar todo" onPress={this.addTodo} />
      </View>
    );
  }
}
