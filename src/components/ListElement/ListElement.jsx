import './style.css';
import ContentEditable from 'react-contenteditable';
import { Button } from 'react-bootstrap';
import { useRef } from 'react';

const ListElement = (props = {}) => {
    const { todoEl, removeTodoItem, editTodoItem } = props;
    const { id, text } = todoEl;
    const inputRef = useRef();
    const removeHandler = () => removeTodoItem(id);
    const editHandler = () => {
        const { current: { innerText: text } } = inputRef;
        const newTodo = { id, text }
        editTodoItem(newTodo);
    }
    console.log(props);
    return <li className='list-group-item my-list-item d-flex justify-content-between align-items-center'>
        <ContentEditable html={text} innerRef={ref => inputRef.current = ref} disabled={false} onBlur={editHandler} className='editable-item' spellcheck="false"/>
        <Button variant='dark' onClick={removeHandler}>Удалить</Button>
    </li>
}

export default ListElement;
