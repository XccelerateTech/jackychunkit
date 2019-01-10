import React from 'react'
import Home from './Home'
import Detail from './Detail'
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        Detail: {
            screen: Detail
        }
    },
    {
        initialRouteName: "Home" 
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}