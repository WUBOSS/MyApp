/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    StatusBar,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

export default class MyApp extends Component {
  render() {
    return (

        <Image source={require("./image/login-bg.png")} style={styles.container}>
            <StatusBar hidden={false} translucent={true} backgroundColor="transparent">

            </StatusBar>
            <Text style={{marginTop:StatusBar.currentHeight+25,color: 'white', alignSelf: 'flex-end',fontSize:15,marginRight: 18}}>
                {"注册"}
            </Text>
        </Image>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
      width:Dimensions.get("window").width


  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyApp', () => MyApp);
