import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const FormDataScreen = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://test.webyaparsolutions.com/form', {
        latitude,
        longitude,
        // Add image file here if needed
      });

      Alert.alert('Success', response.data.message);
    } catch (error) {
      Alert.alert('Error', error.response.data.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Latitude"
        value={latitude}
        onChangeText={setLatitude}
      />
      <TextInput
        placeholder="Longitude"
        value={longitude}
        onChangeText={setLongitude}
      />
      {/* Add image picker component here */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default FormDataScreen;
