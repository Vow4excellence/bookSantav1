import React from 'react';
import {DrawerItems} from 'react-navigation-drawer';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import firebase from 'firebase';
import db from '../config';

export default class CustomSidebarMenu extends React.Component {
render() {
 return (
<View style = {{flex : 1}}>
    <View style = {{flex:0.8}}>
        <DrawerItems {...this.props}/>
    </View>
    <View style= {{ flex:0.2,  justifyContent:'flex-end',     paddingBottom:30}}>
    <TouchableOpacity style = {{ height:30,    width:'100%',    justifyContent:'center',    padding:10}}
    onPress = {() => {
   this.props.navigation.navigate('WelcomeScreen')
   firebase.auth().signOut()
        }}
        >
            <Text style = {{fontSize: 30, fontWeight:'bold'}}>Log Out</Text>
        </TouchableOpacity>
    </View>
</View>
)}
}

const styles = StyleSheet.create({

})