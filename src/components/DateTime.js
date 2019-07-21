import { View } from 'react-native';

let date = new Date()

export function Header() {
return (
        <View>
            <Text>{date.toTimeString}</Text>
        </View>
    )
}