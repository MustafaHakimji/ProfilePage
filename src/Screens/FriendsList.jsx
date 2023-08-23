import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FriendsList = ({navigation, route}) => {
  const {data, type} = route?.params;

  return (
    <View style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.headTxt}>
          {type.toUpperCase()} : {data.friends.length}
        </Text>
      </View>
      <FlatList
        data={data.friends}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View style={styles.listContainer}>
              <Image source={{uri: item?.image}} style={styles.porfImage} />
              <Text style={styles.textBlack}>
                {item?.name} {item?.surname}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default FriendsList;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    padding: 7,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
  },
  headerContainer: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textBlack: {
    color: 'black',
    fontWeight: '600',
    fontSize: 19,
    marginHorizontal: 20,
  },
  porfImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignSelf: 'flex-start',
  },
  headTxt: {
    fontSize: 20,
    fontWeight: '900',
    color: '#CC0066',
    marginLeft: 100,
  },
});
