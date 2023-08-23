import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useContextHook} from '../Provider/ContextProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EditProfile = ({navigation, route}) => {
  const {data} = route.params;

  const {editProfileData, setCount, count} = useContextHook();
  const [name, setName] = useState(data?.name);
  const [dob, setDob] = useState(data?.dob);
  const [bio, setBio] = useState(data?.bio);

  const updatedata = () => {
    editProfileData(name, bio, dob);
    setCount(count + 1);
    navigation.navigate('Profile');
  };

  return (
    <View>
      <View style={styles.headerCountainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.headText}>Edit Your Profile</Text>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          style={styles.input}
          onChangeText={e => setName(e)}
          placeholder="Enter Name"
          defaultValue={name}
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.input}
          onChangeText={e => setDob(e)}
          placeholder="Enter DOB"
          defaultValue={dob}
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.input}
          onChangeText={e => setBio(e)}
          placeholder="Enter Bio"
          defaultValue={bio}
          placeholderTextColor="black"
        />

        <TouchableOpacity onPress={updatedata} style={styles.btn}>
          <Text style={styles.btnText}> Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  headerCountainer: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#CC0066',
    marginLeft: 100,
  },
  input: {
    padding: 15,
    borderColor: 'black',
    borderWidth: 0.7,
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 15,
    fontWeight: '700',
    color: 'black',
    width: '90%',
  },
  btn: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
    width: '80%',
    margin: 20,
  },
  btnText: {
    fontSize: 17,
    fontWeight: '700',
    color: 'black',
  },
});
