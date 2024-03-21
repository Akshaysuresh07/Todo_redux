import { useDispatch, useSelector } from 'react-redux'
import { markTodo, removeTodo } from '../redux/slice/TodoSlice'

function Todo() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const completedCount = todos.filter(todo => todo.completed).length
    return (
        <>
            <div className='d-flex justify-content-center'>
                <ul>
                    {todos?.map((todo) => (
                        <li  style={{backgroundColor: todo.completed ? 'lightgreen' : '#67C6E3',width:'1000px'}} 
                            onClick={() => dispatch(markTodo(todo.id))}  
                            key={todo.id} 
                            
                            className={`mt-4 d-flex justify-content-between items-center px-4 py-2 rounded ${todo.completed ? 'completed' : ''}`}
                        >
                            <div className='text-dark'>{todo.text}</div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); 
                                    dispatch(removeTodo(todo.id));
                                }}
                                className="text-white bg-warning py-1 px-4 rounded"
                            >
                                remove
                            </button>
                        </li>
                    ))}
                </ul>
           
            </div>
            <p className='text-center fw-bold text-info '>Completed: {completedCount}</p> 
        </>
    )
}

export default Todo