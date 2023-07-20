import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

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
    <div class="container">
      <h1>Add New User</h1>
      <div>
        <label>First Name: </label>
        <input
          type="text"
          value={newUser.firstName || ''}
          onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
        />
      </div>
      <div>
        <label>Last Name: </label>
        <input
          type="text"
          value={newUser.lastName || ''}
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
        />
      </div>
      <div>
        <label>Address: </label>
        <input
          type="text"
          value={newUser.address || ''}
          onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
        />
      </div>
      <div>
        <label>Phone Number: </label>
        <input
          type="text"
          value={newUser.phoneNumber || ''}
          onChange={(e) => setNewUser({ ...newUser, phoneNumber: e.target.value })}
        />
      </div>
      <button onClick={handleAddUser}>Add User</button>

      <h1>Add User Hobbies</h1>
      <div>
        <label>Select User: </label>
        <select
          value={newHobby.userId || ''}
          onChange={(e) => setNewHobby({ ...newHobby, userId: e.target.value })}
        >
          <option value="">Select User</option>
          {Array.isArray(users) ? users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.first_name} {user.last_name}
            </option>
          )): null}
        </select>
      </div>
      <div>
        <label>Hobbies: </label>
        <input
          type="text"
          value={newHobby.hobbies || ''}
          onChange={(e) => setNewHobby({ ...newHobby, hobbies: e.target.value })}
        />
      </div>
      <button onClick={handleAddHobbies}>Add Hobbies</button>

      <h1>Users & Hobbies</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Hobbies</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users)
        ? users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.address}</td>
              <td>{user.phone_number}</td>
              <td>{user.hobbies || '-'}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          )): null}
        </tbody>
      </table>
    </div>
  );
};

export default App;

