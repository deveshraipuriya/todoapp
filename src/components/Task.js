import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
function Task(props) {
    const { taskDetails, deleteTask, editTask, markTaskComplete } = props;
    // console.log(taskDetails)
    return (
        <>
            <ListGroup.Item
                className="d-flex justify-content-between"
                variant="success"
            >
                <div className="d-flex justify-content-start">{taskDetails.task_name}</div>
                <div className="d-flex justify-content-end">
                    <span
                        className="mx-2 text-success"
                        onClick={() => { editTask(taskDetails.id) }}
                    >
                        <i
                            className="fas fa-pen"
                        />
                    </span>
                    <span
                        className="mx-2 text-danger"
                        onClick={() => { deleteTask(taskDetails.id) }}
                    >
                        <i
                            className="fas fa-trash"
                        />
                    </span>
                    <span
                        className="mx-2 text-danger"
                        onClick={() => { markTaskComplete(taskDetails.id) }}
                    >
                        <i className="fas fa-check" />
                    </span>
                </div>

            </ListGroup.Item>
        </>
    );
}

export default Task;