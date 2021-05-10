import React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 200,
      height: 200,
    },
    lighttext:{
        color:'#828080',
        fontWeight:'bold',
        fontSize:20
    },
    redtext:{
        color:'red',
        fontWeight:'bold',
        fontSize:40
    },
    subtext:{
        color:'#828080',
        fontSize:10
    }
  });

const OnBoardingScreen = ({ navigation }) => {
    return (
        <Onboarding
        onSkip={()=> navigation.navigate("Home")}
        onDone={()=> navigation.navigate("Home")}
            pages={[
                {
                    backgroundColor: '#F8F8F8',
                    image: <Image style={styles.logo} source={require('../images/image1.jpg')} />,
                    title: <Text style={styles.lighttext}>How it Works</Text>,
                    subtitle: '',
                },
                {
                    backgroundColor: '#F8F8F8',
                    image: <Image style={styles.logo} source={require('../images/image2.jpg')} />,
                    title: <Text style={styles.lighttext}>Press Power{"\n"}3/4 Times</Text>,
                    subtitle: <Text style={styles.subtext}>Guardian will receive SMS alerts with GEO location</Text>,
                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.logo} source={require('../images/image3.jpg')} />,
                    title: <View><Text style={styles.lighttext}>When</Text><Text style={styles.redtext}>{"\n"}Triggered</Text><Text style={styles.lighttext}>{"\n"}Your Phone</Text></View>,
                    subtitle: <Text style={styles.subtext}>SMS with LOCATION{"\n"}Automatic Place CALL</Text>,
                },
            ]}
        />
    );
}


export default OnBoardingScreen;