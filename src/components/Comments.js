import React from 'react'
import { View, Text, StyleSheet,SafeAreaView,ScrollView, Image, Alert, TouchableOpacity, TextInput } from 'react-native'
import IconOutfits from '../assets/icons/Outfits.svg';
import IconCreate from '../assets/icons/Create.svg';
import IconProfile from '../assets/icons/Profile.svg';
import { Comment } from './Comment' 
import {colors, scale} from '../styles';

let comment = [
  {
    avatar: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'Lilly.james2',
    post: 'LOVE THIS!Going to wear It next weekend defenintly!'
  },
  {
    avatar: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'Trendway_777',
    post: 'LOVE THIS!Going to wear It next weekend defenintly!'
  }
]

export const Comments = ({title}) => {
    return (
        <View>
          <SafeAreaView>
          <ScrollView>
          <View style={styles.categories}>
            <IconOutfits style={styles.categoriesItem}  width={25} height={60} />
            <IconCreate  style={styles.categoriesItem} width={30} height={60} />
            <IconProfile style={styles.categoriesItem}  width={30} height={60} />
          </View>
          <View style={styles.wrap}>
            {comment.map((comment) => 
                <Comment data={comment}  />
              )}

          </View>  
          <View style={styles.comment}>
              <Image style={styles.imgProfile} source={require('../assets/image/users.png')} />
              <TextInput placeholder = "     Comment" style={styles.input} onChangeText={text => onChangeText(text)} />
              <Text style={styles.submitPost}>Post</Text>
          </View> 
        </ScrollView>
        </SafeAreaView>
      </View>
    )
}

const styles = StyleSheet.create({
      wrap: {
        padding: 25,
        marginBottom: -30,
        marginTop: -60
      },  
      innerContainer: {
        flexDirection: 'column',
        alignItems: 'center'
      },
      input: {
        height: 50,
        borderColor: colors.grayLight,
        borderWidth: 1,
        backgroundColor: colors.white,
        color: colors.black,
        margin: 10,
        borderRadius: 12,
        width: '90%',
    },
      categories: {
        flexDirection: 'row',
        justifyContent: 'center'
    },  
    categoriesItem: {
      marginLeft: 20,
      marginRight: 20
    },
      titleName: {
        fontWeight: "bold",
        fontSize: 18,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 20,
      },
      btn: {
        marginLeft: 150,
        marginTop: 5
      },
      text: {
        fontSize: 18,
        paddingTop: 5,
        paddingBottom: 5,
      },
      comment: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 25
      },
       img: {
        width: scale(100),
        height: scale(100),
       },
      submitPost: {
        fontWeight: 'bold',
        marginLeft: -50
      }
})