import React from 'react';
import { Image, Text, View } from 'react-native';

export default function App() {
  const imageUri = 'https://example.com/image.jpg'; // Ensure this URI is correct and accessible

  return (
    <View>
      <Image
        source={{ uri: imageUri }}
        style={{ width: 200, height: 200 }}
        onError={(error) => {
          console.error('Image loading error:', error);
          // Handle the error, for example, display a placeholder image
        }}
      />
    </View>
  );
}
