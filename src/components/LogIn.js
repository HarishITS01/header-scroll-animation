import React, { Component } from 'react';
import { AsyncStorage, Platform, StyleSheet, Text, View, Button, Alert, TouchableHighlight, TouchableOpacity, Icon, Image, ScrollView, ActivityIndicator, FlatList } from 'react-native';

const json = [
    {
        txtCredit: '5 Credit/half hour',
        txtFacilities: 'Facilities',
        txtTitle: 'Splash',
        txtDescription: 'First Floor 4 Seats',
        txtSelectSartTime: 'Select Sart Time',
        txtSeletDuration: 'Selet Duration',
    },
    {
        txtCredit: '5 Credit/half hour',
        txtFacilities: 'Facilities',
        txtTitle: 'Splash',
        txtDescription: 'First Floor 4 Seats',
        txtSelectSartTime: 'Select Sart Time',
        txtSeletDuration: 'Selet Duration',
    }
];


export class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: json
        }

    }
    render() {
        return (
            <View style={style.viewParent}>
                <View style={style.viewParent2}>
                    <Text>
                        viewParent2
            </Text>
                </View>
                <View style={style.viewParent3}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.state.data}
                        extraData={this.state}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) =>
                            <View style={style.viewParent4}>
                                <Text>{item.txtTitle}</Text>
                             
                            </View>
                        }>
                    </FlatList>
                </View>
            </View>
        )
    }
}


const style = StyleSheet.create({
    viewParent: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#d9d9d9',
        backgroundColor: '#f2f2f2'
    },
    viewParent2: {
        flex: 0.6,
        borderBottomWidth: 1,
        borderColor: '#d9d9d9',
        backgroundColor: '#FFFFFF'
    },
    viewParent3: {
        flex: 5,
        borderBottomWidth: 1,
        borderColor: '#d9d9d9',
        backgroundColor: 'rgba(242, 242, 242,0.5)',

    },
    viewParent4: {
        flex: 1,
        borderBottomWidth: 1,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        height: 100,
        borderRadius: 5,
        margin:10,
        borderColor: '#FFF',
        borderWidth: 1,
    }
})