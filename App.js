import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: '',
      deco: '',
      sum: 0,
      pole:'0',
      deit:'0',
    };
  }

  OnPress0() {
    var number = this.state.number1+'0';
    if (this.state.number1==0 && this.state.pole=='0' || this.state.deit=='1'){
      number='0';
      this.setState({ deit: '0' });
    }
    this.setState({ number1: number });
    this.setState({ sum: number });
  }

  OnPress1() {
    var number = this.state.number1+'1';
    if (this.state.number1==0 && this.state.pole=='0' || this.state.deit=='1'){
      number='1';
      this.setState({ deit: '0' });
    }
    this.setState({ number1: number });
    this.setState({ sum: number });
  }

  OnPress2() {
    var number = this.state.number1+'2';
    if (this.state.number1==0 && this.state.pole=='0' || this.state.deit=='1'){
      number='2';
      this.setState({ deit: '0' });
    }
    this.setState({ number1: number });
    this.setState({ sum: number });
  }

  OnPress3() {
    var number = this.state.number1+'3';
    if (this.state.number1==0 && this.state.pole=='0' || this.state.deit=='1'){
      number='3';
      this.setState({ deit: '0' });
    }
    this.setState({ number1: number });
    this.setState({ sum: number });
  }

  OnPress4() {
    var number = this.state.number1+'4';
    if (this.state.number1==0 && this.state.pole=='0' || this.state.deit=='1'){
      number='4';
      this.setState({ deit: '0' });
    }
    this.setState({ number1: number });
    this.setState({ sum: number });
  }

  OnPress5() {
    var number = this.state.number1+'5';
    if (this.state.number1==0 && this.state.pole=='0' || this.state.deit=='1'){
      number='5';
      this.setState({ deit: '0' });
    }
    this.setState({ number1: number });
    this.setState({ sum: number });
  }

  OnPress6() {
    var number = this.state.number1+'6';
    if (this.state.number1==0 && this.state.pole=='0' || this.state.deit=='1'){
      number='6';
      this.setState({ deit: '0' });
    }
    this.setState({ number1: number });
    this.setState({ sum: number });
  }

  OnPress7() {
    var number = this.state.number1+'7';
    if (this.state.number1==0 && this.state.pole=='0' || this.state.deit=='1'){
      number='7';
      this.setState({ deit: '0' });
    }
    this.setState({ number1: number });
    this.setState({ sum: number });
  }

  OnPress8() {
    var number = this.state.number1+'8';
    if (this.state.number1==0 && this.state.pole=='0' || this.state.deit=='1'){
      number='8';
      this.setState({ deit: '0' });
    }
    this.setState({ number1: number });
    this.setState({ sum: number });
  }

  OnPress9() {
    var number = this.state.number1+'9';
    if ( this.state.number1==0 && this.state.pole=='0' || this.state.deit=='1'){
      number='9';
      this.setState({ deit: '0' });
    }
    this.setState({ number1: number });
    this.setState({ sum: number });
  }

  OnPressPloe() {
    var number = this.state.number1+'.';
    if (this.state.pole=='0'){
      this.setState({ number1: number });
      this.setState({ sum: number });
      this.setState({ pole: '1' });
    }
    if (this.state.number1=='0' && this.state.sum%1.0==0){
      this.setState({ number1: number });
      this.setState({ sum: number });
      this.setState({ pole: '1' });
    }
  }

  OnPressAC() {
    var number = 0;
    this.setState({ number1: number });
    this.setState({ number2: number });
    this.setState({ sum: number });
    this.setState({ pole: '0' });
    this.setState({ deco: number });
    this.setState({ deit: '0' });
  }

  OnPressPlus() {
    var number = '+' ;
    var num2=this.state.number1;
    this.setState({ number2: num2 });
    this.setState({ deco: number });
    this.setState({ deit: '1' });
    this.setState({ pole: '0' });
  }
  OnPressMinus() {
    var number = '-' ;
    var num2=this.state.number1;
    this.setState({ number2: num2 });
    this.setState({ deco: number });
    this.setState({ deit: '1' });
    this.setState({ pole: '0' });
  }
  OnPressCross() {
    var number = '*' ;
    var num2=this.state.number1;
    this.setState({ number2: num2 });
    this.setState({ deco: number });
    this.setState({ deit: '1' });
    this.setState({ pole: '0' });
  }
  OnPressPlas() {
    var number = '/' ;
    var num2=this.state.number1;
    this.setState({ number2: num2 });
    this.setState({ deco: number });
    this.setState({ deit: '1' });
    this.setState({ pole: '0' });
    

  }
  OnPressMod() {
    var number = this.state.number1/100 ;
    this.setState({ number1: number });
    this.setState({ sum: number });
    
    
  }
  OnPressRe() {
    var number = this.state.number1*-1 ;
    this.setState({ number1: number });
    this.setState({ sum: number });
  }

  OnPressSet() {
    var num1 = parseFloat(this.state.number1);
    var num2 = parseFloat(this.state.number2);
    if (this.state.deco=='+')
    {
      this.setState({ number1: num2+num1 });
      this.setState({ number2:'0' });
      this.setState({ sum: num2+num1 });
      this.setState({ deit: '1' });
      
    }
    if (this.state.deco=='-')
    {
      this.setState({ number1: num2-num1 });
      this.setState({ number2:'0' });
      this.setState({ sum: num2-num1 });
      this.setState({ deit: '1' });
      
    }
    if (this.state.deco=='*')
    {
      this.setState({ number1: num2*num1 });
      this.setState({ number2:'0' });
      this.setState({ sum: num2*num1 });
      this.setState({ deit: '1' });
      
    }
    if (this.state.deco=='/')
    {
      this.setState({ number1: num2/num1 });
      this.setState({ number2:'0' });
      this.setState({ sum: num2/num1 });
      this.setState({ deit: '1' });
    }
    
  }

  render() {
    return (
      <LinearGradient
        //https://uigradients.com/#Reef
        colors={['#000000', '#000000', '#000000']}
        style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.5 }} />

          <View
            style={{
              flex: 1.5,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#000000',
                padding: 5,
                margin: 5,
              }}
            />
            <Text title="0" style={styles.txtM}>
              {this.state.sum}
            </Text>
          </View>
          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.OnPressAC()}>
              <Text title="0" style={styles.txt}>
                AC
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => this.OnPressRe()} >
              <Text title="0" style={styles.txt}>
                +-
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => this.OnPressMod()}>
              <Text title="0" style={styles.txt}>
                %
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnEx} onPress={() => this.OnPressPlas()}>
              <Text title="0" style={styles.txt}>
                ÷
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.btnNum} onPress={() => this.OnPress7()}>
              <Text title="0" style={styles.txt}>
                7
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnNum} onPress={() => this.OnPress8()}>
              <Text title="0" style={styles.txt}>
                8
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnNum} onPress={() => this.OnPress9()}>
              <Text title="0" style={styles.txt}>
                9
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnEx} onPress={() => this.OnPressCross()}>
              <Text title="0" style={styles.txt}>
                x
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.btnNum} onPress={() => this.OnPress4()}>
              <Text title="0" style={styles.txt}>
                4
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnNum} onPress={() => this.OnPress5()}>
              <Text title="0" style={styles.txt}>
                5
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnNum} onPress={() => this.OnPress6()}>
              <Text title="0" style={styles.txt}>
                6
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnEx} onPress={() => this.OnPressMinus()}>
              <Text title="0" style={styles.txt}>
                -
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.btnNum} onPress={() => this.OnPress1()}>
              <Text title="0" style={styles.txt}>
                1
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnNum} onPress={() => this.OnPress2()}>
              <Text title="0" style={styles.txt}>
                2
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnNum} onPress={() => this.OnPress3()}>
              <Text title="0" style={styles.txt} >
                3
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnEx} onPress={() => this.OnPressPlus()}>
              <Text title="0" style={styles.txt}>
                +
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.btn0} onPress={() => this.OnPress0()}>
              <Text title="0" style={styles.txt}>
                0
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnNum} onPress={() => this.OnPressPloe()}>
              <Text title="0" style={styles.txt}>
                .
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnEx} onPress={() => this.OnPressSet()}>
              <Text title="0" style={styles.txt}>
                =
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  btn: {
    flex: 1,
    alignItems: 'center',
    height: 70,
    width: 70,
    backgroundColor: '#BDBBBA',
    borderRadius: 50,
    padding: 5,
    margin: 5,
  },
  btnEx: {
    flex: 1,
    alignItems: 'center',
    height: 70,
    width: 70,
    backgroundColor: '#FF5733',
    borderRadius: 50,
    padding: 5,
    margin: 5,
  },
  btn0: {
    flex: 2,
    alignItems: 'center',
    height: 70,
    width: 140,
    backgroundColor: '#63605F',
    borderRadius: 50,
    padding: 10,
    margin: 10,
  },
  btnNum: {
    flex: 1,
    alignItems: 'center',
    height: 70,
    width: 70,
    backgroundColor: '#63605F',
    borderRadius: 50,
    padding: 5,
    margin: 5,
  },
  txt: {
    color: '#000000',
    fontSize: 40,
  },
  txtM: {
    color: '#FFFFFF',
    fontSize: 80,
  },
});
