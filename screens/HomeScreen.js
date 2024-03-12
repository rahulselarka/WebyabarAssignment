import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button
        title="Submit Form Data"
        onPress={() => navigation.navigate('FormData')}
      />
      <Button
        title="Retrieve Data"
        onPress={() => navigation.navigate('RetrieveData')}
      />
    </View>
  );
};

export default HomeScreen;
