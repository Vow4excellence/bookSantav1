import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import ProfileChange from '../screens/ProfileChange';

import {AppTabNavigator} from './AppTabNavigator';
import {CustomSidebarMenu} from './CustomSidebarMenu';

export const AppDrawerNavigator = createDrawerNavigator ({
    Home : {screen : AppTabNavigator},
    Profile : {screen : ProfileChange},
},
    {contentComponent : CustomSidebarMenu},
    {initialRouteName : 'Home'
})