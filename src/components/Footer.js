import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Footer = ({title}) => {
    return (
        <View style={StyleSheet.home}>
            <Text style={StyleSheet.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {},
    text: {}
})