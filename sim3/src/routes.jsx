import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Search from './components/search/Search';
import Profile from './components/profile/Profile';

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/search' component={Search}/>
        <Route path='/profile' component={Profile}/>
    </Switch>
);