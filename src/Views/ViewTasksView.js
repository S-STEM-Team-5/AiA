import React from 'react'
import { View, Image, Text, Button, StyleSheet, ScrollView } from 'react-native';
import abstractViewClass from './abstractViewClass';

class ViewTasks extends abstractViewClass {
    constructor(){
        super()
        // this._setOptions("View Tasks");
    }

    // static navigationOptions = {
    //  headerTitle:  ,
    //  headerRight: ,
    //  headerLeft:    
    // }

    render(){
        return(
                <ScrollView style={styles.container}>
            <Text>Welcome, Kevinx!</Text>
        <View>
            <Button color="purple" title="Finished!" onPress={() => { this._router("AllDone")} } />
            <Button color="green" title="Add a Task" onPress={() => { this._router("AddTask")} } />
        </View>
                </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
  container: {
...StyleSheet.absoluteFill,
    flex: 1,
    backgroundColor: '#99bbf5',
  },
});

export default ViewTasks