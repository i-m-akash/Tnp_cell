import './AdminHome.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

function DeleteCompany() {
    const [roll, setRoll] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const handleDelete = () => {
        axios.get('http://localhost:8081/logout')
            .then(res => {
                window.location.reload(true);
            }).catch(err => console.log(err));
    }
    const handleInputChange = (event) => {
        setRoll(event.target.value);
    }
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Reset error message
        setError('ERROR');

        // Check if roll number is provided
        if (!roll) {
            setError('Name is required');
            return;
        }

        // Send delete request to backend
        axios.post('http://localhost:8081/deletecompany', { roll })
            .then(res => {
                if (res.data.status === "Success") {
                    setSuccess(true);
                    navigate('/company');
                } else {
                    setError('Error deleting company');
                }
            })
            .catch(err => {
                console.error(err);
                setError('Error deleting company');
            });
    }

    return (
        <div>
            <div className='SH1'>
                <div className='SH2'>
                    <Link to="/" className='SH3'>Home</Link>
                </div>
                <div className='SH2'>
                    <Link to="/studentHome" className='SH3'>Profile</Link>
                </div>
                <div className='SH2'>
                    <Link to="/student" className='SH3'>Student</Link></div>
                <div className='SH2'>
                    <Link to="/company" className='SH3'>Companies</Link></div>
                <div className='SH2'>
                    <Link to="/admin" className='SH3'>Admin</Link></div>
                <div className='SH2'>
                    <Link to="/aopening" className='SH3'>Openings</Link></div>
                <div className='SH2' >
                    <Link to="/" onClick={handleDelete} className='SH3'>Logout</Link>
                </div>
            </div>


            {success ? (
                <p>Company record deleted successfully!</p>
            ) : (
                <div className='forml'>
                    <div className='loginSl'>
                        <div className='loginS1l'>Delete Company</div>
                        <div className='loginS2l'>
                            <form action="" onSubmit={handleSubmit}>
                                <div >
                                    <label htmlFor="roll" className='labelSl'>Company Name</label>
                                    <input type="text" placeholder='Enter Company Name' className='inputSl' value={roll} onChange={handleInputChange} />
                                </div>
                                {error && <p style={{ color: 'red' }}>{error}</p>}

                                <p></p>
                                <button type='submit' className='btnSl'>Delete</button>

                            </form>
                        </div>
                    </div>
                </div >

            )
            }
        </div >
    );
}

export default DeleteCompany;
