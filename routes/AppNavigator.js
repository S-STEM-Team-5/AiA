import * as React from 'react';
import { createStackNavigator } from 'react-navigation'
import AllDoneView from '../src/Views/AllDoneView';
import ViewTasksView  from '../src/Views/ViewTasksView';
import AddTaskView from '../src/Views/AddTaskView';

const AppNavigator = createStackNavigator({
    Main: {screen: ViewTasksView },
    AddTask: { screen: AddTaskView },
    AllDone: { screen: AllDoneView }
},
{
    initialRouteName: "Main",
    
    // Global
    defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: "#0057e7",  
        textAlign: "center"  
        },
    headerTitleStyle: {
        fontWeight: 'bold',
        }
    }
})


// Exposes Routing to the app
export default AppNavigator;