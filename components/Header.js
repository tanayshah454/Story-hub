import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Header}from 'react-native-elements'
class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <Header
     centerComponet={{text :this.props.title}}
     />
    );
  }
}

export default Header;
