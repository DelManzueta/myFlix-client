import { createStackNavigator } from 'react-navigation'

import Login                    from '../components/LoginView/login'

const LoggedOutNavigator = createStackNavigator({
  Login: {
    screen: Login
  }
});

export default LoggedOutNavigator