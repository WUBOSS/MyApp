import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    StatusBar,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';


import dismissKeyboard from "dismissKeyboard"

export default class MyApp extends Component {

    constructor(props){
        super(props);

        this.state = {

            isfacous:false,
            isPwdFacous:false,
            phone:"",
            pwd:"",
            enable:false
        };

    }

    onChangeText(text,index){
        if(index==0){
            this.setState({phone:text});
        }else {
            this.setState({pwd:text});
        }
      if(this.state.pwd.length>0&&this.state.phone.length>0){
          this.setState({enable:true});
      }else {
          this.setState({enable:false});
      }
    }
    bgClick(){
        dismissKeyboard();
    }
    render() {
        return (

            <TouchableWithoutFeedback
                onPress={this.bgClick}>
                <Image   source={require("../image/login-bg.png")} style={styles.container} >
                    <StatusBar hidden={false} translucent={true} backgroundColor="transparent">

                    </StatusBar>
                    <Text style={{marginTop:StatusBar.currentHeight+25,color: 'white', alignSelf: 'flex-end',fontSize:15,marginRight: 18}}>
                        {"注册"}
                    </Text>

                    <Image source={require("../image/login-logo.png")} style={styles.logo}>

                    </Image>
                    <TextInput  selectionColor="white" onBlur={()=>{ this.setState({isfacous:false})}} onFocus={()=>{ this.setState({isfacous:true})}} placeholderTextColor="#70717A" onChangeText={(text) => this.onChangeText(text,0)}clearButtonMode="while-editing"  underlineColorAndroid={"transparent"}  placeholder="手机号/邮箱" style={[styles.input,this.state.isfacous?styles.input_facous:styles.input_blur]} >

                    </TextInput>
                    <TextInput secureTextEntry={true} selectionColor="white" onBlur={()=>{ this.setState({isPwdFacous:false})}} onFocus={()=>{ this.setState({isPwdFacous:true})}} placeholderTextColor="#70717A" onChangeText={(text) => this.onChangeText(text,1)}clearButtonMode="while-editing"  underlineColorAndroid={"transparent"}  placeholder="密码" style={[styles.input,this.state.isPwdFacous?styles.input_facous:styles.input_blur,{marginTop:15}]} >

                    </TextInput>


                    <TouchableWithoutFeedback >
                        <View  style={[styles.button,this.state.enable?styles.button_enable:styles.button_disable]}>
                            <Text  style={[styles.text_login,this.state.enable?styles.text_enable:styles.text_disable]}>
                                {"登录"}
                            </Text>
                        </View>

                    </TouchableWithoutFeedback>



                    <Text>
                        {this.state.phone+this.state.pwd}
                    </Text>






                </Image>
            </TouchableWithoutFeedback>


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
    input:{
        textAlign:"center",
        borderRadius:25,
        borderWidth: 1,
        height:50,
        fontSize:16,
        paddingLeft:25,
        padding:0,
        marginTop:44,
        color:"white",
        marginLeft: 25,
        marginRight:25,
        alignSelf:"stretch"
    },
    input_facous:{
        borderColor:"white"
    },
    input_blur:{
        borderColor:"#70717A"
    },
    text_login:{

        flex:1,
        fontSize:16,
        textAlign:"center",
        textAlignVertical: "center"
    },

    text_enable:{

        color:"white",

    },
    text_disable:{

        color:"#70717A",


    },
    button:{
        marginTop:50,
        borderRadius:25,

        marginLeft:25,
        marginRight:25,
        alignSelf:"stretch",
        height: 50,

    },
    button_enable:{

        backgroundColor:"#3B7CEF",

    },
    button_disable:{

        backgroundColor:"#1F4D76",


    }
});