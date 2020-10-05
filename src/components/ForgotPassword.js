

import React from 'react'
import { View, Text, StyleSheet,ImageBackground, TextInput, Button,Image, Alert, TouchableOpacity } from 'react-native'
import IconCalendar from '../assets/icons/angle-left-solid.svg';

export const ForgotPassword = ({title}) => {
    const [value, onChangeText] = React.useState('EMAIL');

    return (
        <View style={styles.container} >
          <View style={styles.flexAlign} >
            <TouchableOpacity  onPress={() => { console.log('You tapped the Decrypt button!'); }} onPress={() => Alert.alert('Button with adjusted color pressed')}>
              <Image style={styles.goBAck} source={require('../assets/icons/IconCalendar.png')} />
            </TouchableOpacity >
            <Text style={{fontWeight: "bold", fontSize: 17 }}>Go back</Text>
          </View> 
          <View style={styles.flexAlignNumber} >

            <Text style={styles.welcome}>Forgot your{'\n'}password?</Text>
            <Text style={{width: 370, marginTop: 20}}>Enter your email or phone number to receive a link to change your password.</Text>
          </View>
          <TextInput placeholder = "     Enter phone number" style={styles.input} onChangeText={text => onChangeText(text)} />
          <View style={{ padding: 15, textAlign: 'center' }} >
            <TouchableOpacity style={styles.buttonNext} onPress={() => { console.log('You tapped the Decrypt button!'); }} onPress={() => Alert.alert('Button with adjusted color pressed')}>
              <Text style={styles.text}> Send </Text>
              
            </TouchableOpacity>
          </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
      },
      flexAlign: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
      },
      flexAlignNumber: {
        flex: 0, 
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30,
        marginLeft: 30,
        marginBottom: 40
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
      },
      goBAck: {
        width: 15,
        height: 15,
        paddingLeft: 0,
        marginLeft: 30
      },
    welcome: {
       fontSize: 40,
       fontWeight: 'bold',
       color: "#000",
       marginRight: 170
    },
    input: {
        height: 55,
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: '#F2F2F2',
        color: '#000',
        margin: 15,
        borderRadius: 12,
        width: 380,
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

  buttonNext: {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#26FBDA",
        width: 380,
        padding: 15,
        borderRadius: 12,
      },
})