import { useDispatch, useSelector } from 'react-redux'
import { markTodo, removeTodo } from '../redux/slice/TodoSlice'

function Todo() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <>
            <div className='d-flex justify-content-center'>
                <ul>
                    {todos?.map((todo) => (
                        <li 
                            onClick={() => dispatch(markTodo(todo.id))}  
                            key={todo.id} 
                            style={{background:'#ACE2E1',width:'1000px'}} 
                            className={`mt-4 d-flex justify-content-between items-center px-4 py-2 rounded ${todo.completed ? 'completed' : ''}`}
                        >
                            <div style={{textDecoration:todo.completed?'line-through':'none'}} className='text-dark'>{todo.text}</div>
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
        </>
    )
}

export default Todo