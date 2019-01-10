import React from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation';

export default class DetailsScreen extends React.Component<NavigationScreenProps> {
    constructor(props: NavigationScreenProps) {
        super(props)
        this.refresh = this.refresh.bind(this)
        this.goHome = this.goHome.bind(this)
        this.goBack = this.goBack.bind(this)
    }

    public render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen</Text>
                <Button
                    title="Refresh"
                    onPress={this.refresh}
                />
                <Button
                    title="GoHome"
                    onPress={this.goHome}
                />
                <Button
                    title="GoBack"
                    onPress={this.goBack}
                />
            </View>
        );
    }
    private refresh() {
        this.props.navigation.push('Detail')
    }

    private goHome() {
        this.props.navigation.navigate('Home')
    }

    private goBack() {
        this.props.navigation.goBack()
    }
}
