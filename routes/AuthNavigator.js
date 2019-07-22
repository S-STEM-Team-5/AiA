import React from 'react';
import {
    createSwitchNavigator
} from 'react-navigation';

import LoadingAppView from '../src/Views/LoadingAppView'

// import MainApp from './AppNavigator'

import AppNavigator from './AppNavigator';
// Only for Authentication / Loading Screen

const authFlow = createSwitchNavigator({
    Init: LoadingAppView, //This is the 'loading' screen
    // Auth: AuthNavigator,  //For login screens
    Main: AppNavigator //Segways into the MainApp
}, {
    initialRouteName: 'Init'
})

export default authFlow;


/**
 * API Definitions
 * createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig) -- https://reactnavigation.org/docs/en/switch-navigator.html#example
 * 
 *  */