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
    TextInput,
    View,
    Image,
    Dimensions
} from 'react-native';

export default class MyApp extends Component {

  constructor(props){
      super(props);

      this.state = { textValue: "13979574150" };

  }

    onChangeText(text){
      this.setState({textValue:text});
  }
  render() {
    return (

        <Image source={require("./image/login-bg.png")} style={styles.container} >
            <StatusBar hidden={false} translucent={true} backgroundColor="transparent">

            </StatusBar>
            <Text style={{marginTop:StatusBar.currentHeight+25,color: 'white', alignSelf: 'flex-end',fontSize:15,marginRight: 18}}>
                {"注册"}
            </Text>

           <Image source={require("./image/login-logo.png")} style={styles.logo}>

           </Image>
            <TextInput ref="et" onChangeText={(text) => this.onChangeText(text)} placeholder={"请输入手机号"} style={{marginLeft: 25,marginRight:25,alignSelf:"stretch"}} >

            </TextInput>
            <Text style={{marginTop:StatusBar.currentHeight+25,color: 'white'}}>
                {this.state.textValue}
            </Text>
        </Image>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
      width:Dimensions.get("window").width,
      alignItems: "center"


  },
  logo:{
    marginTop: 49
  } ,
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
