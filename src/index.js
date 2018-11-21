import React, {Component} from 'react';
import { StyleSheet, View , Button} from 'react-native';

import Todo from './components/Todo'

export default class App extends Component {

  state = {
    todos: [ { id: 0, text: 'Estudar JavaScript'},
             { id: 1, text: 'Estudar React Native'},
           ],
  }

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: 'Estudar React'}]
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        {this.state.todos.map(todo => <Todo key={todo.id} title={todo.text} /> )}
        <Button title="Adcionar todo" onPress={this.addTodo}/>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
