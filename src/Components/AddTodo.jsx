import React, { useState } from 'react'
import TodoItem from './TodoItem'

function AddTodo() {
    const [state,setState]=useState('')
    const [todoItems,setTodoItems]=useState([])

    const addTodo=()=>{
        if(state===''){
            alert('Input cannot be empty')
        }else{
        var newItem={
            title:state,
            status:false,
        }
        
        setTodoItems([...todoItems,newItem])
        setState('')
    }
    }
    const deleteItem=(index)=>{
        var filteredData=todoItems.filter((item,ind)=>{
            return index !==ind;
        })
        setTodoItems(filteredData)
    }
    const handleToggle=(index)=>{
        var newArray=todoItems.map((item,ind)=>{
            return index===ind?{...item,status:!item.status}:item
        });
        setTodoItems(newArray)
    }

  return (
    <div>
      <h2>Todo</h2>
      <input type='text' value={state} placeholder='Enter Some Text' onChange={(e)=>{setState(e.target.value)}} style={{width:'450px',outline:'none',height:'40px',borderRadius:'10px'}}/>&nbsp;&nbsp;&nbsp;
      <button onClick={addTodo} style={{backgroundColor:'blue',color:'white',border:'none',borderRadius:'5px',height:'40px',width:'100px',cursor:'pointer'}}>Add Item</button>
      <TodoItem todoItem={todoItems} deleteItem={deleteItem} handleToggle={handleToggle}/>
    </div>
  )
}

export default AddTodo
