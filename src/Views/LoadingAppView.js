import * as React from 'react';
import {
    View,
    Text,
    Button,
    ActivityIndicator,
    StyleSheet
} from 'react-native';

import TresorLogo from '../components/tresorLogo';
import ViewTasks from '../components/taskList';
import { AppNavigator } from "/home/kamto/GitHub/myProjects/other/SMART-TODO/task-app/routes/AppNavigator.js";

export default class LoadingApp extends React.Component {
    constructor(){
        super();
    }
    
    render(){            
            return (
                <View>
                <TresorLogo />
                <ActivityIndicator size='large' color="black" />
                {/* <Button title="Enter the Void" onPress={ () => {nextState}} /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        // textAlign: 'center',
        // padding: "30",
        // width: "80",
        // height: "200"
    }
})