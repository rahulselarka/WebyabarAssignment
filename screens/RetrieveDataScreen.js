import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Alert } from 'react-native';
import axios from 'axios';

const RetrieveDataScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://test.webyaparsolutions.com/data');
      setData(response.data);
    } catch (error) {
      Alert.alert('Error', 'Failed to retrieve data');
    }
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Latitude: {item.latitude}</Text>
            <Text>Longitude: {item.longitude}</Text>
            <Image
              source={{ uri: item.imageUrl }}
              style={{ width: 200, height: 200 }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default RetrieveDataScreen;
