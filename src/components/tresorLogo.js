import React from 'react'
import {
    Image,
    Text,
    StyleSheet
} from 'react-native';

export default function tresorLogo() {
    return(
        <Image style={css.image} source={img} />
    )
}

const css = StyleSheet.create({
    image: {
        flex: 1,
        padding: 30,
        width: "20%",
        height: "70%",
        
    }
})

const img = require('../assets/tresor-xi.png')