import React, {useState, useEffect} from 'react'
import { Block, Text} from 'expo-ui-kit';
import {StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons'; 


const Roast = () => {
    const [Roast,setRoast]=useState('Cool Roasts')

    useEffect(()=>{
        axios.get("https://evilinsult.com/generate_insult.php?lang=en&type=json")
        .then((res)=>setRoast(res.data.insult))
        .catch((err)=>console.log(setRoast(`Looks like something broke Error: ${err} `)))
    },[])

    const ReloadFetch = ()=>{
        axios.get("https://evilinsult.com/generate_insult.php?lang=en&type=json")
        .then((res)=>setRoast(res.data.insult))
        .catch((err)=>setRoast(`Looks like something broke Error: ${err} `))
    }

    return (
        <Block center middle style={styles.container}>
            <TouchableOpacity>
                <Ionicons name="md-reload-circle" size={30} color="white" onPress={ReloadFetch}/>
            </TouchableOpacity>
            <Text style={styles.MainText}>{Roast}</Text>
        </Block>
    )
}

export default Roast

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FD746C",
        alignItems:'center',
        justifyContent:'center',
        padding:20
    },
    MainText:{
        color:'white',
        fontSize:20
    }
});