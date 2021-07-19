import React from 'react'
import { Block, Text } from 'expo-ui-kit';
import {StyleSheet } from 'react-native';


const Joke = () => {
    return (
        <Block center middle style={styles.container}>
            <Text>LMAO Joke</Text>
        </Block>
    )
}

export default Joke

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#cb2d3e"
    }
});