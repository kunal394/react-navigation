import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackNavigator, withNavigation } from 'react-navigation';
import { Constants } from 'expo';
import Touchable from 'react-native-platform-touchable';
import createDumbStack from './screens/createDumbStack';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

@withNavigation
class ExampleItem extends React.Component {
  render() {
    return (
      <View
        style={{
          borderBottomColor: '#eee',
          borderBottomWidth: 1,
        }}>
        <Touchable
          onPress={this._handlePress}
          style={{
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: this.props.common ? '#fffcd3' : '#fff',
          }}>
          <Text style={{ fontSize: 15 }}>
            {this.props.title} {this.props.common ? '(commonly used)' : null}
          </Text>
        </Touchable>
      </View>
    );
  }

  _handlePress = () => {
    this.props.navigation.navigate(this.props.route);
  };
}

class ExampleListScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingTop: 50, backgroundColor: '#fff' }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 20,
              paddingBottom: 20,
            }}>
            SafeAreaView Examples
          </Text>

          <ExampleItem title="Basic Tabs" route="tabs" common />
          {/* <ExampleItem title="Basic Drawer" route="drawer" /> */}
          <ExampleItem title="Header height" route="headerHeight" common />
          <ExampleItem title="Header padding" route="headerPadding" />
          <ExampleItem
            title="Header height and padding"
            route="headerHeightAndPadding"
          />
          <ExampleItem
            title="Header padding as percent"
            route="headerPaddingPercent"
          />
          <ExampleItem title="Header with margin" route="headerMargin" />
          <ExampleItem title="Tab bar height" route="tabBarHeight" common />
          <ExampleItem title="Tab bar padding" route="tabBarPadding" common />
          <ExampleItem
            common
            title="Tab bar height and padding"
            route="tabBarHeightAndPadding"
          />
          <ExampleItem title="Tab bar margin" route="tabBarMargin" />
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: Constants.statusBarHeight,
            backgroundColor: '#fff',
          }}
        />
      </View>
    );
  }
}

const StackWithHeaderHeight = createDumbStack({
  title: 'height: 150',
  headerStyle: { height: 150 },
});
const StackWithHeaderPadding = createDumbStack({
  title: 'padding: 100',
  headerStyle: { padding: 100 },
});
const StackWithHeaderHeightAndPadding = createDumbStack({
  title: 'height: 150, padding: 100',
  headerStyle: { height: 150, padding: 100 },
});
const StackWithHeaderPaddingPercent = createDumbStack({
  title: 'padding: 60%',
  headerStyle: { padding: '60%' },
});
const StackWithHeaderMargin = createDumbStack({
  title: 'margin: 20 (but why? :/)',
  headerStyle: { margin: 20 },
});

const RootStack = StackNavigator(
  {
    exampleList: {
      screen: ExampleListScreen,
    },
    tabs: {
      screen: TabsScreen,
    },
    headerHeight: {
      screen: StackWithHeaderHeight,
    },
    headerPadding: {
      screen: StackWithHeaderPadding,
    },
    headerHeightAndPadding: {
      screen: StackWithHeaderHeightAndPadding,
    },
    headerPaddingPercent: {
      screen: StackWithHeaderPaddingPercent,
    },
    headerMargin: {
      screen: StackWithHeaderMargin,
    },
  },
  {
    headerMode: 'none',
    cardStyle: {
      backgroundColor: '#fff',
    },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
