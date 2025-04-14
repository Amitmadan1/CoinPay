import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: 'https://www.shutterstock.com/image-vector/handshake-shield-line-icon-international-260nw-2144775395.jpg', 
    text: 'Trusted by millions of people, part of one part',
  },
  {
    id: '2',
    image: 'https://www.shutterstock.com/shutterstock/photos/2382150379/display_1500/stock-vector-finance-control-hand-drawn-composition-expense-tracker-in-mobile-bank-account-smartphone-app-with-2382150379.jpg', 
    text: 'Spend money abroad, and track your expense',
  },
  {
    id: '3',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLtgPstNNdBbi4GVlC6c_XIygq9EOdsgfGww&s', 
    text: 'Receive Money From Anywhere In The World',
  },
];

const OnboardingScreen = ({ onDone }) => {
  const flatListRef = useRef();
  const currentSlideIndex = useRef(0);

  const goToNextSlide = () => {
    if (currentSlideIndex.current < slides.length - 1) {
      currentSlideIndex.current += 1;
      flatListRef.current.scrollToIndex({ index: currentSlideIndex.current });
    } else {
      onDone(); 
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
      <Text style={styles.text}>{item.text}</Text>
      <TouchableOpacity style={styles.button} onPress={goToNextSlide}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      ref={flatListRef}
      data={slides}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f6f7ff',
  },
  image: {
    width: 280,
    height: 250,
    marginBottom: 40,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    color: '#000',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#1e57f1',
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OnboardingScreen;
