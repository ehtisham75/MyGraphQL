import React, { useEffect } from 'react'
import { View, Text, StatusBar, Image, StyleSheet } from 'react-native'
import { CommonActions, useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { Colors } from '../Assets/Color/Colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigateScreen()
  });

  const navigateScreen =()=>{
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: "HomeScreen",
              //   params: {}
            },
          ],
        }));

    }, 2500);
  }

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.TRANSPARENT}
        barStyle={"dark-content"}
        translucent={true}
      />

      <Animatable.View
        animation="fadeInLeftBig"
        delay={1000}
        duration={1000}
        style={styles.titleBox}>

        <Text style={styles.titleBoxText}>GraphQL</Text>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.SECONDARY_COLOR,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBox: {
    alignItems: 'center',
    justifyContent: 'center',
    // width: hp(30),
    // height: hp(30),
    // borderRadius: hp(100),
    // backgroundColor: Colors.SECONDARY_COLOR,
  },
  titleBoxText: {
    fontSize: hp(4),
    color: Colors.PRIMARY_COLOR,
    textAlign: 'center',
    fontWeight: "600",
  },
})

export default SplashScreen
