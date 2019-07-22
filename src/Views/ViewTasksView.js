import React from 'react'
import { View, Image, Text, Button } from 'react-native';
import abstractViewClass from './abstractViewClass';

class ViewTasks extends abstractViewClass {

    render(){
        setTimeout(this._router("AllDone"), 2000)
        return(
        <View>
            <Text>Here is where the Main App View Would Go!</Text>
            {/* <Button title="Finished!" onPress={this._router("AllDone")} /> */}
            {/* <Button title="Add a Task" onPress={this._router("AddTask")} /> */}
        </View>
        )
    }
}

export default ViewTasks