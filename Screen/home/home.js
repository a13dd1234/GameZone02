import React from 'react'

import {
  View,
  Text,
  Button,
} from 'react-native'

import styles from './homeStyles'

const Home = ({ navigation }) => {

  const pressHandler = (ScrNo) => {
    if (ScrNo) navigation.navigate('About')
    else navigation.navigate('ReviewDetails')
  }

  return (
    <View style={styles.container} >
      <View style={styles.container} >
        <Text style={styles.content} >Home Screen</Text>
      </View>
      <View style={styles.buttonContainer} >
        <Button title="go to review dets" onPress={()=> navigation.navigate('ReviewDetails')} />
      </View>
      <View style={styles.buttonContainer} >
        <Button title="go to about" onPress={()=> navigation.navigate('About')} />
      </View>
    </View>
  )
}

export default Home