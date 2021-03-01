/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import styles from './AppStyles'

import Navigator from '../../routes/homeStack'

const App = () => {
  return (
    <>
      {/* <View>
        <Text style={styles.title} >Game Zone 01</Text>
        <Text style={styles.content} >Have a nice day!</Text>
      </View> */}
      <Navigator />
    </>
  );
};

export default App;
