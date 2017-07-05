/* DiaryListView Component - zilla */
import React, { Component } from 'react';
import {
    Text,
    ListView,
    View,
    StyleSheet
} from 'react-native';
import DiaryRealm from '../db/DiaryRealm'
const diaryRealm = new DiaryRealm();

export default class DiaryListView extends Component {
    constructor() {
        super();
        let diaryData = diaryRealm.getDiaryByYearMonth(new Date().getFullYear(), new Date().getMonth());
        console.log(diaryData);
        var dataSource = new ListView.DataSource(
            {rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: dataSource.cloneWithRows(diaryData),
        };
    }

    renderRow(rowData, sectionID, rowID) {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={[styles.textBase, styles.title]}>{rowData.title}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.textBase, styles.content]}>{rowData.content}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        padding: 5,
        shadowColor: '#000000',
        backgroundColor: '#FFFFFF',
        shadowOpacity: 0.2,
        shadowRadius: 0.2,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        borderRadius: 5,
    },
    textContainer: {
        marginBottom: 5
    },
    textBase: {
        fontFamily: 'Verdana',
        marginLeft: 10,
        marginRight: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555A5F'
    },
    content: {
        fontSize: 14,
        lineHeight: 20,
        color: '#484D52'
    }
});
