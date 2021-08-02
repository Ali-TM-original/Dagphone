import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
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
import PrivacyPolicy from "./Screens/PrivacyPolic"

//Icons
import { MaterialCommunityIcons, Entypo,FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = ({ navigation, style }) => {
  
  return (
    <Animated.View style={[{flex:1, overflow:'hidden'}, style]}>
      <Stack.Navigator
        initialRouteName="YoMama Roasts"
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          animationEnabled:true,
          transitionConfig: () => ({
            ScreenOrientation
          }),
          headerLeft: () => (
            <Button transparent onPress={() => navigation.openDrawer()}>
             <MaterialCommunityIcons name="hamburger" size={35} color="white" />
            </Button>
          ),
        }}>
        <Stack.Screen name="Facts" component={Fact} />
        <Stack.Screen name="Jokes" component={Joke} />
        <Stack.Screen name="PickUps" component={Pickup} />
        <Stack.Screen name="Roasts" component={Roast} />
        <Stack.Screen name="YoMama Roasts" component={Yomama} />
        <Stack.Screen name="Policy" component={PrivacyPolicy} />
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
                    uri:'http://cdn.dagpi.xyz/dagpi.png',
                    height:60,
                    width:60,}}
                    resizeMode="center"
                    style={{
                        borderRadius:25,
                    }}/>
                <Text title color="white" marginTop>DagPhone</Text>
                <Text size={17} color="white" marginTop>Dag@gmail.com</Text>
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
            label="YoMama"
            onPress={() => props.navigation.navigate("YoMama Roasts")}
            labelStyle={{marginLeft:-15,color:'white'}}
            icon={()=><FontAwesome5 name="firefox" size={24} color="white" />}/>
            <DrawerItem
            label="Privacy Policy"
            onPress={() => props.navigation.navigate("Policy")}
            labelStyle={{marginLeft:-15,color:'white'}}
            icon={()=><MaterialIcons name="policy" size={24} color="white" />}/>            
        </Block>
      </Block>
      <Block flex={false}>
        <DrawerItem
          label="Powered by Dagpi"
          labelStyle={{ color: 'white' }}
        />         
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