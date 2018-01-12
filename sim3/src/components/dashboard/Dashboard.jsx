import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Dashboard extends Component{
    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <div>
                    <div></div>
                    {}
                    {}
                    <Link to='/profile'><div>Edit Profile</div></Link>
                </div>
            </div>
        )
    }
}