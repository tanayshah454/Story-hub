import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text,TextInput,Button } from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        emailID:''
        ,password:''
    };
  }
  login=async(emailID,password)=>{
    if(emailID&&password){
        try{
            const response=await firebase.auth().signInWithEmailAndPassword(emailID,password)
            if(response){
                this.props.navigation.navigate('TabNavigator')
            }
        }
        catch(error){
            console.log(error.code)
            switch(error.code){
                case 'auth/user-not-found':alert('user not found')
                break;
                case 'auth/invalid-email': alert('incorrect email')
                break;
                case 'auth/wrong-password':alert('incorrect password')
            }
        }
    }
    else{
        alert('Please insert email ID and Password')
    }
  }
  render() {
    return (
      <View>
          <Text>E-mail Address</Text>
          <TextInput placeholder='abc@gmail.com'
          keyboardType='email-address'
          onChangeText={(text)=>{
              this.setState({
                  emailID:text
              })
          }}
          />
      
      <Text>Password</Text>
          <TextInput
          keyboardType="number-pad"
          secureTextEntry={true}
          onChangeText={(text)=>{
              this.setState({
                  password:text
              })
          }}
          />
          <Button title='login'onPress={()=>{
              this.login(this.state.emailID,this.state.password)
          }}/>
      </View>
    );
  }
}

export default LoginScreen;
