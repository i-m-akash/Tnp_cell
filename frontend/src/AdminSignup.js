import React, { useState } from 'react'
import './AdminSignup.css';
import { Link, useNavigate } from 'react-router-dom'
import AdminSignValidation from './AdminSignValidation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import nit from './nit.png'

function AdminSignup() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const [values, setValues] = useState({
        role: 'admin',
        name: '',
        instituteid: '',
        email: '',
        mobileNumber: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, seterrors] = useState({

    })
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        seterrors(AdminSignValidation(values));
        if (errors.name === "" && errors.instituteid === "" && errors.email === "" && errors.mobileNumber === "" && errors.password === "") {
            axios.post('http://localhost:8081/adminsignup', values)
                .then(res => {
                    if (res.data.Status === "Success") {
                        navigate('/');

                    } else {
                        alert("Error");
                    }
                })
                .catch(err => console.log(err));
        }

    }

    return (
        <div>
            <div>
                <div className='logoSl'>
                    <div className='imgl'><img src={nit} alt="NIT" className='imageSl' /></div>
                    <div className='txtl'>

                    </div>
                </div>

           
            <div className='forml'>
                <div className='loginSl'>
                    <div className='loginS1l'>Signup</div>
                    <div className='loginS2l'>
                        <form action="" onSubmit={handleSubmit}>
                            <div >
                                <label htmlFor="name" className='labelSl'>Name</label>
                                <input type="text" placeholder='Enter Name' name='name' onChange={handleInput} className='inputSl' />
                                {errors.name && <span className='dangerl' style={{ color: 'red' }}> {errors.name}</span>}
                            </div>

                            <div>
                                <label htmlFor="instituteid" className='labelSl'>Institute ID</label>
                                <input type="text" placeholder='Enter Institute ID' name='instituteid' onChange={handleInput} className='inputSl' />
                                {errors.instituteid && <span className='dangerl' style={{ color: 'red' }}> {errors.instituteid}</span>}
                            </div>

                            <div>
                                <label htmlFor="email" className='labelSl'>Email</label>
                                <input type="email" placeholder='Enter Email' name='email' onChange={handleInput} className='inputSl' />
                                {errors.email && <span className='dangerl' style={{ color: 'red' }}> {errors.email}</span>}
                            </div>

                            <div>
                                <label htmlFor="mobileNumber" className='labelSl'>Mobile Number</label>
                                <input type="tel" maxLength={10} placeholder='Enter Mobile Number' name='mobileNumber' onChange={handleInput} className='inputSl' />
                                {errors.mobileNumber && <span classname='dangerl' style={{ color: 'red' }}> {errors.mobileNumber}</span>}
                            </div>

                            <div>
                                <label htmlFor="password" className='labelSl'>Password</label>
                                <input type={showPassword ? "text" : "password"} minLength={7} 
                                    title="Password must contain at least one uppercase letter, one lowercase letter, one special character, and one numeric digit." placeholder='Enter Password' name='password' onChange={handleInput} className='inputSl' />
                                <FontAwesomeIcon
                                    icon={showPassword ? faEyeSlash : faEye}
                                    className="eye-icon"
                                    onClick={togglePasswordVisibility}
                                />
                                {errors.password && <span className='dangerl' style={{ color: 'red' }}> {errors.password}</span>}
                            </div>

                            <button type='submit' className='btnSl'>Signup</button>
                            <p></p>
                            <Link to="/login" style={{ color: 'black', textAlign: 'center' }}><p className='btnS1l'>Login</p></Link>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AdminSignup