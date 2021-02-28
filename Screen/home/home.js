import React from 'react'

import {
  View,
  Text,
} from 'react-native'

import styles from './homeStyles'

const Home = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.content} >Home Screen</Text>
    </View>
  )
}

export default Home