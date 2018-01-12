import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './header.css'

export default class Header extends Component {
    render(){
        return(
            // 36G
            <div>
                <nav className='nav'>
                    <div className='logo-group'>
                        <div id='helo'>Helo</div>
                        <Link to='/'><div className='home'></div></Link>
                        <Link to='/search'><div className='search'></div></Link>
                    </div>
                    <div className='logout-button'>Logout</div>
                </nav>
            </div>
        )
    }
}