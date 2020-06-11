import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    Alert,
    TextInput,
    TouchableOpacity
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class ProfileChange extends React.Component {
    constructor (){
        super();
        this.state = {
            firstName : '',
            lastName : '',
            contact : '',
            address : '',
            docId : ''
        }
    }

getUserDetails = () => {
    var user = firebase.auth().currentUser
    var email = user.email

db.collection('Users').where('emailId', '==', email).get().then(snapshot => {
snapshot.forEach(doc => {
    var data = doc.data()
    this.setState({
        emailId : data.emailId,
        firstName : data.firstName,
        lastName : data.lastName,
        address  : data.address,
        contact : data.contact,
        docId : doc.id
    })
})
    }
)}

saveUserDetails = () => {
    db.collection('Users').doc(this.state.docId).update({
        'firstName' : this.state.firstName,
        'lastName' : this.state.lastName,
        'address' : this.state.address,
        'contact' : this.state.contact
    })
    Alert.alert ("Profile updated successfully!!")
}

componentDidMount(){this.getUserDetails()}

render (){
    return(
     <View style = {{flex : 1, alignItems  : 'center', justifyContent : 'center'}}>
<TextInput
    placeholder = {"First Name"}
    maxLength = {15}
    onChangeText = {(text) => {
    this.setState({firstName : text})
}}
value = {this.state.firstName}
/>

<TextInput
placeholder = {"Last Name"}
maxLength = {15}
onChangeText = {(text) => {
this.setState({lastName : text})
}}
value = {this.state.lastName}
/>

<TextInput
placeholder = {"Contact"}
maxLength = {10}
keyboardType = {"numeric"}
onChangeText = {(text) => {
this.setState({contact : text})
}}
value = {this.state.contact}
/>

<TextInput
placeholder = {"Address"}
multiline = {true}
onChangeText = {(text) => {
this.setState({address : text})
}}
value = {this.state.address}
/>

<TouchableOpacity 
style = {styles.button}
onPress = {() => {this.saveUserDetails() }} >
    <Text>Save</Text>
</TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
button : {
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#00FFFF',
    width : '75%',
    height : '30%'
}
})