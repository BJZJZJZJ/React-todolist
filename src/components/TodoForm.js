import React,{ useState, useEffect, useRef } from 'react'


function TodoForm(props) {
    const [input , setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef= useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        // TodoList 의 addTodo 함수 호출 = 일정 등록
        // edit 상태면 updateTodo 함수
        props.onSubmit({
            id : Math.floor(Math.random() * 10000),
            text : input
        })

        // 일정한 입력 빈칸처리 
        setInput('');
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
            <>
                <input 
                    type="text" 
                    placeholder="일정 수정" 
                    value={input}
                    name="text" 
                    className="todo-input edit"
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className="todo-button edit">일정 수정</button>
            </>
            ):
            (
            <>
                <input 
                    type="text" 
                    placeholder="일정 등록" 
                    value={input}
                    name="text" 
                    className="todo-input"
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className="todo-button">일정 등록</button>
            </>
            )}
            
        </form>
    )
}

export default TodoForm
