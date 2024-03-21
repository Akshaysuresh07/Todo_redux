import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slice/TodoSlice';

function AddTodo() {
    const dispatch=useDispatch()
    const [input,setInput]=useState('')
    const handleaddTodo=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    console.log(input);
  return (
  <>
 
 
          <form onSubmit={handleaddTodo} className="mt-4">
          <div className='d-flex justify-content-center '>
              <input
                style={{width:'550px'}}
                type="text"
                className="form-control"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-dark"
            
              >
                Add Todo
              </button>
              </div>
          </form>


  </>

  )
}

export default AddTodo