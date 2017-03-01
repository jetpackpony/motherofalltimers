/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Timer from './timer';

export default class MotherOfAllTimers extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}>
          <Timer size="100" time="30000"/>
          <Timer size="100" time="50000"/>
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}>
          <Timer size="100" time="30000"/>
          <Timer size="100" time="50000"/>
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}>
          <Timer size="100" time="30000"/>
          <Timer size="100" time="50000"/>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('motherofalltimers', () => MotherOfAllTimers );
