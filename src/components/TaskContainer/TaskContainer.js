import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import TasksList from './TasksList'
import AddTask from './AddTask';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { ADD_TASK, EDIT_TASK, DELETE_TASK, BOOLEAN_FOR_EDIT, MARK_TASK_AS_COMPLETE } from '../../store/actionTypes';
function MainContainer() {

  const [newTask, setNewTask] = useState("");   ////newTaskvalue
  const [validated, setValidated] = React.useState(false);  //form validation
  const [selectedTaskId, setSelectedTaskId] = useState("");  ///task which is selected to edit
  const [tasksToShow, setTasktoShow] = React.useState([]);   ///list of tasks to show on page according to button selection
  const [activeButton, setActiveButton] = React.useState('All'); //state for active button

  ///to access redux and global state
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  ///track new task value
  const onhandleChange = (e) => {
    setNewTask(e.target.value)
  }

  ///edit task
  const editTaskHandler = (id) => {
    setSelectedTaskId(id);
    let previousTaskVal = state.taskArray.filter(task => task.id === id)
    dispatch({ type: BOOLEAN_FOR_EDIT })
    setNewTask(previousTaskVal[0].task_name);
  }

  ///delete task
  const deleteTaskHandler = (id) => {
    dispatch({ type: DELETE_TASK, payload: id });
    setNewTask("");
  }

  ///add new task
  const addNewTask = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false || newTask.length === 0) {
      e.stopPropagation();
    }
    else {
      setValidated(true);
      let payload = {
        id: uuidv4(),
        task_name: newTask,
        isActive: true
      }
      dispatch({ type: ADD_TASK, payload })
      setNewTask("");
      setActiveButton('All');
    }

  }
  ///update task name
  const updateTaskHandler = (e) => {
    e.preventDefault();
    dispatch({ type: EDIT_TASK, payload: { task_name: newTask, id: selectedTaskId } });
    setNewTask("");
  }

  //mark task as complete
  const markTaskasComplete = (id) => {
    dispatch({ type: MARK_TASK_AS_COMPLETE, payload: id })
  }

  //taskstoShow
  const tasksToShowHandler = (buttonname) => {
    setActiveButton(buttonname);
    switch (buttonname) {
      case 'All':
        setTasktoShow(state.taskArray)
        break;
      case 'Active':
        setTasktoShow(state.taskArray.filter((task) => task.isActive))
        break;
      case 'Completed':
        setTasktoShow(state.taskArray.filter((task) => !task.isActive))
        break;
      default:
        setTasktoShow(state.taskArray);
    }
  }

  ///initialise
  useEffect(() => {
    setTasktoShow(state.taskArray)
  }, [state.taskArray]);
  return (
    <div className="main-container">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <AddTask
              task={newTask}
              validated={validated}
              addTask={addNewTask}
              handleChange={onhandleChange}
              updateTask={updateTaskHandler}
            />
            <TasksList
              tasksList={tasksToShow}
              deleteTask={deleteTaskHandler}
              editTask={editTaskHandler}
              markTaskComplete={markTaskasComplete}
              tasksToShowHandler={tasksToShowHandler}
              activeButton={activeButton}
            />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default MainContainer;
