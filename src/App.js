import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainContainer from './components/Container/Container';
import SportsComp from './components/Sports/SportsComp';
export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/todo" component={MainContainer} />
                    <Route exact path="/sports" component={SportsComp} />
                    <Route component={MainContainer} />
                </Switch>
            </Router>
        </div>
    )
}
