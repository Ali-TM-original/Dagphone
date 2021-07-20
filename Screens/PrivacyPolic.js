import React,{useCallback} from 'react'
import { StyleSheet, View, Text, SafeAreaView, Linking, Button, Dimensions} from 'react-native';

const PrivacyPolicy = () => {

    const url = "https://github.com/Ali-TM-original/Dagphone";
    const DagpiUrl="https://github.com/Daggy1234/dagpi"

    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          await Linking.openURL(url);
        } else {
          Alert.alert(`Don't know how to open this URL: ${url}`);
        }
      }, [url]);

      const handlePressDagpi = useCallback(async () => {
        const supported = await Linking.canOpenURL(DagpiUrl);
    
        if (supported) {
          await Linking.openURL(DagpiUrl);
        } else {
          Alert.alert(`Don't know how to open this URL: ${DagpiUrl}`);
        }
      }, [DagpiUrl]);

    return (
        <>
        <View style={styles.container}>
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

                <View style={styles.footer}>
                <Button 
                stles={styles.coolButton} 
                title="Source Code"
                color='#007AFF'
                onPress={handlePress}/>
                <Button 
                stles={styles.coolButton} 
                title="Dagpi Source"
                color='#007AFF'
                onPress={handlePressDagpi}/>
                </View>
            
            </View>
            </View>
        </>
        
    )
}

export default PrivacyPolicy


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'grey'
        
    },
    header:{
        padding: 15,
        marginTop:55,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"flex-start"
    },
    HeaderNameText: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },
    ListItem: {
        padding: 20,
        backgroundColor: "grey",
        elevation: 12,
        borderRadius: 7,
        marginVertical: 10,
        height:"60%"
    },
    RandomParagraph:{
        color:"white",
        fontSize:17,
        fontWeight:"normal"
    },
    footer: {
        padding:20,
        color: "white",
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent:"space-evenly"
    },
    coolButton:{
        padding:20
    }
});