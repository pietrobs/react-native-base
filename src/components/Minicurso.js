import React, { Component } from 'react';

import { TextInput, View, Text, Image } from 'react-native';


export default class Minicurso extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }


    render() {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 5, margin: 5 }}>
                <View>
                    <Image
                        style={{ width: 80, height: 80 }}
                        source={this.props.imagem}
                    />
                </View>
                <View style={{ paddingHorizontal: 5 }}>
                    <Text style={{ fontFamily: 'avenir-black', color: 'black' }}>
                        {this.props.tema}
                        <Text style={{ color: 'gray', fontSize: 10 }}>{this.props.data}</Text>
                    </Text>

                    <Text style={{ fontFamily: 'avenir-black', color: 'gray', fontSize: 10 }}>por {this.props.ministrante}</Text>
                    <Text style={{ fontFamily: 'avenir-black', color: 'gray', fontSize: 10 }}> {this.props.informacoes}</Text>
                </View>
            </View>
        );
    }

}