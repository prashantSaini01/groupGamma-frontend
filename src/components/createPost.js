import React, { useState } from 'react';

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3030/posts/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      const data = await response.json();
      console.log('Post created:', data);
      // Optionally, redirect or update state after successful creation
    } catch (error) {
      console.error('Error creating post:', error.message);
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
        <br />
        <label>Content:</label>
        <textarea name="content" value={formData.content} onChange={handleChange} />
        <br />
        <label>Image URL:</label>
        <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
        <br />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
