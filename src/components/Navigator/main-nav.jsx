import { createSwitchNavigator } from 'react-navigation'

import LoggedInNavigator         from './LoggedIn'
import LoggedOutNavigator        from './LoggedOut'

export const getRootNavigator = (loggedIn = false) =>
  createSwitchNavigator(
    {
      LoggedOut: {
        screen: LoggedOutNavigator
      },
      LoggedIn: {
        screen: LoggedInNavigator
      }
    },
    {
      initialRouteName: loggedIn ? 'LoggedIn' : 'LoggedOut'
    }
  )
