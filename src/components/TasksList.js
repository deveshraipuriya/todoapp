import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Task from './Task';
function List(props) {

    const { tasksList, deleteTask, editTask, markTaskComplete } = props;
    const [tasksToShow, setTasktoShow] = React.useState([]);
    const [activeButton, setActiveButton] = React.useState('All');

    console.log(tasksList);
    const taskListDOM = tasksToShow.map((task) =>
        <Task
            key={task.id}
            taskDetails={task}
            deleteTask={deleteTask}
            editTask={editTask}
            markTaskComplete={markTaskComplete}
        />
    )
    React.useEffect(() => {
        setTasktoShow(tasksList);
    }, [tasksList])
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
                    onClick={() => { setActiveButton('All'); setTasktoShow(tasksList) }}>
                    All
            </Button>{' '}{' '}
                <Button
                    className={activeButton === 'Active' ? 'active' : ''}
                    variant="light"
                    onClick={() => { setActiveButton('Active'); setTasktoShow(tasksList.filter((task) => task.isActive)) }}>
                    Active
            </Button>{' '}{' '}
                <Button
                    className={activeButton === 'Completed' ? 'active' : ''}
                    variant="light"
                    onClick={() => { setActiveButton('Completed'); setTasktoShow(tasksList.filter((task) => !task.isActive)) }}>
                    Completed
            </Button>
            </div>
        </div>
    );
}

export default List;