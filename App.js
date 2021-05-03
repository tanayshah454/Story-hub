import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator,} from 'react-navigation-tabs'
import ReadStoryScreen from './screens/ReadStory'
import WriteStoryScreen from './screens/WriteStory'
import LoginScreen from './screens/LoginScreen'

export default class App extends React.Component {
  render(){
  return(
<AppContainer/>
  )
}
}
const TabNavigator = createBottomTabNavigator({
  ReadStory: {screen: ReadStoryScreen},
  WriteStory: {screen: WriteStoryScreen},
},
  {
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "ReadStory"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "WriteStory"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
)
const SwitchNavigator=createSwitchNavigator({
  LoginScreen:LoginScreen,
  TabNavigator:TabNavigator
})
const AppContainer=createAppContainer(SwitchNavigator)