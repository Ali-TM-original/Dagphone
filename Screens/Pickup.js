import React from 'react'
import { Block, Text } from 'expo-ui-kit';
import {StyleSheet } from 'react-native';

const Pickup = () => {
    return (
        <Block center middle style={styles.container}>
            <Text>LMAO Pickups</Text>
        </Block>
    )
}

export default Pickup

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#56ab2f"
    }
});