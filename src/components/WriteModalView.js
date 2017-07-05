import React, { Component } from 'react';
import { Modal, Text, TextInput, TouchableHighlight, View, Button } from 'react-native';
import DiaryRealm from '../db/DiaryRealm';
const diaryRealm = new DiaryRealm();

var year_month_day = function(){
  var d = new Date();
  return [d.getFullYear(), d.getMonth(), d.getDay()];
};

var year_month_day_string = function(){
  var d = new Date();
  return [d.getFullYear(), d.getMonth()+1, d.getDay()].join('-');
};

export default class WriteModalView extends Component {
  write(){
    var day_values = year_month_day();
    var write_data = {
        year: day_values[0],
        month: day_values[1],
        day: day_values[2],
        content: this.state.contentText
    };
    write_data.id = diaryRealm.getNextId();
    diaryRealm.create(write_data);
    alert("일기 쓰기 끄읕");
    this.props.hideModal();
  }
  render() {
    var visible = this.props.modalVisible;
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={visible}
        onRequestClose={() => {alert("Modal has been closed."); this.props.hideModal();}}
        >
        <View style={{marginTop: 22}}>
          <Text style={{textAlign:'center', color:'black'}}>{year_month_day_string()}</Text>
          <TextInput
            autoFocus = {true}
            multiline = {true}
            height = {250}
            placeholder = {"내용을 씁니다"}
            onChangeText={(contentText) => this.setState({contentText})}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button
              onPress={() => {this.write();}}
              title="일기를 씁니다"
            />
            <Button
              onPress={() => {this.props.hideModal();}}
              title="아직 안쓸래요"
              color="#841584"
              />
          </View>
        </View>
      </Modal>
    );
  }
}
