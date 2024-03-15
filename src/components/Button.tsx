import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ReusableButtonProps {
  label: string;
  onPress: () => void;
  width?: number;
  backgroundColor?: string;
  disabled?: boolean;
}

const ButtonComponent: React.FC<ReusableButtonProps> = ({
  label,
  onPress,
  width = 100,
  backgroundColor = '#007bff',
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {width, backgroundColor: disabled ? '#ccc' : backgroundColor},
      ]}
      onPress={disabled ? () => {} : onPress} // Prevent onPress for disabled buttons
      disabled={disabled}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center', // Center button content horizontally
    justifyContent: 'center', // Center button content vertically
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 16,
  },
});

export default ButtonComponent;
