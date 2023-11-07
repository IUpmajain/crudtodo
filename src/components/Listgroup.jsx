import {  CircularProgress, List, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Listitem from './Listitem'
import { fetchTodos } from '../features/todos/todoSlice'


const Listgroup = () => {

  const dispatch = useDispatch();
  const {todos, isLoading, isError, isSuccess}=useSelector((state)=>state.todos);

  useEffect(()=>{
    dispatch(fetchTodos());
  },[]);

  if(isLoading){
    return(
      <CircularProgress disableShrink sx={{marginTop:2}}/>
    )
  }

  if(isError){
    return(
      <Typography variant='h5' sx={{marginTop:2, textAlign:"center"}}>
        Something Went Wrong...
      </Typography>
    )
  }

  return (
    <List>
      {
        todos.map((todo)=>(
        <Listitem key={todo._id} todo={todo}/>))
      }
    </List>
  )
}

export default Listgroup
