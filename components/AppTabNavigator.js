import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from 'react-native';

import BookDonateScreen from '../screens/BookDonateScreen';
import BookRequestScreen from '../screens/BookRequestScreen';

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks : {
        screen : BookDonateScreen, 
        navigationOptions : {
 tabBarIcon : <Image source = {require("../assets/request-list.png")}
 style = {{width : 30, height : 30 }}/>,
            tabBarLabel : "Donate"}},
        
        RequestBooks : {
            screen : BookRequestScreen, 
            navigationOptions : {
tabBarIcon : <Image source = {require("../assets/request-book.png")}
    style = {{width : 30, height : 30 }}/>,
           tabBarLabel : "Request a Book"}},
})