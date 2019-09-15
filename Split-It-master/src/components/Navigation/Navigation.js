import React, { Component } from 'react';
import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer,
  } from 'react-navigation';
import Homepage2 from '../Homepage/Homepage2'
import Contactpage from '../Contacts/Contactpage'
import Equally from '../Split/Equally/Equally'
import Percentage from '../Split/Percentage/Percentage'
import Receipt from '../Split/Receipt/Receipt'
import Calculate from '../Calculate/Calculate'
import Login from '../Login/Login'
import Records from '../Records/Records'
import Notifications from '../Notifications/Notifications'
import More from '../More/More'
import Profile from '../More/Profile'
import Help from '../More/Help/Help'
import Language from '../SignUp/Language'
import SignupForm from '../SignUp/SignupForm'
import Profilepage from '../SignUp/Profilepage'

export default class Navigation extends Component {
    render() {
      return (
        <AppContainer />
      );
    }
  }

const SplitSwitchNavigator = createSwitchNavigator({
    Equally: Equally,
    Percentage: Percentage,
    Calculate: Calculate,
    Receipt: Receipt,
  })
  
  const MoreStackNavigator = createStackNavigator({
    More: More,
    Profile: Profile,
    Help: Help,
  })
  
  const NotificationsStackNavigator = createStackNavigator({
    Notifications: Notifications,
  })
  
  const RecordsStackNavigator = createStackNavigator({
    Records: Records,
  })
  
  const HomeStackNavigator = createStackNavigator({
    Homepage: Homepage2,
    SplitButton: Contactpage,
    Splitpage: SplitSwitchNavigator
  },
    {
      defaultNavigationOptions: {
        headerTitle: 'SPLIT!',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
  );
  
  const HomeSwitchNavigator = createSwitchNavigator({
    Homepage: HomeStackNavigator,
    Records: RecordsStackNavigator,
    Notifications: NotificationsStackNavigator,
    More: MoreStackNavigator,
  })
  
  const MainNavigator = createSwitchNavigator({
    Login: Login,
    Homepage: HomeSwitchNavigator,
    SignupForm: SignupForm,
    Language: Language,
    Profile: Profilepage,
  })
  
  const AppContainer = createAppContainer(MainNavigator);

