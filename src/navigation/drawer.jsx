import React, {useState} from 'react'
import {StyleSheet} from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

import ExploreVideosView from '../layouts/exploreVideos'
import CreateNewFaceView from '../layouts/createNewFace'
import CustomDrawer from '../views/customDrawer'
import DrawerIcon from '../components/drawerIcon'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

const Screens = ({navigation, style}) => {
    return (
        <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
            <Stack.Navigator
                screenOptions={{
                    headerLeft: () => (
                        <DrawerIcon openDrawer={() => navigation.openDrawer()}/>
                    )
                }}>
                <Stack.Screen name="exploreVideos" component={ExploreVideosView}/> 
                <Stack.Screen name="createNewFace" component={CreateNewFaceView}/> 
            </Stack.Navigator>
        </Animated.View>
    )
}

export default () => {
    const [progress, setProgress] = useState(new Animated.Value(0))

    const scale = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8],
    })
    const borderRadius = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 16],
    });
    const animatedStyle = { borderRadius, transform: [{ scale }] };

    return (
        <LinearGradient style={{ flex: 1 }} colors={['#337AB7', '#4A00E0']}>
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
                    return <CustomDrawer {...props} />;
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
        shadowColor: '#000',
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 5,
    },
    drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
});