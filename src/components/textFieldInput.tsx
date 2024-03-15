import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardTypeOptions,
} from 'react-native';

interface TextFieldInputProps {
  label: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  value?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  style?: any;
}

const TextFieldInput: React.FC<TextFieldInputProps> = ({
  label,
  placeholder = 'Enter Verification Code',
  onChangeText,
  value = '',
  secureTextEntry = false,
  keyboardType = 'default',
  style,
}) => {
  const [textValue, setTextValue] = useState(value); // Manage input value with useState

  const handleChange = (text: string) => {
    setTextValue(text);
    onChangeText(text); // Call the provided onChangeText function
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.inputStyle}
        value={textValue}
        onChangeText={handleChange}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#D9D5DC',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    paddingLeft: 16,
  },
  label: {
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8,
    color: '#000',
    opacity: 0.5,
    alignSelf: 'flex-start',
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    fontSize: 20,
    alignSelf: 'stretch',
    flex: 1,
    lineHeight: 16,
    paddingTop: 14,
    paddingBottom: 8,
    paddingLeft: 30,
  },
});

export default TextFieldInput;
