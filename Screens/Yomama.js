import React from 'react'
import { Block, Text } from 'expo-ui-kit';
import {StyleSheet } from 'react-native';

const Yomama = () => {
    return (
        <Block center middle style={styles.container}>
            <Text>LMAO Yomama</Text>
        </Block>
    )
}

export default Yomama

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#904e95"
    }
});