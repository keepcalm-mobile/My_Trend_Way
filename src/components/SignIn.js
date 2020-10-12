import React from 'react'
import { View, Text, StyleSheet,ImageBackground, TextInput, Button,Image, Alert, TouchableOpacity } from 'react-native'
import IconCalendar from '../assets/icons/angle-left-solid.svg';
import {colors, scale} from '../styles';

export const SignIn = ({title}) => {
    const [value, onChangeText] = React.useState('EMAIL');

    return (
        <View style={styles.container} >
            <View style={styles.flexAlign} >
              <TouchableOpacity  onPress={() => { console.log('You tapped the Decrypt button!'); }} onPress={() => Alert.alert('Button with adjusted color pressed')}>
                <Image style={styles.goBAck} source={require('../assets/icons/IconCalendar.png')} />
              </TouchableOpacity >
            </View> 
            <View style={styles.flexAlignText}>
              <Text style={styles.welcome}>Welcome{'\n'}Back</Text>
            </View>
                <TextInput placeholder = "     Email" style={styles.input} onChangeText={text => onChangeText(text)} />
                <TextInput placeholder = "     Password" style={styles.input} />
                <View style={{ padding: 15, textAlign: 'center' }} >
                    <TouchableOpacity style={styles.button} onPress={() => { console.log('You tapped the Decrypt button!'); }} onPress={() => Alert.alert('Button with adjusted color pressed')}>
                        <Text style={styles.text}> Sign In </Text>
                    </TouchableOpacity>
                    <Text style={styles.forgotPass}>Forgot password?</Text>
                </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      flexAlign: {
        flex: 0, 
        flexDirection: 'row',
        alignItems: 'center'
      },
      flexAlignText: {
        marginTop: 30,
        marginLeft: 50,
        marginBottom: 50
      },  
      goBAck: {
        width: scale(15),
        height: scale(15),
        paddingLeft: 30,
        marginTop: 40
      },
      text: {
        color: colors.grey,
        fontSize: 30,
        fontWeight: "bold"
      },
    welcome: {
       fontSize: 35,
       fontWeight: 'bold',
    },
    input: {
        height: 55,
        borderColor: colors.white,
        borderWidth: 1,
        backgroundColor: '#F2F2F2',
        color: colors.black,
        margin: 10,
        borderRadius: 12,
        width: scale(330),
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    forgotPass: {
        fontSize: 15,
        textDecorationLine: 'underline',
        margin: 25,
        marginHorizontal: 80
    },
  
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },

  button: {
        alignItems: 'center',
        backgroundColor: colors.mainBlue,
        width: scale(330),
        padding: scale(15),
        borderColor: colors.white,
        borderWidth: 2,
        borderRadius: 12,
      },
})