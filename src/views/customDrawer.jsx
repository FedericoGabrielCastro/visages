import React from 'react'
import {StyleSheet, Image, View, Text} from 'react-native'
import {DrawerContentScrollView} from '@react-navigation/drawer'
import {TITLE_AVATAR_IMAGE, CONTACT_TITLE} from '../const/customDrawer'

import CustomDrawerItem from '../components/customDrawerItem'

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props} scrollEnabled={false} style={styles.drawerScroll} >
            <View>
                <View style={styles.avatarView}>
                    <Image
                        style={styles.avatarImage}
                        source={require("../assets/avatar.jpeg")}
                        
                    />
                    <Text style={styles.titleStyle}>{TITLE_AVATAR_IMAGE}</Text>
                    <Text style={styles.contactStyle}>{CONTACT_TITLE}</Text>
                </View>
                <CustomDrawerItem
                    name="exploreVideos"
                    navigatePress={() => props.navigation.navigate('exploreVideos')}
                    iconName="user-cog"
                />
                <CustomDrawerItem
                    name="createNewFace"
                    navigatePress={() => props.navigation.navigate('createNewFace')}
                    iconName="comments"
                />
                <CustomDrawerItem
                    name="createNewFace"
                    navigatePress={() => props.navigation.navigate('createNewFace')}
                    iconName="comments"
                />
                <CustomDrawerItem
                    name="createNewFace"
                    navigatePress={() => props.navigation.navigate('createNewFace')}
                    iconName="comments"
                />
                <CustomDrawerItem
                    name="createNewFace"
                    navigatePress={() => props.navigation.navigate('createNewFace')}
                    iconName="comments"
                />
                <CustomDrawerItem
                    name="Logout"
                    navigatePress={() => alert('Are your sure to logout?')}
                    iconName="walking"
                />
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    drawerScroll: {
        flex: 1,
    },
    avatarView: {
        flex: 0.4,
        marginTop: 20,
        marginBottom: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    avatarImage: {
        height: 100,
        width: 100,
        borderRadius: 30,
        resizeMode: "center"
    },
    contactStyle: {
        fontSize: 10
    },
    titleStyle: {
        fontSize: 20
    }
})

export default CustomDrawer