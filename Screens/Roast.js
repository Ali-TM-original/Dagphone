import React from 'react'
import { Block, Text } from 'expo-ui-kit';
import {StyleSheet } from 'react-native';


const Roast = () => {
    return (
        <Block center middle style={styles.container}>
            <Text>LMAO Roasts</Text>
        </Block>
    )
}

export default Roast

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FD746C"
    }
});