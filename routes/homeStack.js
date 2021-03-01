import { createStackNavigator } from 'react-navigation-stack'

import { createAppContainer } from 'react-navigation'

import Home from '../Screen/home/home'
import ReviewDetails from '../Screen/reviewDetails/reviewDetails'
import About from '../Screen/about/about'

const screens = {

  Home: {
    screen: Home
  },

  ReviewDetails: {
    screen: ReviewDetails
  },

  About: {
    screen: About
  }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)