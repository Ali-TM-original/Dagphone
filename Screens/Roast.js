import React, { useState, useEffect } from 'react'
import { Block, Text } from 'expo-ui-kit';
import { StyleSheet, View } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

// Speech Api
import * as Speech from 'expo-speech'
// Clipboard Api
import * as Clipboard from 'expo-clipboard';



const Roast = () => {
    const [Roast, setRoast] = useState('Cool Roasts')
    const [Loading, setLoading] = useState(false)
    const [Copied, setCopied] = useState(false)

    useEffect(() => {
        axios.get("https://evilinsult.com/generate_insult.php?lang=en&type=json")
            .then((res) => setRoast(res.data.insult))
            .catch((err) => console.log(setRoast(`Looks like something broke Error: ${err} `)))
    }, [])

    const ReloadFetch = () => {
        if(Loading === false){
        setLoading(true)
        axios.get("https://evilinsult.com/generate_insult.php?lang=en&type=json")
            .then((res) => setRoast(res.data.insult))
            .catch((err) => setRoast(`Looks like something broke Error: ${err} `))
        setLoading(false)
        setCopied(false)}

    }


    const speakingFunction = () => {
        if(Loading===false){
        setLoading(true)
        const thingToSay = Roast;
        Speech.speak(thingToSay);
        setLoading(false)}
      };


    const copyToClipboard = () => {
        Clipboard.setString(Roast);
        setCopied(true)
    };


    return (
        <Block center middle style={styles.container}>
            <Text style={styles.MainText}>{Roast}</Text>
            <View style={styles.ButtonView}>

                <Ionicons name="md-reload-circle"
                    size={50}
                    color="white"
                    style={{padding:20}}
                    onPress={Loading ? "" : ReloadFetch} />
                <AntDesign name="sound" 
                size={50} 
                color="white"
                style={{padding:20}} 
                onPress={Loading ? "" : speakingFunction}/>
                <Feather name="clipboard" 
                style={{padding:20}}
                size={50} 
                color={Copied?"black":"white"}
                onPress={copyToClipboard}/>
            </View>
        </Block>
    )
}

export default Roast

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FD746C",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    MainText: {
        color: 'white',
        fontSize: 20
    },
    ButtonView:{
        flexDirection:'row',
        alignItems:'center',
    }
});