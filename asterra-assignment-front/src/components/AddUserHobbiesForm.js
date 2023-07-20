import React from 'react';

const AddUserHobbiesForm = ({ users, newHobby, setNewHobby, handleAddHobbies }) => {
  return (
    <>
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
          )) : null}
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
    </>
  );
};

export default AddUserHobbiesForm;
