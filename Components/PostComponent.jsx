import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import StoriesComponent from './StoriesComponent'
import joinIcon from '../assets/file.png'
import Logo from '../assets/SBLogo.png'
import Family from '../assets/Reviews2.jpg'
import AngryBird from '../assets/BirdAngry.webp'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faHeart, faPaperPlane, faComment, faBookmark} from '@fortawesome/free-regular-svg-icons'

export default function PostComponent() {
  const [post, setPost] = useState([
    {
      profilePicture: joinIcon,
      userName: "Alan",
      postImg: Logo,
      numOfLikes: '9.5k',
      description: 'Look at the new Logo I designed',
      comments: [
        {
          userWhoCommented: "coolDude",
          userComment: 'Das me'
        }
      ]
    },

    {
      profilePicture: AngryBird,
      userName: "Random Guy",
      postImg: Family,
      numOfLikes: '10.5k',
      description: 'Look at my family',
      comments: [
        {
          userWhoCommented: "coolDude",
          userComment: 'Nice Family'
        }
      ]
    }
  ]);

  return (
    <ScrollView>
      <StoriesComponent />
      {
        post.map((post, idx) => {
          return (
            <View key={idx}>
              <View style={styles.profileNav}>
                <View style={{ paddingTop: 10 }}>
                  <Image source={post.profilePicture} style={styles.profileImg} />
                </View>
                {/* UserName div */}
                <View style={styles.usernameContainer}>
                  <Text style={styles.usernameText}>{post.userName}</Text>
                </View>
                {/* Dots Container */}
                <View style={styles.dotsContainer}>
                  <Text style={styles.dotsText}>.</Text>
                  <Text style={styles.dotsText}>.</Text>
                  <Text style={styles.dotsText}>.</Text>
                </View>
              </View>

              <View>
                  <Image source={post.postImg} style={styles.postImg}/>
                </View>

              {/* Parent Conatiner for Icons */}
              <View style={{flexDirection: 'row'}}>

                <View style={{flexDirection: 'row', flex: 1, alignItems: "center", paddingLeft: 14, paddingTop: 10}}>
                  <FontAwesomeIcon icon={faHeart} style={{color: 'white', marginRight: 5}} size={25}/>
                  <Text style={{color: 'white', fontWeight: 'bold', marginRight: 10}}>{post.numOfLikes}</Text>
                  <FontAwesomeIcon icon={faComment} style={{color: 'white', transform: [{rotateY: '180deg'}],marginRight:20 }} size={25}/>
                  <FontAwesomeIcon icon={faPaperPlane} style={{color: 'white',}} size={25}/>
                </View>

                <View style={{justifyContent: 'center', paddingTop: 10}}>
                <FontAwesomeIcon icon={faBookmark} size={25} style={{color: 'white'}}/>
                </View>
              </View>

              {/* description container */}
              <View style={{flex: 1, flexDirection: 'row', paddingTop: 5}}>
                <Text style={{color: 'white', fontWeight: 'bold', paddingLeft: 14, paddingRight: 5}}>{post.userName}</Text>
                <Text style={{color: 'white'}}>{post.description}</Text>


              </View>
    
            </View>
          )


        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  profileNav: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 50
  },
  usernameContainer: {
    paddingLeft: 15,
    justifyContent: 'center',
    paddingTop: 10
  },
  usernameText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  dotsContainer: {
    flex: 1 ,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
    

  },
  dotsText: {
    color: 'white',
    fontSize: 30,
    lineHeight: 10
  },
  postImg: {
    height: 400,
    width: '100%'
  }
})