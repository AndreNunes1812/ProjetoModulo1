import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View , Text} from 'react-native'

const Todo = ({title}) => (
    <View style={styles.container}>
        <Text>{title}</Text>
    </View>
)
    
Todo.propTypes = {
    title: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
});

export default Todo