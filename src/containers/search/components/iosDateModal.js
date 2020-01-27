import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  DatePickerIOS,
  ScrollView,
  Modal,
  Button,
  Alert
} from 'react-native';

const IosDateModal = ({
  modalHourVisible,
  date,
  setDateForIos,
  handleModalHourVisible,
  dateTypeToChange
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalHourVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}
    >
      <ScrollView>
        <View style={{ height: 200, marginTop: 20 }}>
          {/* <Text style={styles.datePickerText}>From</Text> */}
          <DatePickerIOS
            // style={styles.datePicker}
            date={date[dateTypeToChange]}
            onDateChange={date => setDateForIos(date, dateTypeToChange)}
            mode="date"
          />
        </View>
        <View style={{ height: 200 }}>
          <Button
            onPress={() => {
              handleModalHourVisible(!modalHourVisible);
            }}
            full
            primary
            title="ok"
            // style={styles.buttonDatePicker}
          >
            <Text>Ok</Text>
          </Button>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default IosDateModal;
