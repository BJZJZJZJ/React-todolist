import React , {useState}from 'react';
import TodoForm from './TodoForm';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';


/*
    Todo 자체 컴포넌트
    props로 받은 todos 를 Map 함수로 나열

*/


function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    /* 수정 상태 저장용 state */
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value) /* 수정 */
        setEdit({
            id : null,
            value : ''
        })       
    }
    
    // 수정 상태 일 때는 props.onSubmit 을  updateTodo 함수로
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo,index) => (
            <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>

                <div className="icons">
                    <RiCloseCircleLine
                        onClick={() => removeTodo(todo.id)}
                        className='delete-icon'
                    />
                    <TiEdit onClick={() => setEdit({id : todo.id, value:todo.text}) }
                        className='delete-icon'/>
                </div>
            </div>
        ))
    
}

export default Todo
