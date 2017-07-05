/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';
import WriteButton from './src/components/WriteButton';
import DiaryTitleView from './src/components/DiaryTitleView';
import DiaryListView from './src/components/DiaryListView';

export default class Diary extends Component {
    render() {
        return (
            <View style={styles.container}>
            <DiaryTitleView />
            <DiaryListView />
            <WriteButton />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#F5FCFF',
    }
});

AppRegistry.registerComponent('Diary', () => Diary);
