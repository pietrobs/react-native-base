import React, { Component } from 'react';
import { KeyboardAvoidingView, View, SafeAreaView, ImageBackground, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';

import {
  LinearIcon,
  Logo,
  Text,
  CustomInput
} from '../components';

import Colors from '../theme/colors';

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
    };
  }

  render() {
    return (
      <ImageBackground
        source={require("../../assets/images/bg.png")}
        style={{ width: '100%', height: '100%' }}
      >
        <SafeAreaView style={{ flex: 1, paddingTop: Constants.statusBarHeight, paddingHorizontal: 16 }}>
          <View style={{ alignItems: 'center', marginTop: 52 }}>
            <Logo color="white" style={{ width: 212, height: 52 }} />
            <Text fontWeight="light" color="white" style={{ width: '60%', textAlign: 'center' }} >Semana do Curso de Ciência da Computação</Text>
          </View>


          <View style={{ flex: 1, justifyContent: 'center' }}>


            <CustomInput
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
              label="E-mail"
              labelColor="white"
            />

            <CustomInput
              value={this.state.senha}
              onChangeText={(senha) => this.setState({ senha })}
              secureTextEntry
              label="Senha"
              labelColor="white"
            />

          </View>

          <KeyboardAvoidingView behavior="padding" enabled>
            <View style={{ alignItems: 'center', marginBottom: 10 }}>
              <TouchableHighlight
                style={{ borderColor: 'white', borderWidth: 1, borderStyle: 'solid', borderRadius: 50, padding: 10, width: '100%', backgroundColor: Colors.theme.primaryColor }}
                onPress={() => this.props.navigation.navigate('DashboardTabs')}
              >
                <Text color="white" fontWeight="bold" style={{ fontSize: 22, textAlign: 'center' }}>Entrar</Text>
              </TouchableHighlight>
              <Text color="white" style={{ marginTop: 20 }}>
                Ainda não tem conta?
              <Text fontWeight="bold" color={Colors.theme.primaryColor} style={{ textAlign: 'center', textDecorationLine: 'underline' }}> Cadastre-se</Text>
              </Text>
            </View>
          </KeyboardAvoidingView>

        </SafeAreaView>
      </ImageBackground>
    );
  }
}


export default LoginScreen;
