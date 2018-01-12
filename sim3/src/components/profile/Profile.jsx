import React, { Component } from 'react';

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            hairColor: '',
            eyeColor: '',
            hobby: '',
            birthdayDay: 0,
            birthdayMonth: '',
            birthdayYear: 0
        }
    }
//36D
    updateFirst(val) {
        this.setState({
            firstName: val
        })
    }
    updateLast(val) {
        this.setState({
            lastName: val
        })
    }


    render() {
        return (
            <div>
                <div>
                    <div className='pic'></div>
                    {this.state.firstName}
                    {this.state.lastName}
                    <div onClick={this.updateProf}>Update</div>
                    <div>Cancel</div>
                </div>
                <div>
                    <div>
                        <p>First Name</p>
                        <input onChange={e => this.updateFirst(e.target.value)} type="text" id="firstname-input" />
                    </div>
                    <div>
                        <p>Last Name</p>
                        <input onChange={e => this.updateLast(e.target.value)} type="text" id='lastname-input' />
                    </div>
                    <div>
                        <p>Gender</p>
                        <select id="gender">
                            <option disabled value>--select--</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div>
                    <div>
                        <p>Hair Color</p>
                        <select id="hair_color">
                            <option disabled value>--select--</option>
                            <option value='brown'>Brown</option>
                            <option value='blue'>Blue</option>
                            <option value='green'>Green</option>
                            <option value='red'>Red</option>
                            <option value='blonde'>Blonde</option>
                            <option value='white'>White</option>
                        </select>
                    </div>
                    <div>
                        <p>Eye Color</p>
                        <select id="eye_color">
                            <option disabled value>--select--</option>
                            <option value='brown'>Brown</option>
                            <option value='blue'>Blue</option>
                            <option value='green'>Green</option>
                        </select>
                    </div>
                    <div>
                        <p>Hobby</p>
                        <select id="hobby">
                            <option disabled value>--select--</option>
                            <option value='video-games'>Video Games</option>
                            <option value='hiking'>Hiking</option>
                            <option value='fishing'>Fishing</option>
                            <option value='rafting'>Rafting</option>
                        </select>
                    </div>
                    <div>
                        <p>Birtday Day</p>
                        <select id="birthday_day">
                            <option disabled value>--select--</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                            <option value='11'>11</option>
                            <option value='12'>12</option>
                            <option value='13'>13</option>
                            <option value='14'>14</option>
                            <option value='15'>15</option>
                            <option value='16'>16</option>
                            <option value='17'>17</option>
                            <option value='18'>18</option>
                            <option value='19'>19</option>
                            <option value='20'>20</option>
                            <option value='21'>21</option>
                            <option value='22'>22</option>
                            <option value='23'>23</option>
                            <option value='24'>24</option>
                            <option value='25'>25</option>
                            <option value='26'>26</option>
                            <option value='27'>27</option>
                            <option value='28'>28</option>
                            <option value='29'>29</option>
                            <option value='30'>30</option>
                            <option value='31'>31</option>
                        </select>
                    </div>
                    <div>
                        <p>Birthday Month</p>
                        <select id="birthday_month">
                            <option disabled value>--select--</option>
                            <option value='january'>January</option>
                            <option value='febuary'>Febuary</option>
                            <option value='march'>March</option>
                            <option value='april'>April</option>
                            <option value='may'>May</option>
                            <option value='june'>June</option>
                            <option value='july'>July</option>
                            <option value='august'>August</option>
                            <option value='september'>September</option>
                            <option value='october'>October</option>
                            <option value='november'>November</option>
                            <option value='december'>December</option>
                        </select>
                    </div>
                    <div>
                        <p>Birthday Year</p>
                        <select id="birthday_year">
                            <option disabled value>--select--</option>
                            <option value='2002'>2002</option>
                            <option value='2001'>2001</option>
                            <option value='2000'>2000</option>
                            <option value='1999'>1999</option>
                            <option value='1998'>1998</option>
                            <option value='1997'>1997</option>
                            <option value='1996'>1996</option>
                            <option value='1995'>1995</option>
                            <option value='1994'>1994</option>
                            <option value='1993'>1993</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}