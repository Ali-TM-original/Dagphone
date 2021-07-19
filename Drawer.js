import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import { Block, Button, Text } from 'expo-ui-kit';
import { LinearGradient } from 'expo-linear-gradient';

// screens
import Fact from './Screens/Fact'
import Joke from "./Screens/Joke"
import Pickup from "./Screens/Pickup"
import Roast from "./Screens/Roast"
import Yomama from "./Screens/Yomama"

//Icons
import { MaterialCommunityIcons, Entypo,FontAwesome5 } from '@expo/vector-icons'; 


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = ({ navigation, style }) => {
  return (
    <Animated.View style={[{flex:1, overflow:'hidden'}, style]}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <Button transparent onPress={() => navigation.openDrawer()}>
             <MaterialCommunityIcons name="hamburger" size={35} color="black" />
            </Button>
          ),
        }}>
        <Stack.Screen name="Facts" component={Fact} />
        <Stack.Screen name="Jokes" component={Joke} />
        <Stack.Screen name="PickUps" component={Pickup} />
        <Stack.Screen name="Roasts" component={Roast} />
        <Stack.Screen name="YoMama Roasts" component={Yomama} />
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
      <Block>
        <Block flex={0.4} margin={20} bottom>
                <Image source={{
                    uri:'data:image/png;base64,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',
                    height:60,
                    width:60,}}
                    resizeMode="center"
                    style={{
                        borderRadius:25,
                    }}/>
                <Text title color="white" marginTop>A Cool App Name</Text>
                <Text size={17} color="white" marginTop>coolapp@gmail.com</Text>
        </Block>
        <Block>
        <DrawerItem
            label="Facts"
            onPress={() => props.navigation.navigate("Facts")}
            labelStyle={{marginLeft:-15,color:'white'}}
            icon={()=><Entypo name="bookmark" size={24} color="white" />}    />
            <DrawerItem
            label="Jokes"
            onPress={() => props.navigation.navigate("Jokes")}
            labelStyle={{marginLeft:-15,color:'white'}}
            icon={()=><MaterialCommunityIcons name="emoticon-lol" size={24} color="white" />}/>
            <DrawerItem
            label="PickUps"
            onPress={() => props.navigation.navigate("PickUps")}
            labelStyle={{marginLeft:-15,color:'white'}}
            icon={()=><MaterialCommunityIcons name="emoticon-cool" size={24} color="white" />}/>
            <DrawerItem
            label="Roasts"
            onPress={() => props.navigation.navigate("Roasts")}
            labelStyle={{marginLeft:-10,color:'white'}}
            icon={()=><FontAwesome5 name="fire" size={24} color="white" />}/>
            <DrawerItem
            label="YoMama Roasts"
            onPress={() => props.navigation.navigate("YoMama Roasts")}
            labelStyle={{marginLeft:-15,color:'white'}}
            icon={()=><FontAwesome5 name="firefox" size={24} color="white" />}/>
        </Block>
      </Block>
    </DrawerContentScrollView>
  );
};

export default () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#0575E6', '#021B79']}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={{ flex: 1 }}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}
        sceneContainerStyle={{ backgroundColor: 'transparent' }}
        drawerContent={props => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}>
        <Drawer.Screen name="Screens">
          {props => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    overflow:'hidden',
  },
  drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent',overflow:"hidden" },
});