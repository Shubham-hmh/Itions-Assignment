

import React, { useState, useEffect } from 'react';




import { Container, CssBaseline } from '@mui/material';
import PostTable from './components/PostTable';

const App = () => {
  return (
    <Container>
      <CssBaseline />
      <PostTable/>
    </Container>
  );
};

export default App;