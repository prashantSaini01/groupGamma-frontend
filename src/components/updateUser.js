import React, { useState } from 'react';

const UpdateUser = () => {
  const [userId, setUserId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3030/user/update/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => console.log('User updated:', data))
    .catch(error => console.error('Error updating user:', error));
  };

  return (
    <div>
      <h2>Update User</h2>
      <label>User ID:</label>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <br />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default UpdateUser;
