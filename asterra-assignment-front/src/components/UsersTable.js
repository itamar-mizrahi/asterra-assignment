import React from 'react';

const UsersTable = ({ users, handleDeleteUser }) => {
  return (
    <>
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
          {Array.isArray(users) ? (
            users.map((user) => (
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
            ))
          ) : null}
        </tbody>
      </table>
    </>
  );
};

export default UsersTable;
