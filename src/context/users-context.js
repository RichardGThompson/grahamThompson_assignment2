import React, {useState} from 'react';

export const UsersContext = React.createContext(
    {
        users: [],
        addUser: () => {}
    }
)

export const UsersContextProvider = (props) => {
    const [users, setUsers] = useState([]);

    /**
     * Summary. Adds a user to the users array.
     * 
     * @param {Object} user The user to be added to the array (object variables: "name", "imageURL")
     */
    const addUser = (user) => {
        let tmpUsers = users;
        tmpUsers.push(user);
        setUsers(tmpUsers);
    }

    return(
        <UsersContext.Provider value={ { users: users, addUser: addUser } }>
            {props.children}
        </UsersContext.Provider>
    )
}