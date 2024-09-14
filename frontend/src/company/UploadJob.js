import React, { useState } from "react";
import './CompanyHome.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import JobValidation from "./JobValidation";

function UploadJob() {
    
    const [values, setValues] = useState({
        designation: '',
        description: '',
        cgpa: '',
        salary: '',
        date: ''
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(JobValidation(values));
        if (errors.description === "" && errors.designation === "" && errors.salary === "" && errors.date === "" && errors.cgpa==="") {
            axios.post('http://localhost:8081/uploadJob/', values)
                .then((res) => {
                        setValues(values.email);
                        navigate('/uploadedjob');
                    
                })
                .catch((err) => console.log(err));
        }


    };
    const handleDelete = () => {
        axios.get('http://localhost:8081/logout')
            .then(res => {
                window.location.reload(true);
            }).catch(err => console.log(err));
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
                    <Link to="/cstudentinfo" className='SH3'>Student</Link>
                </div>
                <div className='SH2'>
                    <Link to="/uploadjob" className='SH3'>Upload Jobs</Link>
                </div>
                <div className='SH2'>
                    <Link to="/uploadedjob" className='SH3'>Uploaded Jobs</Link>
                </div>
                <div className='SH2' >
                    <Link to="/" onClick={handleDelete} className='SH3'>Logout</Link></div>
            </div>
            <div>
                <div style={{textAlign:'center',fontSize:'25px',fontWeight:'bold',paddingTop:'20px'}}>Upload New Jobs</div>

                <div className="SH4">
                    <form action="" onSubmit={handleSubmit}>
                        <div >
                            <label htmlFor="designation" className='labelS'>Designation</label>
                            <input type="text" placeholder='Enter Designation ' name='designation' onChange={handleInput} className='inputS' />
                            {errors.designation && <span className='danger'> {errors.designation}</span>}
                        </div>
                        <div>
                            <label htmlFor="description" className='labelS'>Description</label>
                            <input type="text" placeholder='Enter description' name='description' onChange={handleInput} className='inputS' />
                            {errors.description && <span className='danger'> {errors.description}</span>}
                        </div>
                        <div>
                            <label htmlFor="cgpa" className='labelS'>CGPA Requirement</label>
                            <input type="number" min="0" max="10" step="any" placeholder='Enter CGPA' name='cgpa' onChange={handleInput} className='inputS' />
                            {errors.cgpa && <span className='danger'> {errors.cgpa}</span>}
                        </div>
                        <div>
                            <label htmlFor="salary" className='labelS'>Salary Package</label>
                            <input type="number" min="1000000" placeholder='Enter Salary Package' name='salary' onChange={handleInput} className='inputS' />
                            {errors.salary && <span className='danger'> {errors.salary}</span>}
                        </div>
                        <div>
                            <label htmlFor="date" className='labelS'>Last Date for Applying</label>
                            <input type="date" placeholder='Enter Last Date for Applying' name='date' onChange={handleInput} className='inputS' />
                            {errors.date && <span className='danger'> {errors.date}</span>}
                        </div>
                       

                        <button type='submit' className='btnS' onSubmit={  <Link to ="/login" style={{ color: 'black', textAlign:'center' }}><p className='btnS1' ></p></Link>}>Add Job</button>

                    </form></div>



            </div>


        </div>
    )
}

export default UploadJob