import React from 'react';

const AddUserForm = ({ newUser, setNewUser, handleAddUser }) => {
  return (
    <>
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
    </>
  );
};

export default AddUserForm;
