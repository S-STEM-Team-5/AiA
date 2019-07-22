import { View, StyleSheet } from 'react-native';

let date = new Date()

export function Header() {
return (
        <View>
            <Text style={ css.a } >{date.toTimeString}</Text>
        </View>
    )
}

const css = StyleSheet.create({
    a: {
        textAlign: "right",
        fontSize: "20",
        fontWeight: "bold"
    }
})