import React from 'react';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { Text, View,TextInput,TouchableOpacity,StyleSheet,KeyboardAvoidingView,ToastAndroid } from 'react-native';
import MyHeader from '../components/Header'
import { Button } from 'react-native';
import db from '../config'

export default class WriteStoryScreen extends React.Component {
  constructor(){
    super()
    this.state=({
      title:'',
      author:'',
      story:''

    })
  }
  addStory=()=>{
    db.collection('stories').add({
      'title':this.state.title,
      'author':this.state.author,
      'story':this.state.story
    })
    ToastAndroid.show('Story submited successfully',SHORT)
    this.setState({
      title:'',
      author:'',
      story:''
    })
  }
    render(){
  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView behavior='padding'>
      <View>
        <MyHeader
        text ='Write Your Own Story'
        />
        <View style={style.viewStyle}>
        <TextInput placeholder='Title of Your Book' style={style.Titleinput} value={this.state.title} onChangeText={(text)=>{
          this.setState({title:text.toUpperCase()})
        }}/>
        <TextInput placeholder='Name of Author' style={style.authorinput} value={this.state.author} onChangeText={(text)=>{
          this.setState({author:text})
        }}/>
        <TextInput placeholder='Your Story' style={style.storyinput} value={this.state.story} onChangeText={(text)=>{
          this.setState({story:text})
        }}/>
        <TouchableOpacity title='submit' style={style.submitButton}  onPress={()=>{
          this.addStory()
        }}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}
}
const style=StyleSheet.create({
  submitButton:{
    borderWidth:1,
     height:30, 
     width:50,
      alignItems:'center', 
      justifyContent:'center',
       backgroundColor:'green' 
     },
     viewStyle:{
          alignItems:'center', 
          justifyContent:'center',         
     },
     storyinput:{
       width:200,
       height:500, 
       justifyContent:'center',  
     },
     authorinput:{
      width:200,
      height:20,
      alignItems:'center', 
      justifyContent:'center',  
    },
    Titleinput:{
      width:200,
      height:20,
      alignItems:'center', 
      justifyContent:'center',  
    }
})