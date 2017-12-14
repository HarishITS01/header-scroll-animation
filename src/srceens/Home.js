import React, { Component } from 'react';
import {ReactNativeHome} from '../components/ReactNativeParallaxHeader';
import Talks from'../components/Talks';
import login from'../components/LogIn'
import {
  Text,
  View
} from 'react-native';
export default class Home extends Component {

    render() {
        return (
            <View>
                <ReactNativeHome/>
            </View>
        );
    }
}


