import * as React from 'react';
import { View, Button, Text } from 'react-native'
import abstractViewClass from './abstractViewClass'

class AddTask extends abstractViewClass {

    render(){
        return(
            <View>
                <Text>Add a Task!</Text>
                {/* <Button title="Back to Main" onPress={ this._router("Main")} /> */}
            </View>
        )
    }
}

export default AddTask;