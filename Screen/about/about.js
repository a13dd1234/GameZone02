import React from 'react'

import { 
    View,
    Text,
} from 'react-native'

import styles from './aboutStyles'

const About = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.content} >About Screen</Text>
        </View>
    )
}

export default About