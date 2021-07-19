import React from 'react'
import { Block, Text } from 'expo-ui-kit';
import {StyleSheet } from 'react-native';

const Fact = () => {
    return (
        <Block center middle style={styles.container}>
            <Text>LMAO FACTS</Text>
        </Block>
    )
}

export default Fact


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#3fada8"
    }
});