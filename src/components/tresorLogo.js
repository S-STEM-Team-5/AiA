import React from 'react'
import {
    Image,
    Text,
    StyleSheet
} from 'react-native';



export default class tresorLogo extends React.Component {
    render() {
        return(
            <Image source={img} />
            )
    }
}
const css = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        width: "10%",
        height: "60%",
        opacity: "0"
    }

})

const img = require('../assets/tresor-xi.png')

