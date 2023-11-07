import React from 'react'
import Navbar from './components/Navbar';
import Form from './components/Form';
import { Container } from '@mui/material';
import Listgroup from './components/Listgroup';

const App = () => {
  return (
    <>
      <Navbar/>
      <Container sx={{padding:5}}>
        <Form/>
        <Listgroup/>
      </Container>
    </>
  )
}

export default App;