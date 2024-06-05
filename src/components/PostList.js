// src/components/PostList.js
import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField
} from '@mui/material';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      const postsData = await fetchPosts();
      setPosts(postsData);
    };

    getPosts();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Posts
      </Typography>
      <TextField
        label="Search Posts"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={handleSearch}
      />
      <List>
        {filteredPosts.map(post => (
          <ListItem key={post.id} divider>
            <ListItemText
              primary={post.title}
              secondary={post.body}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PostList;
