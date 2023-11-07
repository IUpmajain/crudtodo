import {  Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveTodo, updateTodo } from '../features/todos/todoSlice';

const Form = () => {
  const {edit}=useSelector(state=>state.todos);

  const dispatch = useDispatch();

  const [formData, setFormData]=useState({
    title:"",
    description:"",
  });

  const {title, description}=formData;

  const handlechange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    });
  };

  const handlesubmit = (e)=>{
    e.preventDefault();
    
    if (edit.editMode) {
      dispatch(updateTodo({_id:edit.todo._id, title, description}))
    }else{
      dispatch(saveTodo(formData));
    }
    setFormData({
      title:"",
      description:"",
    })
    // console.log(formData);
  }

  useEffect(()=>{
    setFormData({
      title:edit.todo.title,
      description:edit.todo.description,
    });
  },[edit])

  return (
      <form onSubmit={handlesubmit}>
        <TextField id="outlined-basic" label="Enter task" variant="outlined" fullWidth name='title' onChange={handlechange} value={title}/>
        <TextField id="outlined-basic" multiline label="Enter description of task" rows={4} sx={{marginTop:2}} variant="outlined" fullWidth  name='description' onChange={handlechange} value={description}/>
        <Button type='submit' variant='contained' fullWidth sx={{marginTop:3, fontSize:20}}>Save</Button>
      </form>
  )
}

export default Form
