import React from 'react';
import {
    createSwitchNavigator
} from 'react-navigation';

import LoadingAppView from '../src/Views/LoadingAppView'

// import MainApp from './AppNavigator'

import MainApp from '../src/Views/ViewTasksView'
// Only for Authentication / Loading Screen

const authFlow = createSwitchNavigator({
    Init: { screen: LoadingAppView }, //This is the 'loading' screen
    Main: {screen: MainApp } //Segways into the MainApp
}, {
    initialRouteName: 'Init'
})

export default authFlow;


/**
 * API Definitions
 * createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig) -- https://reactnavigation.org/docs/en/switch-navigator.html#example
 * 
 *  */