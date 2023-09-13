import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, FlatList, ImageBackground, ActivityIndicator } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors } from '../Assets/Color/Colors';

import { ApolloProvider, gql, useQuery } from '@apollo/client';
import { ARTICLES_QUERY, NEW_ARTICLES } from '../Data/Queries';

const HomeScreen = ({ navigation }) => {
  const { data, loading, error } = useQuery(NEW_ARTICLES);
  const [list, setList] = useState("")

  useEffect(() => {
    setList(data?.Page?.media)
    console.log("\x1b[33m==========Gql List======== ", list)
  }, [data])

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={Colors.PRIMARY_COLOR} />
        <Text style={styles.infoText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={[styles.infoText, styles.errorText]}>
          Error: {error.message}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.TRANSPARENT}
        barStyle={"dark-content"}
        translucent={true}
      />

      <Text style={styles.title}>My GQL App</Text>

      <View style={styles.listWrapper}>

        {list == "" ?
          (<ActivityIndicator size={'large'} color={Colors.PRIMARY_COLOR} />)
          : (<FlatList
            data={list}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.mainWrapper}>

                <TouchableOpacity
                  onPress={() => { navigation.navigate("ArticleDetailScreen", { Article: item }) }}
                  activeOpacity={0.5}
                  style={styles.itemBox}>
                  <ImageBackground
                    source={require('../Assets/Images/noImage.png')}
                    style={styles.itemBgImg}
                    imageStyle={{ borderRadius: hp(1) }}>
                    <Image
                      source={{ uri: item?.bannerImage }}
                      style={styles.displayImg}
                    />
                  </ImageBackground>

                  <View style={styles.itemTextBox}>
                    <Text
                      numberOfLines={1}
                      style={styles.itemTitle}>{item.title?.english}</Text>

                    <Text
                      numberOfLines={3}
                      style={styles.itemDesp}>{item.description}</Text>

                  </View>
                </TouchableOpacity>

                <Text style={styles.trendText}>{item.trending} On Trending</Text>
              </View>
            )}
          />
          )}
      </View>


    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.SECONDARY_COLOR,
  },
  title: {
    fontSize: hp(3),
    color: Colors.BLACK_TEXT_COLOR,
    marginTop: hp(5),
  },
  infoText: {
    fontSize: hp(2),
    color: Colors.PRIMARY_COLOR,
    textAlign: 'center',
    marginTop: hp(1),
  },
  errorText: {
    color: '#ce2727',
  },
  trendText: {
    fontSize: hp(1.8),
    color: Colors.LIGHTBLACK_TEXT_COLOR,
    textAlign: 'right'
  },
  mainWrapper: {
    marginVertical: hp(1),
  },
  listWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  itemBox: {
    width: wp(90),
    backgroundColor: Colors.LIGHT_GRAY,
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
    borderRadius: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemBgImg: {
    width: hp(10),
    height: hp(10),
  },
  displayImg: {
    width: hp(10),
    height: hp(10),
    borderRadius: hp(1)
  },
  itemTextBox: {
    marginLeft: wp(2),
    flex: 1,
  },
  itemTitle: {
    fontSize: hp(2.2),
    fontWeight: '600',
    color: Colors.BLACK_TEXT_COLOR
  },
  itemDesp: {
    fontSize: hp(2),
    // fontWeight: '600',
    color: Colors.GRAY,
    textAlign: 'left',
    marginTop: hp(0.5),

  },
})
