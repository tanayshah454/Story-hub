import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyHeader from '../components/Header'
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-elements'
import db from '../config'
import { FlatList } from 'react-native';

export default class ReadStoryScreen extends React.Component {
  constructor(){
    super()
    this.state={
      allStories:[],
      search:'',
      dataSource:[],
      data:[]
    }
  }
  componentDidMount(){
    this.retrieveStories()
  }
  retrieveStories=()=>{
    try{
      var allStories=[]
      db.collection('stories').get()
      .then((snapshot)=>{
        snapshot.forEach((doc)=>{
          allStories.push(doc.data())
        })
        this.setState({
          allStories:allStories
        })
      })
    }
    catch(error){
    console.error(error)  
    }
  }
  SearchTitle=(text)=>{
    const newData=this.state.allStories.filter((item)=>{
      const itemData=item.title?item.title.toUpperCase():''
      const textData=text.toUpperCase()
      return(itemData.indexOf(textData)>-1)
    })
    this.setState({
      dataSource:newData,

      search:text
    })
  }
    render(){
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <MyHeader
      title='Read Story'
      />
      <View style={{height:20, width:"100%"}}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={(text)=>{
          this.SearchTitle(text)
        }}
        value={this.state.search}
      />
      </View>
      <FlatList
      data={this.state.search===''?this.state.allStories:this.state.dataSource}
      renderItem={({item})=>(
        <View style={styles.itemContainer}>
          <Text style={styles.title}>
            {item.title}
          </Text>
          <Text>
            {item.author}
          </Text>
          <Text>
            {item.story}
          </Text>
          </View>
      )}
      keyExtractor={(item,index)=>{
        index.toString()
      }}
      ></FlatList>
    </View>
    </SafeAreaProvider>
  );
}
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: 'pink',
    padding:10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  itemContainer: {
    height: 80,
    width:'100%',
    borderWidth: 2,
    borderColor: 'pink',
    justifyContent:'center',
    alignSelf: 'center',
  }
});