/* WriteButton Component - zilla */
import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert,
    View
} from 'react-native';
import WriteModalView from './WriteModalView';

export default class WriteButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
        }
    }

    showModal = () => {
        this.setState({modalVisible: true});
    }

    hideModal = () => {
        this.setState({modalVisible: false});
    }

    render() {
        return (
            <View>
                <WriteModalView modalVisible={this.state.modalVisible} hideModal={this.hideModal}/>
                <TouchableOpacity style={styles.writeButton}
                    onPress={this.showModal}
                >
                    <Text style={styles.writeButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    writeButton: {
        backgroundColor: '#001f3f',
        borderColor: '#001f3f',
        height: 50,
        width: 50,
        borderRadius: 25,
        position: 'absolute',
        bottom: 25,
        right: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: { height:1, width:0, },
    },
    writeButtonText: {
        fontSize: 25,
        color: 'white'
    }
});
