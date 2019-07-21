import * as React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';

import TresorLogo from '../components/tresorLogo';
import ViewTasks from '../components/taskList';

export default function LoadingApp() {
    return (
        <View>
            <TresorLogo />
            <Text>Loading...</Text>

            <Button 
            onPress={<ViewTasks />}
            color="#841584"
            title="Enter"
            />
            
        </View>
    );
}