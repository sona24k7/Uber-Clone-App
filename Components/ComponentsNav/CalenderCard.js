import { Modal, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button } from "@rneui/base";
import tw from "tailwind-react-native-classnames";
import { Calendar, CalendarList } from "react-native-calendars";
import { useDispatch } from "react-redux";
import { selectStartDate } from "../navReducer";

export default function CalenderCard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("0");
  const dispatch = useDispatch();
  return (
    <View>
      <Button onPress={() => setShowModal(!showModal)}>Calender</Button>
      <Modal visible={showModal} animationType="slide">
        <Calendar
          style={{ borderRadius: 10, elevation: 4, margin: 30 }}
          onDayPress={(date) =>
            setSelectedDate(...selectedDate, date.dateString)
          }
        />
        <Button
          onPress={() => {
            setShowModal(!showModal);
          }}
        >
          Back
        </Button>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});
