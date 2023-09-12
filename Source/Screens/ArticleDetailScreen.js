import React, { useEffect, useState } from 'react'
import {
    StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, FlatList,
    ImageBackground, ActivityIndicator, ScrollView,
} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors } from '../Assets/Color/Colors';
import StatusBarForAll from '../ReusableComponents/StatusBarForAll';

const ArticleDetailScreen = ({ navigation, route }) => {
    const [ArticleDetial, setArticleDetail] = useState(route.params?.Article ?? "")

    useEffect(() => {
        console.log("\x1b[36m ==== Article Detail ====> ", ArticleDetial)
    }, [])

    return (
        <View style={styles.container}>
            <StatusBarForAll />
            <Text style={styles.screenTitle}>Article</Text>

            <View style={{ ...styles.wrap }}>
                <ScrollView>

                    <ImageBackground
                        source={require('../Assets/Images/noImage.png')}
                        style={styles.itemBgImg}
                        imageStyle={{ borderRadius: hp(1) }}>
                        <Image
                            resizeMode='stretch'
                            source={{ uri: ArticleDetial.coverImage.large }}
                            style={styles.displayImg}
                        />
                    </ImageBackground>

                    <View style={styles.titleBox}>
                        <Text style={{ ...styles.titleWord }}>Title:</Text>
                        <Text style={styles.title}>{ArticleDetial.title.english}</Text>
                    </View>

                    <View style={styles.infoBox}>
                        <Text style={{ ...styles.staticWords }}>Total Episodes: </Text>
                        <Text style={styles.staticWords}>{ArticleDetial.episodes}</Text>
                    </View>

                    <View style={styles.infoBox}>
                        <Text style={{ ...styles.staticWords }}>Published In: </Text>
                        <Text style={styles.staticWords}>{ArticleDetial.startDate.year}</Text>
                    </View>

                    <View style={styles.infoBox}>
                        <Text style={{ ...styles.staticWords }}>Read In: </Text>
                        <Text style={styles.staticWords}>{ArticleDetial.duration}m</Text>
                    </View>

                    <Text style={styles.despWord}>Description:</Text>
                    <Text style={styles.desp}>{ArticleDetial.description}</Text>

                </ScrollView>
            </View>

        </View>
    )
}

export default ArticleDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.SECONDARY_COLOR,
    },
    screenTitle: {
        fontSize: hp(3),
        color: Colors.BLACK_TEXT_COLOR,
        marginTop: hp(5),
    },
    wrap: {
        flex: 1,
        marginTop: hp(1),
        marginHorizontal: wp(5),
    },
    itemBgImg: {
        width: wp(90),
        height: hp(30),
    },
    displayImg: {
        width: wp(90),
        height: hp(30),
        borderRadius: hp(1)
    },
    titleBox: {
        flexDirection: 'row',
        alignItems: 'center',
        // alignItems:'flex-start',
        marginTop: hp(2),
    },
    titleWord: {
        fontSize: hp(2.2),
        fontWeight: '500',
        color: Colors.LIGHTBLACK_TEXT_COLOR,
        textAlign: 'left',
    },
    title: {
        fontSize: hp(2.5),
        fontWeight: '500',
        color: Colors.PRIMARY_COLOR,
        textAlign: 'left',
        marginLeft: wp(2),
    },
    infoBox: {
        flexDirection: 'row',
        marginTop: hp(1),
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    staticWords: {
        fontSize: hp(2.1),
        fontWeight: '500',
        color: Colors.LIGHTBLACK_TEXT_COLOR,
        textAlign: 'left',
        // marginLeft: wp(2),
    },
    despWord: {
        fontSize: hp(2.2),
        fontWeight: '500',
        color: Colors.LIGHTBLACK_TEXT_COLOR,
        textAlign: 'left',
        marginTop: hp(2),
    },
    desp: {
        fontSize: hp(2.2),
        color: Colors.GRAY,
        textAlign: 'left',
        marginTop: hp(0.5),
    },
})