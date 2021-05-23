import React from 'react'
import {DrawerItem} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome5';

const CustomDrawerItem = (props) => {
    return (
        <DrawerItem
            label={props.name}
            labelStyle={{fontSize: 12, color: "#ccc"}}
            onPress={props.navigatePress}
            icon={() => 
                <Icon
                    size={20}
                    color= '#ccc'
                    name={props.iconName}
                />
            }
        />
    )
}

export default CustomDrawerItem