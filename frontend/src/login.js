import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'
import nit from './nit.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [values, setValues] = useState({
        role: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, seterrors] = useState({

    })
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    axios.defaults.withCredentials = true;
    const handleSubmit = (event) => {
        event.preventDefault();
        seterrors(Validation(values));
        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
                .then((res) => {
                    if (res.data.Status === 'Success') {
                        navigate('/');
                    } else {
                        alert(res.data.Error);
                    }
                })
                .catch((err) => console.log(err));
        }


    };

    return (
        <div>
            <div>
                <div className='logoS'>
                    <div className='img'><img src={nit} alt="NIT" className='imageS' /></div>
                    <div className='txt'>
                    </div>
                </div>

            </div>

            <div className='form'>

                <div className='loginS'>
                    <div className='loginS1'>Login</div>
                    <div className='loginS2'>
                        <form action="" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="role" className='labelS '>Select Role</label>
                                <select placeholder='Enter Company Name' name='role' className='inputS ' onChange={handleInput}>
                                    <option value="select">Select Role</option>
                                    <option value="student">Student</option>
                                    <option value="recruiter">Recruiter</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div >
                                <label htmlFor="email" className='labelS'>Email ID</label>
                                <input type="email" placeholder='Enter Email ID' name='email' onChange={handleInput} className='inputS' />
                                {errors.email && <span className='danger'> {errors.email}</span>}
                            </div>
                            <div>
                                <label htmlFor="password" className='labelS'>Password</label>
                                <input type={showPassword ? "text" : "password"} placeholder='Enter Password' name='password' onChange={handleInput} className='inputS' />
                                <FontAwesomeIcon
                                    icon={showPassword ? faEyeSlash : faEye}
                                    className="eye-icon"
                                    onClick={togglePasswordVisibility}
                                    />
                                    {errors.password && <span className='danger'> {errors.password}</span>}
                        </div>
                            <button type='submit' className='btnS'>Login</button>
                            <p></p>
                            <Link to="/role" style={{ color: 'black', textAlign: 'center' }}  ><p className='btnS1'>Create Account</p></Link>
                        </form></div>
                </div>
            </div>


        </div>
    )
}

export default Login