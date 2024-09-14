import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import nit from './nit.png';

function Role() {
    const [selectedRole, setSelectedRole] = useState('student'); // State variable to store selected role
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (selectedRole === 'student') {
            navigate('/studentSignup');
        } else if (selectedRole === 'recruiter') {
            navigate('/signup');
        } else if (selectedRole === 'admin') {
            navigate('/adminSignup');
        }
    }

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value); // Update selected role when the dropdown value changes
    }

    return (
        <div>
            <div>
                <div className='logoS '>
                    <div className='img '><img src={nit} alt="NIT" className='imageS ' /></div>
                    <div className='txt '>
                        
                    </div>
                </div>
            </div>
            <div className='form '>
                <div className='loginSl'>
                    <div className='loginS1 '>Select Role</div>
                    <div className='loginS2 '></div>
                    <form action="">
                        <div>
                            <label htmlFor="role" className='labelS '>Select Role</label>
                            <select placeholder='Enter Company Name' name='role' className='inputS ' onChange={handleRoleChange}>
                                <option value="student">Student</option>
                                <option value="recruiter">Recruiter</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <button type='button' className='btnS' onClick={handleSubmit}>Signup</button>
                        <p></p>
                        <Link to="/signup" style={{ color: 'black', textAlign: 'center' }}><p className='btnS1'>Login</p></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Role;
