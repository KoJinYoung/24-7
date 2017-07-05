var React = require('react');
import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

// var headerText = [new Date().getFullYear(), new Date().getMonth()+1].join(' - ');
var headerText = "24/7.";

var DiaryTitleView = React.createClass({

    render: function() {
        return (
            <View>
                <StatusBar
                    // backgroundColor="#001f3f"
                    barStyle="light-content"
                />
                <View style={styles.headerContent}>
                    <Text style={styles.headerText}>{headerText}</Text>
                </View>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    headerContent: {
        paddingTop: 30,
        paddingBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#001f3f',
        // borderColor: '#001f3f',
    },
    headerText: {
        textAlign: 'center',
        color: '#636363',
        fontSize: 20,
        fontFamily: 'Verdana',
    },
});

module.exports = DiaryTitleView;
