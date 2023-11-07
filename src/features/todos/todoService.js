import axios from "axios";

export const getAllTodos = async()=>{
    const response = await axios.get("/api/todo");
    // console.log(response.data)
    return response.data;
};

export const addTodos = async(formData)=>{
    const response = await axios.post("/api/todo", formData);
    return response.data;
};

export const removeTodos = async(_id)=>{
    const response = await axios.delete("/api/todo/" + _id);
    return response.data;
}

export const updateTodos = async(formData)=>{
    const {_id, title,description}=formData;
    const response = await axios.put("/api/todo/" + _id, {title, description});
    return response.data;
}