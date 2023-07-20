// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import UsersTable from './components/UsersTable';
import AddUserForm from './components/AddUserForm';
import AddUserHobbiesForm from './components/AddUserHobbiesForm';


const App = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({});
  const [newHobby, setNewHobby] = useState({ userId: '', hobbies: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleAddUser = async () => {
    try {
      await axios.post('/api/addUser', newUser);
      setNewUser({});
      fetchUsers();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleAddHobbies = async () => {
    try {
      await axios.post('/api/addHobbies', newHobby);
      setNewHobby({ userId: '', hobbies: '' });
      fetchUsers();
    } catch (error) {
      console.error('Error adding hobbies:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`/api/deleteUser/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="container">
      <AddUserForm newUser={newUser} setNewUser={setNewUser} handleAddUser={handleAddUser} />
      <AddUserHobbiesForm
        users={users}
        newHobby={newHobby}
        setNewHobby={setNewHobby}
        handleAddHobbies={handleAddHobbies}
      />
      <UsersTable users={users} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default App;
