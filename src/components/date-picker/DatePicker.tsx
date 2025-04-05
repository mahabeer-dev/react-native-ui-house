import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  DatePickerIOS,
  DatePickerAndroid,
} from 'react-native';
import { DatePickerProps, formatDate } from './utils';

const DatePicker = ({
  value,
  onChange,
  mode = 'date',
  minDate,
  maxDate,
  format = 'MM/DD/YYYY',
  placeholder = 'Select date',
  containerStyle,
  inputStyle,
  errorStyle,
  error,
  label,
  labelStyle,
  disabled,
}: DatePickerProps) => {
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(value || new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    onChange?.(date);
    if (Platform.OS === 'android') {
      setShow(false);
    }
  };

  const showDatePicker = async () => {
    if (disabled) return;

    if (Platform.OS === 'android') {
      try {
        const { action, year, month, day } = await DatePickerAndroid.open({
          date: selectedDate,
          minDate,
          maxDate,
          mode: mode === 'datetime' ? 'spinner' : mode,
        });

        if (action !== DatePickerAndroid.dismissedAction) {
          const selectedDate = new Date(year, month, day);
          handleDateChange(selectedDate);
        }
      } catch ({ code, message }) {
        console.warn('Cannot open date picker', message);
      }
    } else {
      setShow(true);
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      
      <TouchableOpacity
        onPress={showDatePicker}
        disabled={disabled}
        style={[
          styles.input,
          inputStyle,
          disabled && styles.disabled,
        ]}
      >
        <Text style={[styles.inputText, !value && styles.placeholder]}>
          {value ? formatDate(value, format) : placeholder}
        </Text>
      </TouchableOpacity>

      {Platform.OS === 'ios' && show && (
        <View style={styles.iosPickerContainer}>
          <DatePickerIOS
            date={selectedDate}
            onDateChange={handleDateChange}
            mode={mode}
            minimumDate={minDate}
            maximumDate={maxDate}
          />
          <TouchableOpacity
            style={styles.doneButton}
            onPress={() => setShow(false)}
          >
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      )}

      {error && <Text style={[styles.error, errorStyle]}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
    paddingVertical: 10,
  },
  inputText: {
    fontSize: 16,
  },
  placeholder: {
    color: 'lightgray',
  },
  disabled: {
    opacity: 0.7,
  },
  label: {
    fontSize: 12,
    color: 'lightgray',
    marginBottom: 5,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  iosPickerContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  doneButton: {
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  doneButtonText: {
    color: '#007AFF',
    fontSize: 16,
  },
});

export default DatePicker;