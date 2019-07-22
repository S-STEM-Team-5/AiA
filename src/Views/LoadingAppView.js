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

export default class LoadingApp extends React.Component {
    constructor(){
        super();
    }
    
    // async loadResources() {
        //     // Loads up Apps Resources
        //     items = await require('../assets/tresor-xi.png') //Loads asset files
        //     nav.navigate(items ? 'MainApp' : 'AllDone')
        // }
        
        render(){
            return (
                <View>
                <TresorLogo style={styles.image} />
                <Button text='Enter the Void ' onPress={ () => {alert("Welcome to the APP")}} />
                <ActivityIndicator size='large' color="green" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        textAlign: 'auto',
        padding: "30",
        width: "80",
        height: "200"
    }
})