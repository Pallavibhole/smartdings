/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import {
  Text, TextInput, Alert, Platform, StyleSheet,
  SafeAreaView, StatusBar, View, BackHandler, YellowBox, LogBox, I18nManager
} from 'react-native';
import Routes from './Routes/Routes';
import { setJSExceptionHandler, getJSExceptionHandler } from 'react-native-exception-handler';
import { setNativeExceptionHandler } from "react-native-exception-handler";
import Orientation from 'react-native-orientation-locker';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }

    //this.registerJsExceptionHandler();

    /*For Text disable system font scaling*/
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;

    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.allowFontScaling = true;
    Orientation.lockToPortrait();
  }

  registerJsExceptionHandler() {
    const setNativeHandler = (errorString => {
      //You can do something like call an api to report to dev team here
      //example
      // fetch('http://<YOUR API TO REPORT TO DEV TEAM>?error='+errorString);

      // console.log('------------------- NATIVE HANDLER ------------------');
      // console.log('native log : ', errorString);

      Alert.alert(
        "Unexpected error occurred",
        "Please close the app and start again.",
        [
          {
            text: "Close",
            onPress: () => {
              BackHandler.exitApp();
            }
          }
        ]
      );

      //
    });

    const exceptionhandler = (error, isFatal) => {
      Alert.alert(
        "Unexpected error occurred",
        "Please close the app and start again.",
        [
          {
            text: "Close",
            onPress: () => {
              BackHandler.exitApp();
            }
          }
        ]
      );

    };

    setJSExceptionHandler(exceptionhandler, true);
    setNativeExceptionHandler(setNativeHandler, true);

  }

  async componentDidMount() {

    YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);
    LogBox.ignoreAllLogs('VirtualizedLists should never be nested')

  }

  componentWillUnmount() {
    // for unload orientation
    Orientation.lockToLandscape();
    
  }

  

  render() {
    return (
      <>
        <SafeAreaView style={styles.topSafeArea} />
        <SafeAreaView style={styles.bottomSafeArea}>
          <StatusBar backgroundColor={'white'} barStyle='dark-content' />
          <Routes />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: 'white'
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: 'white'
  },

  

});
