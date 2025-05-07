import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import StoriesComponent from './StoriesComponent'
import joinIcon from '../assets/file.png'
import Logo from '../assets/SBLogo.png'
import Family from '../assets/Reviews2.jpg'
import AngryBird from '../assets/BirdAngry.webp'

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
              <View>

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