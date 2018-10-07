import React, { Component } from 'react';

import { TextInput, View, Text } from 'react-native';

// import { Text } from './Text';


export default class CustomInput extends Component {

    constructor() {
        super();

        this.state = {

        }
    }


    render() {
        return (
            <View>
                <Text style={{ fontFamily: 'avenir-black', color: this.props.labelColor }}>{this.props.label}</Text>
                <TextInput
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    underlineColorAndroid={this.props.labelColor}
                    style={{padding: 5, color: this.props.labelColor}}
                    selectionColor='rgba(255,255,255,.33)'
                    {...this.props}
                />
            </View>
        );
    }

}