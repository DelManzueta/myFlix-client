import { createBottomTabNavigator } from 'react-navigation'
import { MainView }                 from '../components/MainView/main-view'
import { ProfileView }              from '../components/ProfileView/profile-view'

const LoggedInNavigator = createBottomTabNavigator({
  MainView: {
    screen: MainView
  },
  ProfileView: {
    screen: ProfileView
  }
})

export default LoggedInNavigator
