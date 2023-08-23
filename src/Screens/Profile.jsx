import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import {useContextHook} from '../Provider/ContextProvider';
import ProfilePage from '../Components/ProfilePage';

const Profile = () => {
  const {profileData} = useContextHook();
  const {height, width} = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <ProfilePage height={height} width={width} data={profileData} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
