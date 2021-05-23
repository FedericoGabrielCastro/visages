import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Drawer from '../navigation/drawer'

const HomePage = () => {
  return (
    <NavigationContainer>
        <Drawer/>
    </NavigationContainer>
  );
};

export default HomePage