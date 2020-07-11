import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Task from './Task';
function List(props) {

    const { tasksList, activeButton, deleteTask, editTask, markTaskComplete, tasksToShowHandler } = props;

    //tasks to show
    const taskListDOM = tasksList.map((task) =>
        <Task
            key={task.id}
            taskDetails={task}
            deleteTask={deleteTask}
            editTask={editTask}
            markTaskComplete={markTaskComplete}
            activeButton={activeButton}
        />
    )

    return (
        <div className="mt-5">
            <h3 className="text-center">List of Tasks</h3>
            <ListGroup>
                {taskListDOM}
            </ListGroup>
            <div className="mt-2">
                <Button
                    className={activeButton === 'All' ? 'active' : ''}
                    variant="light"
                    onClick={() => { tasksToShowHandler('All') }}
                >
                    All
            </Button>{' '}{' '}
                <Button
                    className={activeButton === 'Active' ? 'active' : ''}
                    variant="light"
                    onClick={() => { tasksToShowHandler('Active') }}
                >
                    Active
            </Button>{' '}{' '}
                <Button
                    className={activeButton === 'Completed' ? 'active' : ''}
                    variant="light"
                    onClick={() => { tasksToShowHandler('Completed') }}
                >
                    Completed
            </Button>
            </div>
        </div>
    );
}

export default List;