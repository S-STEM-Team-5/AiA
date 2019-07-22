import React from 'react'
import {
    Image,
    Text,
    StyleSheet
} from 'react-native';

const img = require('../assets/tresor-xi.png')


export default function TresorLogo() {
        return(
            <Image source={img} style={style.default} />
            )
    }

const style = StyleSheet.create({
    default: {
        width: 240,
        height: 220,
        resizeMode: 'contain',
        alignSelf: "center"
    }
})