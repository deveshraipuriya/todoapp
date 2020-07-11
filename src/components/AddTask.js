import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

function AddTask(props) {

    const { addTask, updateTask, task, handleChange } = props;
    const state = useSelector(state => state);

    return (
        <>
            <h3 className="text-center">{state.editBool ? "Edit Task" : "Add a new Task"}</h3>
            <Form className="flexDisplay" onSubmit={!state.editBool ? addTask : updateTask}>
                <Form.Group>
                    <Form.Control
                        size="lg"
                        type="text"
                        value={task}
                        placeholder="Add a task"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                >
                    {state.editBool ? "Update" : "Add"}
                </Button>
            </Form>
        </>
    );
}

export default AddTask;