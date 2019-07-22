import * as Font from 'expo-font';
import {
    React
} from 'react';
import { Stylesheet } from 'react-native';

// The 'CSS' of the application
const globalStyleSheet = Stylesheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 4,
        justifyContent: "center"
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        alignItems: 'center',
        color: "Red"
    }

})



/**
 * API Definitions
 * StyleSheet -- https://facebook.github.io/react-native/docs/stylesheet#absolutefill
 */


//  Note -- maybe rewrite global Stylesheet as subclass of stylesheet?