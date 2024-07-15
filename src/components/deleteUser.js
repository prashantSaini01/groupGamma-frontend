import React, { useState } from 'react';

const DeleteUser = () => {
  const [userId, setUserId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3030/users/delete/${userId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => console.log('User deleted:', data))
    .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div>
      <h2>Delete User</h2>
      <label>User ID:</label>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>Delete User</button>
    </div>
  );
}

export default DeleteUser;
