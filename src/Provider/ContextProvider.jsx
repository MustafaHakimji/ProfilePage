import {createContext, useContext, useEffect, useState} from 'react';

import {data} from '../Data/userData';

const Provider = createContext();

const ContextProvider = ({children}) => {
  const [profileData, setProfileData] = useState(data);
  const [count, setCount] = useState(0);

  const editProfileData = (newName, newBio, newDob) => {
    data.name = newName;
    data.bio = newBio;
    data.dob = newDob;
  };
  useEffect(() => {
    setProfileData(data);
  }, [count]);

  const contextValue = {
    profileData,
    editProfileData,
    setCount,
    count,
  };
  return <Provider.Provider value={contextValue}>{children}</Provider.Provider>;
};

export const useContextHook = () => useContext(Provider);
export default ContextProvider;
