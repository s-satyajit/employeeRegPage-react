import React, { useState, useEffect } from 'react';
import { saveToLocalStorage, loadFromLocalStorage, removeFromLocalStorage } from '../utils/localStorage';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = loadFromLocalStorage('users');
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  const addUser = (user) => {
    const newUsers = [...users, user];
    setUsers(newUsers);
    saveToLocalStorage('users', newUsers);
  };

  const clearUsers = () => {
    setUsers([]);
    removeFromLocalStorage('users');
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <button onClick={() => addUser(`User ${users.length + 1}`)}>Add User</button>
      <button onClick={clearUsers}>Clear Users</button>
    </div>
  );
};

export default UsersList;
