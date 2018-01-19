import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Main} from './Main';
import {Works} from './Works';
import {Links} from './Links';
import {Resume} from './Resume';
import {Background} from './Background';

export class Launch extends Component {
    render() {
        return(
            <div>
                <Background />
                <Router>
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='/works' component={Works} />
                        <Route path='/links' component={Links} />
                        <Route path='/resume' component={Resume} />
                    </Switch>
                </Router>
            </div>
        )
    }
}