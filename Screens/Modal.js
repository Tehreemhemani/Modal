import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, Dimensions, Image } from 'react-native'

export default function Button() {

    const [animation, setAnimation] = useState(new Animated.Value(0));
    const { height } = Dimensions.get('window');

    const modalTrigger = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false
        }).start();
    };




    const openModal = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp'

    });

    const saveModal = animation.interpolate({
        inputRange: [1, 2],
        outputRange: [0, -height],
        extrapolate: 'clamp'

    });


    const open = {
        transform: [
            { scale: openModal },
            { translateY: saveModal }
        ]
    };
    return (
        <View style={[styles.container, styles.center]}>

            <View style={[styles.shadowButton, styles.center]}>

                <TouchableOpacity style={[styles.button, styles.center]}
                    onPress={modalTrigger}>

                    <Text style={styles.text}>
                        Open
                    </Text>

                </TouchableOpacity>

            </View>
            {/* <<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>></> */}

            <Animated.View style={[open]} >


                <View style={styles.wrap}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', top: -10 }}>


                        <Image
                            source={require('../assets/cross.png')}
                            style={{ width: 8, height: 8, left: -5, top: 10 }}
                        />

                        <Text style={{ fontSize: 10, fontWeight: "bold", top: 7, color: 'black' }}>
                            SHARE THIS PROPERTY LISTING

                        </Text>

                        <Image
                            source={require('../assets/logo.png')}
                            style={{ width: 39, height: 10, top: 10 }}
                        />
                    </View>

                    {/* <<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>></> */}


                    <View style={styles.line}></View>

                    {/* <<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>></> */}

                    <View><Text style={{ fontSize: 10, left: 220, top: 15, fontWeight: "bold", color: 'black' }}>THANK YOU FOR SHARING</Text></View>

                    <View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Image
                                source={require('../assets/home.png')}
                                style={{ width: 60, height: 60, borderRadius: 5, top: 15, left: -10 }}
                            />

                            <Text style={styles.textStyle}> SHELTON STREET </Text>

                            <Text style={styles.textStyle}> CDVENT GARDEN </Text>

                            <Text style={styles.textStyle}> LONDON </Text>

                            <Text style={styles.textStyle}> WEST </Text>

                            <Text style={styles.textStyle}> UNITED KINGDOM </Text>
                        </View>
                    </View>

                    {/* <<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>></> */}

                    <View style={{ height: '45%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', left: 10 }}>
                            <View style={styles.box}>
                                <Image
                                    source={require('../assets/copylink.png')}
                                    style={{ width: 34, height: 34, alignSelf: "center", justifyContent: "center", top: 13 }}
                                />
                                <Text style={{ color: 'black', fontSize: 7, marginTop: 28, textAlign: 'center' }}>
                                    COPY LINK
                                </Text>

                            </View>

                            <View style={styles.box}>
                                <Image
                                    source={require('../assets/email.png')}
                                    style={{ width: 34, height: 22, alignSelf: "center", justifyContent: "center", top: 15 }}
                                />
                                <Text style={{ color: 'black', fontSize: 7, marginTop: 38, textAlign: 'center' }}>
                                    EMAIL
                                </Text>

                            </View>

                            <View style={styles.box}>
                                <Image
                                    source={require('../assets/message.png')}
                                    style={{ width: 34, height: 34, alignSelf: "center", justifyContent: "center", top: 13 }}
                                />
                                <Text style={{ color: 'black', textAlign: 'center', fontSize: 7, marginTop: 27 }}>
                                    MESSAGES
                                </Text>

                            </View>
                            <View style={styles.box}>
                                <Image
                                    source={require('../assets/whatsapp.png')}
                                    style={{ width: 34, height: 34, alignSelf: "center", justifyContent: "center", top: 13 }}
                                />
                                <Text style={{ color: 'black', fontSize: 7, textAlign: 'center', marginTop: 27 }}>
                                    WHATSAPP
                                </Text>

                            </View>

                            <View style={styles.box}>
                                <Image
                                    source={require('../assets/qr.png')}
                                    style={{ width: 45, height: 45, alignSelf: "center", justifyContent: "center", top: 8 }}
                                />
                                <Text style={{ color: 'black', textAlign: 'center', fontSize: 7, marginTop: 15, left: 5 }}>
                                    QR CODE
                                </Text>

                            </View>

                        </View>

                        {/* <<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>></> */}



                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 30, left: 10 }}>
                            <View style={styles.box}>
                                <Image
                                    source={require('../assets/fb.png')}
                                    style={{ width: 18, height: 34, alignSelf: "center", justifyContent: "center", top: 15 }}
                                />
                                <Text style={{ color: 'black', fontSize: 7, marginTop: 28, textAlign: 'center' }}>
                                    FACEBOOK
                                </Text>

                            </View>

                            <View style={styles.box}>
                                <Image
                                    source={require('../assets/twitter.png')}
                                    style={{ width: 34, height: 27, alignSelf: "center", justifyContent: "center", top: 13 }}
                                />
                                <Text style={{ color: 'black', fontSize: 7, marginTop: 34, textAlign: 'center' }}>
                                    TWITTER
                                </Text>

                            </View>

                            <View style={styles.box}>
                                <Image
                                    source={require('../assets/pinterest.png')}
                                    style={{ width: 34, height: 34, alignSelf: "center", justifyContent: "center", top: 13 }}
                                />
                                <Text style={{ color: 'black', textAlign: 'center', fontSize: 7, marginTop: 27 }}>
                                    PINTEREST
                                </Text>

                            </View>

                            <View style={styles.box}>
                                <Image
                                    source={require('../assets/messenger.png')}
                                    style={{ width: 33, height: 33, alignSelf: "center", justifyContent: "center", top: 13 }}
                                />
                                <Text style={{ color: 'black', textAlign: 'center', fontSize: 7, marginTop: 28 }}>
                                    MESSENGER
                                </Text>

                            </View>

                            <View style={styles.box}>
                                <Image
                                    source={require('../assets/filter.png')}
                                    style={{ width: 31, height: 26, alignSelf: "center", justifyContent: "center", top: 13 }}
                                />
                                <Text style={{ color: 'black', textAlign: 'center', fontSize: 7, marginTop: 35 }}>
                                    MORE OPTIONS
                                </Text>

                            </View>

                        </View>

                    </View>

                </View>






















            </Animated.View>

        </View>








    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    textStyle: {
        top: 40,
        color: 'black',
        fontSize: 8,
        fontWeight: "bold",
        left: 10,



    },

    button: {

        zIndex: 10,
        width: 200,
        height: 70,
        borderRadius: 100,
        shadowColor: '#40488f',
        shadowOffset: {
            width: 6.4,
            height: 6.4
        },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        backgroundColor: '#203653',


    },
    shadowButton: {
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 105,
        width: 210,
        height: 80,

        shadowColor: '#40488f',
        shadowOffset: {
            width: 8.4,
            height: 8.4
        },
        shadowOpacity: 0.5,
        shadowRadius: 30,
        elevation: 10
    },


    text: {
        fontSize: 30,
        fontWeight: '600',
        fontFamily: 'Avenir',
        color: 'white'
    },

    wrap: {
        padding: 15,
        margin: 10,
        borderRadius: 8,
        backgroundColor: '#f5fff8',
        borderColor: 'blue',
        borderWidth: 1,
        shadowRadius: 30,
        backgroundColor: 'white',



    },

    line: {
        borderColor: '#BE9F56',
        borderWidth: 0.5,
        borderStyle: "solid",
        width: 342,
        height: 1,
        top: 10,
        left: -2




    },

    box: {

        width: 60,
        height: 60,
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: '#000000',
        top: 30,
        left: -10,
        marginHorizontal: -9







    }







})