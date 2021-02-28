/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';



const App = () => {
  return (
    <>
      <View>
        <Text style={styles.title} >Game Zone 01</Text>
        <Text style={styles.content} >Have a nice day!</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  default: {
  },

  container: {
    backgroundColor: 'white',
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },

  content: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'blue',
  },

});

export default App;
