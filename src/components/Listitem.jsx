import {Box,  ListItem, Typography, Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, edit, fetchTodos } from '../features/todos/todoSlice';


const Listitem = ({todo}) => {
  const {isSuccess}=useSelector(state=>state.todos);

  const dispatch= useDispatch();

  const handledelete = (_id)=>{
    dispatch(deleteTodo(_id));
    if(isSuccess){
      dispatch(fetchTodos());
    }
  };

  const handleedit= (todo)=>{
    dispatch(edit(todo))
  }

  return (
<ListItem>
        <Box sx={{display:"flex", flexDirection:"column", flexGrow:1}}>
        <Typography variant='h4'>{todo.title}</Typography>
        <Typography variant='body1'>{todo.description}</Typography>
        </Box>
        <Typography sx={{display:"flex" , float:'right'}}>
            <Button color='warning' variant='contained' onClick={()=>handleedit(todo)}>edit</Button>
            <Button color='error' variant='contained' sx={{marginLeft:1}} onClick={()=>handledelete(todo._id)}>delete</Button>
        </Typography>
      </ListItem>
  )
}

export default Listitem
