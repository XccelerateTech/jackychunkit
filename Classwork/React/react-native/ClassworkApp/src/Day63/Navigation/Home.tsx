import React from "react";
import { Button, View, Text } from "react-native";
import { NavigationScreenProps } from 'react-navigation';

export default class HomeScreen extends React.Component<NavigationScreenProps> {
  constructor(props: NavigationScreenProps) {
    super(props)
    this.navToDetail = this.navToDetail.bind(this)
  }
  public render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={this.navToDetail}
        />
      </View>
    );
  }

  private navToDetail() {
    this.props.navigation.navigate('Detail')
  }
}