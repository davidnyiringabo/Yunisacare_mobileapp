import React, { useState } from 'react';
import { View, Button, Text, Platform } from 'react-native';
import DatePicker from 'react-native-datepicker';


const DatePickerComponent = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
  
    const onDateChange = (date) => {
      setSelectedDate(date);
    };
  
    return (
      <View>
        {Platform.OS === 'android' ? (
          <Button title="Select Date" onPress={() => datePickerRef.onPressDate()} />
        ) : (
          <DatePicker
            style={{ width: 200 }}
            date={selectedDate}
            mode="date"
            format="YYYY-MM-DD"
            onDateChange={onDateChange}
            ref={(picker) => (datePickerRef = picker)}
          />
        )}
        <Text>{selectedDate.toDateString()}</Text>
      </View>
    );
  };
  
  export default DatePickerComponent;
  