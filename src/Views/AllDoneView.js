import * as React from 'react';
import { View, Text, Button } from 'react-native';
import abstractViewClass from './abstractViewClass';


class AllDone extends abstractViewClass {
    
    render(){
        return (
        <View>
            <Text> All Done! Come Back Tomorrow</Text>
            <Button onPress={()=>{ this._router("Main")}} title="Words" />
        </View>
        )
    }
}

export default AllDone;