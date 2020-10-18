
import React from 'react'
import { View, Text, StyleSheet,SafeAreaView,ScrollView, Image, TextInput, Alert, TouchableOpacity } from 'react-native'
import IconGarder from '../assets/icons/garder.svg';
import IconLike from '../assets/icons/Like-Product Page.svg';
import IconShare from '../assets/icons/ShareTel.svg';
import IconHome from '../assets/icons/Home.svg';
import IconSearch from '../assets/icons/Search.svg';
import IconNotification from '../assets/icons/Notification.svg';
import IconProfile from '../assets/icons/Profile.svg';
import IconOutfits from '../assets/icons/Outfits.svg';
import IconCreate from '../assets/icons/Create.svg';
import IconBack from '../assets/icons/Back.svg';
import IconUpload from '../assets/icons/Share-outside.svg';
import {colors, scale} from '../styles';

export const SearchItems = ({title}) => {

    return (
        <View>
          <SafeAreaView>
          <ScrollView>
            <View style={styles.topTab}>
                <TextInput placeholder = "     Search" style={styles.input} onChangeText={text => onChangeText(text)} />
            </View>
           
            <View> 
            </View>
            <View style={styles.wrapImages}> 
              <View>
                <Image style={styles.imgMain} source={require('../assets/image/Model-1.png')} />
                <View style={{marginLeft: 20}}>
                    <Text style={styles.bold}>$32</Text>  
                    <Text style={styles.bold}>Pretty Little Thing</Text>  
                    <Text style={styles.bold}>Red Blazer Dress</Text>  
                </View>
              </View>
              <View>
                <Image style={styles.imgMain} source={require('../assets/image/Model-2.png')} />
                <View style={{marginLeft: 20}}>
                    <Text style={styles.bold}>$60</Text>  
                    <Text style={styles.bold}>Lavish Alice</Text>  
                    <Text style={styles.bold}>Nudie Dress</Text>  
                </View>              
              </View>
            </View>

            <View style={styles.wrapImages}> 
              <View>
                <Image style={styles.imgMain} source={require('../assets/image/Model-1.png')} />
                <View style={{marginLeft: 20}}>
                    <Text style={styles.bold}>$32</Text>  
                    <Text style={styles.bold}>Pretty Little Thing</Text>  
                    <Text style={styles.bold}>Red Blazer Dress</Text>  
                </View>
              </View>
              <View>
                <Image style={styles.imgMain} source={require('../assets/image/Model-2.png')} />
                <View style={{marginLeft: 20}}>
                    <Text style={styles.bold}>$60</Text>  
                    <Text style={styles.bold}>Lavish Alice</Text>  
                    <Text style={styles.bold}>Nudie Dress</Text>  
                </View>              
              </View>
            </View>

            <View style={styles.wrapImages}> 
              <View>
                <Image style={styles.imgMain} source={require('../assets/image/Model-1.png')} />
                <View style={{marginLeft: 20}}>
                    <Text style={styles.bold}>$32</Text>  
                    <Text style={styles.bold}>Pretty Little Thing</Text>  
                    <Text style={styles.bold}>Red Blazer Dress</Text>  
                </View>
              </View>
              <View>
                <Image style={styles.imgMain} source={require('../assets/image/Model-2.png')} />
                <View style={{marginLeft: 20}}>
                    <Text style={styles.bold}>$60</Text>  
                    <Text style={styles.bold}>Lavish Alice</Text>  
                    <Text style={styles.bold}>Nudie Dress</Text>  
                </View>              
              </View>
            </View>

            <View style={styles.wrapImages}> 
              <View>
                <Image style={styles.imgMain} source={require('../assets/image/Model-1.png')} />
                <View style={{marginLeft: 20}}>
                    <Text style={styles.bold}>$32</Text>  
                    <Text style={styles.bold}>Pretty Little Thing</Text>  
                    <Text style={styles.bold}>Red Blazer Dress</Text>  
                </View>
              </View>
              <View>
                <Image style={styles.imgMain} source={require('../assets/image/Model-2.png')} />
                <View style={{marginLeft: 20}}>
                    <Text style={styles.bold}>$60</Text>  
                    <Text style={styles.bold}>Lavish Alice</Text>  
                    <Text style={styles.bold}>Nudie Dress</Text>  
                </View>              
              </View>
            </View>

            <View style={styles.bottomBar}>
                <IconHome  width={25} height={30} />
                <IconSearch width={22} height={30} />
                <IconCreate  width={30} height={60} />
                <IconNotification width={25} height={30} />
                <IconProfile width={25} height={30} />
            </View>
        </ScrollView>
        </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
      topTab: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        paddingTop: 10,
        alignItems: 'center'
      },
      bold: {
        fontWeight: "bold",
        fontSize: 16,
        paddingTop: 5,
        paddingBottom: 5
      },
      wrapImages: {
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          height: scale(385),
    },
    imgMain: {
        width: scale(180),
        height: scale(260),
        borderRadius: 10
      },
    input: {
        height: 55,
        borderColor: colors.white,
        borderWidth: 1,
        backgroundColor: colors.lightGray,
        color: colors.black,
        margin: 10,
        borderRadius: 12,
        width: scale(360),
    },
      bottomBar: {
        justifyContent: 'space-around',
        flexDirection:'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff', 
    }
})