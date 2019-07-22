import * as React from 'react';
import {
    View,
    Text,
    Button,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import abstractViewClass from './abstractViewClass';
// Components
import TresorLogo from '../components/tresorLogo';


class LoadingApp extends abstractViewClass {
    constructor(){
        super();
        this._loadContent();
    }

    _loadContent = async () => {
        const content = await new Promise((resolve, reject) => {
            // Just an example, in reality we would load objs/res
            setTimeout( () =>{resolve(true)}, 5000)
        })
        // References AuthNavigator
        this.props.navigation.navigate( content ? 'Main' : 'Init')
    };
    
    render(){            
            return (
                <View>
                <TresorLogo />
                <ActivityIndicator size='large' color="black" />
            </View>
        );
    }
}

export default LoadingApp;