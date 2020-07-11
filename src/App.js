import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TasksList from './components/TasksList'
import AddTask from './components/AddTask';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { ADD_TASK, EDIT_TASK, DELETE_TASK, BOOLEAN_FOR_EDIT, MARK_TASK_AS_COMPLETE } from './store/actionTypes';
function App() {

  const [newTask, setNewTask] = useState("");   ////newTaskvalue
  const [selectedTaskId, setSelectedTaskId] = useState("");
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
    let payload = {
      id: uuidv4(),
      task_name: newTask,
      isActive: true
    }
    dispatch({ type: ADD_TASK, payload })
    setNewTask("");
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
  return (
    <div className="main-container">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <AddTask
              task={newTask}
              addTask={addNewTask}
              handleChange={onhandleChange}
              updateTask={updateTaskHandler}
            />
            <TasksList
              tasksList={state.taskArray}
              deleteTask={deleteTaskHandler}
              editTask={editTaskHandler}
              markTaskComplete={markTaskasComplete}
            />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
