import './style.css';
import { Form, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/actionCreators';
import { useRef } from 'react';
import { v4 as uuid } from 'uuid';

const Input = (props) => {
    const inputRef = useRef();
    const { addTodoItem } = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        const { current: { value: text } } = inputRef;
        const todo = { id: uuid(), text };
        addTodoItem(todo);
        inputRef.current.value = '';
        inputRef.current.focus();
    }
    return (
        <div>
            <h5 className="px-3 mb-3">Добавить :</h5>
            <Form className="d-flex flex-wrap" onSubmit={handleSubmit}>
                <Col sm="12" md="9" lg="10">
                    <Form.Control type="text" placeholder="Добавить" ref={ref => inputRef.current = ref} required/>
                </Col>
                <Col sm="12" md="3" lg="2" className="mt-3 mt-md-0">
                    <Button variant="primary" type="submit" className="w-100">
                        Добавить
                    </Button>
                </Col>
            </Form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addTodoItem: (todo) => dispatch(addTodo(todo))
});

export default connect(null, mapDispatchToProps)(Input);