import React,{useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'


function Todo(){
    

    const [input,setInput]=useState('')
    const [todoList,setTodoList]=useState([])


    const fetchData=async()=>{
        // const response=await fetch('http://localhost:3000/todoList');
        // const data= await response.json();
        const response=await axios.get('http://localhost:3000/todoList')
       
        setTodoList(response.data)
    }

    useEffect(()=>fetchData(),[])

    const handleChange=(e)=>{
        setInput(e.target.value);
     
    }

    const addTodo=async()=>{
        await axios.post('http://localhost:3000/todoList',{id:uuidv4(),task:input})
        fetchData()

        // setTodoList([...todoList,{id:uuidv4(),task:input}]);
        setInput('')
    }

    const handleDelete=async(id)=>{
        await axios.delete(`http://localhost:3000/todoList/${id}`);
        fetchData();
       
        // const filteredTodo=todoList.filter(todo=>todo.id !==id);
        // setTodoList(filteredTodo)
    }
    const handleUpdate=async(index)=>{
        
        const updatedTask=prompt('Update your task',todoList[index].task)
        await axios.put(`http://localhost:3000/todoList/${todoList[index].id}`,{"id":todoList[index].id,"task":updatedTask})
        fetchData();
        
        //  let copiedTodoList=[...todoList];
        // copiedTodoList[index].task=updatedTask;
        //  setTodoList( copiedTodoList)
    }
    return(
        <div>
           <h1>Todo Application</h1>
           <label>Task</label>
           <input type='text' value={input} onChange={handleChange}/>
           
           <button onClick={addTodo}>Add todo</button>
            {
                todoList.map((todo,index)=><div key={todo.id}><span >{todo.task}</span>
                <button onClick={()=>handleDelete(todo.id)}>X</button><button onClick={()=>handleUpdate(index)}>update</button></div>)
            }

        </div>
    )
}
export default Todo