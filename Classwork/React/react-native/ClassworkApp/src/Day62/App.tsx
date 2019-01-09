/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, { Component } from 'react';
import button from './button.jpg'
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, Alert, TextInput , FlatList} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

interface IAppState { 
    text: string
}

type noProps = {}
export default class App extends Component<noProps, IAppState> {
    constructor(props: noProps) {
        super(props)
        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    private styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
            flex: 1,
            justifyContent: 'center',
        },
        instructions: {
            color: '#333333',
            marginBottom: 5,
            textAlign: 'center',
        },
        image: {
            height: 50,
            width: 50
        },
        textinput: {
            borderColor: 'gray',
            borderWidth: 1,
            height: 40
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        }
    });

    public render() {
        return (
            <View style={this.styles.container}>
                <Text style={this.styles.welcome}>Welcome to React Native!</Text>
                <Text style={this.styles.instructions}>To get started, edit App.tsx</Text>
                <Text style={this.styles.instructions}>{instructions}</Text>
                <TouchableOpacity onPress={this.handlePress}>
                    <View><Image style={this.styles.image} source={button} /></View>
                </TouchableOpacity>
                <TextInput style={this.styles.textinput}
                    onChangeText={this.handleChange}
                >
                </TextInput>
                <Text style={this.styles.instructions}>You Entered:{this.state.text}</Text>
                <FlatList
                    data={[{ key: 'a' }, { key: 'b' }]}
                    renderItem={({ item }) => <Text>{item.key}</Text>}
                />
            </View>
        );
    }

    private handlePress() {
        Alert.alert('Your pressed me')
    }

    private handleChange(text: string) {
        this.setState({ text })
    }
}