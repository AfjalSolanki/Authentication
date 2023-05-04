import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';

const {width} = Dimensions.get('window');

const data = [
  {
    id: '1',
    title: 'Item 1',
    description: 'This is item 1',
  },
  {
    id: '2',
    title: 'Item 2',
    description: 'This is item 2',
  },
  {
    id: '3',
    title: 'Item 3',
    description: 'This is item 3',
  },
];

const WelcomeScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const flatListRef = useRef(null);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  const handleNextPress = () => {
    const newIndex = selectedIndex + 1;
    if (newIndex < data.length) {
      flatListRef.current.scrollToIndex({index: newIndex});
      setSelectedIndex(newIndex);
    } else {
      console.log(newIndex);
      //   alert('----');
    }
  };

  const handleBackPress = () => {
    const newIndex = selectedIndex - 1;
    if (newIndex >= 0) {
      flatListRef.current.scrollToIndex({index: newIndex});
      setSelectedIndex(newIndex);
    } else {
      console.log(newIndex);
    }
  };

  return (
    <ScrollView pagingEnabled>
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        // onMomentumScrollEnd={event => {
        //   const index = Math.round(event.nativeEvent.contentOffset.x / width);
        //   setSelectedIndex(index);
        // }}
      />
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationItem,
              index === selectedIndex && styles.activePaginationItem,
            ]}
          />
        ))}
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleBackPress}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  paginationItem: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#bbb',
    marginHorizontal: 5,
  },
  activePaginationItem: {
    backgroundColor: '#333',
  },
  nextButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
