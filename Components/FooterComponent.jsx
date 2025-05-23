import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClapperboard, faHomeAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import joinIcon from'../assets/file.png'

export default function FooterComponent() {
  return (
    <View style={styles.footerConatainer}>
      <FontAwesomeIcon icon={faHomeAlt} style={{ color: 'white'}} size={27}/>
      <FontAwesomeIcon icon={faSearch} style={{ color: 'white'}} size={27}/>
      <FontAwesomeIcon icon={faPlusSquare} style={{ color: 'white'}} size={27}/>
      <FontAwesomeIcon icon={faClapperboard} style={{ color: 'white'}} size={27}/>
      <Image source={joinIcon} style={{width: 27, color: 'white', height: 27, borderRadius: 13.5} }/>
    </View>
  )
}

const styles = StyleSheet.create({
  footerConatainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 70,
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
    width: '100%',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(255, 255, 255, 0.2)'
  }
})