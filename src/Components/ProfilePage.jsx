import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfilePage = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.mainContainer]}>
      <View style={styles.profileContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Friends', {
              data,
              type: 'friends',
            })
          }
          style={styles.followBtn}>
          <Text style={styles.followText}>{data.friends.length}</Text>
          <Text style={styles.followText}>Friends</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: data?.image}} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.editProfile}
          onPress={() =>
            navigation.navigate('EditProfile', {
              data: data,
            })
          }>
          <MaterialCommunityIcons name="account-edit" size={25} color="blue" />
          <Text style={styles.followText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={{justifyContent: 'center', flex: 1, width: '100%'}}>
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.flexRow}>
          <Text style={styles.name}>DOB: </Text>
          <Text style={[styles.name, {fontSize: 15}]}>{data.dob}</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={[styles.bio, {fontSize: 19}]}>Bio: </Text>
          <Text style={styles.bio}>{data.bio}</Text>
        </View>
        <Text style={styles.postHeading}>Posts: {data.posts.length}</Text>

        <FlatList
          data={data?.posts}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={{justifyContent: 'center'}}>
                <TouchableOpacity key={index} style={{margin: 10}}>
                  <Image style={styles.postsImage} source={{uri: item}} />
                </TouchableOpacity>
                <View style={styles.postBtnContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      setInd(index);
                    }}>
                    <MaterialCommunityIcons
                      style={styles.selfCenter}
                      name="heart"
                      color={'red'}
                      size={30}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      style={styles.selfCenter}
                      name="comment"
                      color="black"
                      size={30}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      style={styles.selfCenter}
                      name="share"
                      color="blue"
                      size={30}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      style={styles.selfCenter}
                      name="delete"
                      color="red"
                      size={30}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    // borderRadius: 20,
    alignSelf: 'center',
    opacity: 0.9,
    marginBottom: 10,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  imageContainer: {
    height: 110,
    width: 110,
    borderRadius: 52.5,
    borderColor: '#9900FF',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    elevation: 5,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 15,
    width: '100%',
  },
  name: {
    fontWeight: '800',
    color: 'black',
    fontSize: 17,
    textAlign: 'center',
    margin: 7,
  },
  bio: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
  },
  postHeading: {
    fontSize: 17,
    color: 'black',
    fontWeight: '700',
    margin: 10,
  },
  followBtn: {
    padding: 10,
    width: '30%',
  },
  followText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
  },
  postsImage: {
    height: 225,
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editProfile: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  selfCenter: {alignSelf: 'center'},
});
