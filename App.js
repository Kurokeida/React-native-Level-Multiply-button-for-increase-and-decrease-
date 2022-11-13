
import React,{useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
  Button,
  Alert, 
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




export default class App extends React.Component {

 
  state = {
    selectionList: [1,10,100],
    MultiplyValue:1,

    MultiplyValueDummy1:1,
    value: 0,
    total_taps: 0,
    TempAlert:'Normal',

  }
  


  incrementValue = () => {      
    
    this.setState({
      value: this.state.value + this.state.MultiplyValue,
      total_taps: this.state.total_taps + this.state.MultiplyValue,

      //value:false,

    })

    if(this.state.MultiplyValue==10){
      this.setState({
        MultiplyValueDummy1: this.state.MultiplyValueDummy1 = 2
      })
    }

    if(this.state.MultiplyValue==100){
      this.setState({
        MultiplyValueDummy1: this.state.MultiplyValueDummy1 = 3
      })
    }

    if(this.state.value<50){
      this.setState({
        TempAlert: this.state.TempAlert = "Normal",
      })
    }

    if(this.state.value>50){
      this.setState({
        TempAlert: this.state.TempAlert = "High",
      })
    }


  }

  decrementValue = () => {      
    
    this.setState({
      value: this.state.value - this.state.MultiplyValue,
      total_taps: this.state.total_taps - this.state.MultiplyValue,

    })

    if(this.state.MultiplyValue==10){
      this.setState({
        MultiplyValueDummy1: this.state.MultiplyValueDummy1 = 2
      })
    }

    if(this.state.MultiplyValue==100){
      this.setState({
        MultiplyValueDummy1: this.state.MultiplyValueDummy1 = 3
      })
    }

    if(this.state.value<50){
      this.setState({
        TempAlert: this.state.TempAlert = "Normal",
      })
    }

    if(this.state.value<-50){
      this.setState({
        TempAlert: this.state.TempAlert = "Low",
      })
    }

  }



  render(){

    
    
    this.IncreaseMultiply=()=>{

        if (this.state.MultiplyValueDummy1==1){
            this,this.setState({
            MultiplyValue: this.state.MultiplyValue = this.state.selectionList[1]
      })
      Alert.alert("First")

    }

        if (this.state.MultiplyValueDummy1==2){
          this,this.setState({
          MultiplyValue: this.state.MultiplyValue = this.state.selectionList[2]
      })
      Alert.alert("Second")
    }

        if (this.state.MultiplyValueDummy1==3){
          this,this.setState({
          MultiplyValue: this.state.MultiplyValue = this.state.selectionList[0]
      })
      Alert.alert("Third")

}

  }





      return (
           <View>

  
            <View style={styles.alertBox}>
                <Text style={styles.alertBoxTxt}>{this.state.TempAlert}</Text>
            </View>


            <Text style={styles.NumberTxt}>{this.state.value}</Text>




              <TouchableOpacity style={styles.btn1} >
                <Text style={styles.btnTxt} onPress={this.IncreaseMultiply}>X-{this.state.MultiplyValue}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnincrement} >
                <Text style={styles.btnTxtincrement} onPress={this.incrementValue}>+</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btndecrement} >
                <Text style={styles.btnTxtdecrement} onPress={this.decrementValue}>-</Text>
              </TouchableOpacity>

           </View>

           
  );
  }


};

const styles = StyleSheet.create({
  NumberTxt:{
    fontSize:50,
    left:165,
    top:50
  },
  btn1:{
    backgroundColor:'red',
    height:100,
    width:100,
    alignContent:'center',
    justifyContent:'center',
    alignContent:'center',
    borderRadius:10,
    top:225,
    left:135
  },

  btnIncrease:{
    backgroundColor:'red',
    height:100,
    width:100,

  },
  btndecrement:{
    backgroundColor:'red',
    height:100,
    width:100,
    top:150,
    left:135
  },
  btnTxtincrement:{
    fontSize:90,
    left:25,
    top:-15,
  },
  btnTxtdecrement:{
    fontSize:130,
    left:30,
    top:-45,
  },
  btnincrement:{
    backgroundColor:'red',
    height:100,
    width:100,
    left:135
  },
  btnTxt:{
    fontSize:35,
  },
  alertBox:{
    position:'absolute',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'#fff1c9',
    height:100,
    width:100,
    top:40,
    left:280,
  },
  alertBoxTxt:{
    fontSize:30,
  }
});

