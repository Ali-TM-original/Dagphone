import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, Dimensions } from 'react-native';

const PrivacyPolicy = () => {
    return (
        <SafeAreaView stles={styles.container}>
            <View style={styles.header}>
                <Text style={styles.HeaderNameText}>Our Policy</Text>
            </View>

            <View style={[styles.ListItem]}>
                <Text style={styles.RandomParagraph}>
                    Ali™ Built this app as a free software. These services 
                    are provided by Ali™ free of cost.
                </Text>
                <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 5,
                }}/>
                <Text style={styles.RandomParagraph}>
                    This app is completely open source on github. Although i might
                    run Ads just to fund myself :)
                </Text>
                <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 5,
                }}/>
                <Text style={styles.RandomParagraph}>
                    Furthurmore WE DO NOT log any of your personal details such as:
                    Your Location, Phones Camera, gallery etc.
                </Text>                
            </View>

        </SafeAreaView>
    )
}

export default PrivacyPolicy


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3fada8",
        justifyContent: 'center',
        alignContent: 'center'
    },
    header:{
        padding: 15,
        marginTop:55,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"flex-start"
    },
    HeaderNameText: {
        color: "black",
        fontSize: 30,
        fontWeight: "bold"
    },
    ListItem: {
        padding: 20,
        backgroundColor: "grey",
        elevation: 12,
        borderRadius: 7,
        marginVertical: 10,
    },
    RandomParagraph:{
        color:"white",
        fontSize:17,
        fontWeight:"normal"
    }
});