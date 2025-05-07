import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GrandHotel_400Regular, useFonts } from '@expo-google-fonts/grand-hotel'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

export default function HeaderComponent() {

    // In order to use fonts you must use the useFonts hook
    const [isLoaded] = useFonts({
        GrandHotel_400Regular
    });

    // Because our fonts are pakeaged within app we want to check if the fonts are loaded first before diplaying them to avoid ugly jumping

    if (!isLoaded) {
        return null;
    }
    return (
        <View style={styles.HeaderContainer}>

            {/* First View will represent the div our text *Intsgram * is in*/}
            <View>
                <Text style={[styles.WhiteText, styles.HeaderText, { fontFamily: "GrandHotel_400Regular" }]}>Intagram</Text>
            </View>

            {/* This "div" will be where our buttons or icons are */}
            <View style={{flexDirection: "row"}}>
                <FontAwesomeIcon icon={faHeart} style={{color: 'white', marginRight: 25}} size={25}/>
                <FontAwesomeIcon icon={faPaperPlane} style={{color: 'white', marginRight: 25}} size={25}/>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    HeaderContainer: {
        marginTop: 5,
        paddingLeft: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    WhiteText: {
        color: "white"
    },
    HeaderText: {
        fontSize: 35
    }
})