import React from 'react'
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

// Icon button => Open Drawer
const DrawerIcon = (props) => {
    const iconDrawerOpen = "navicon"
    return (
        <Button
            onPress={props.openDrawer}
            buttonStyle={{ 
                backgroundColor: "transparent", 
            }}
            icon={
                <Icon
                name={iconDrawerOpen}
                size={40}
                color="#000"/>
            }
        />
    )
}

export default DrawerIcon