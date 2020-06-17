import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {

    const [ user, setUser ] = useState([
        { display_name: null },
    ])

    const updateUserContext = (display_name) => {
        setUser({ display_name: display_name });
      }

    return (
        <UserContext.Provider value={{ user, updateUserContext: updateUserContext }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserContextProvider;