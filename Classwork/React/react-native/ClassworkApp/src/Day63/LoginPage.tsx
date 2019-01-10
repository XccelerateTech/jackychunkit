import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';

interface IAppState { 
    username: string
    password: string
}

type noProps = {}
export default class App extends Component<noProps, IAppState> {
    constructor(props: noProps) {
        super(props)
        this.state = {
            password: '',
            username: '',   
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
    }

    private styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
            flex: 1,
            justifyContent: 'center',
        }
    });

    public render() {
        return (
            <View style={this.styles.container}>
            <Text>Login</Text>
                <TextInput
                    placeholder='username'
                    onChangeText={this.handleUsername}
                />
                <TextInput 
                    placeholder='password'
                    onChangeText={this.handlePassword}
                    secureTextEntry={true}
                />
                <Button 
                onPress={this.handleSubmit}
                title="Submit" />
            </View>
        );
    }

    private handleSubmit() {
        Alert.alert(`Credential Recieved\nusername: ${this.state.username}\npassword: ${this.state.password})`)
    }

    private handleUsername(username: string) {
        this.setState({ username })
    }

    private handlePassword(password: string) {
        this.setState({ password })
    }
}