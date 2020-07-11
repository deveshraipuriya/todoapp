import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskContainer from './components/TaskContainer/TaskContainer';
import SportsComp from './components/Sports/SportsComp';
export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/todo" component={TaskContainer} />
                    <Route exact path="/sports" component={SportsComp} />
                    <Route component={TaskContainer} />
                </Switch>
            </Router>
        </div>
    )
}
