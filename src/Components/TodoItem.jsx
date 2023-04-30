import React from 'react'

function TodoItem({todoItem,deleteItem,handleToggle}) {
  return (
    <div>
      {todoItem.map((item,index)=>{
        return <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h4 >{item.title}</h4>&nbsp;&nbsp;&nbsp;
            <h5 style={{color:'red'}}>{item.status?'Completed':'Not Completed'}</h5>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{handleToggle(index)}} style={{backgroundColor:'blue',color:'white',border:'none',borderRadius:'5px',height:'40px',width:'100px',cursor:'pointer'}}>Toggle</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{deleteItem(index)}} style={{backgroundColor:'blue',color:'white',border:'none',borderRadius:'5px',height:'40px',width:'100px',cursor:'pointer'}}>Delete</button>
        </div>
      })}
    </div>
  )
}

export default TodoItem
