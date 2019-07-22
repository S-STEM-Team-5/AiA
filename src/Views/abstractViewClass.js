import * as React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

// NOT For instantiation, ONLY for reference

class abstractViewClass extends React.Component {
    constructor() {
        super()
    }

    _router = (nextScreen) => {
        this.props.navigation.navigate(nextScreen);
    }

    
}

export default abstractViewClass