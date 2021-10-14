import './style.css';
import ListElement from '../ListElement';
import { connect } from 'react-redux';
import { editTodo, removeTodo } from '../../actions/actionCreators';

const List = (props) => {
    const { todo = [], editTodoItem, removeTodoItem } = props;
    const fn = { editTodoItem, removeTodoItem };
    return <ul className="list-group px-3 mt-3 flex-grow-1 overflow-auto">
        {todo.map(todoEl => <ListElement todoEl={todoEl} key={todoEl.id} {...fn}></ListElement>)}
    </ul>
}

const mapStateToProps = (state) => ({
    todo: state.todo
});

const mapDispatchToProps = (dispatch) => ({
    editTodoItem: (todo) => dispatch(editTodo(todo)),
    removeTodoItem: (todo) => dispatch(removeTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);