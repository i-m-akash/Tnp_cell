import React, { useState,useEffect } from "react";
import './CompanyHome.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

function UploadedJob(){
    
    const [jobData, setJobData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8081/uploadedJob/`)
            .then(response => {
                setJobData(response.data);
            })
            .catch(error => {
                console.error('Error fetching jobs data:', error);
            });
    }, []);
    const handleDelete = () => {
        axios.get('http://localhost:8081/logout')
            .then(res => {
                window.location.reload(true);
            }).catch(err => console.log(err));
    }
    return(
        <div>
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
            <div className="SHT">
                <table>
                    <thead>
                        <td>Designation</td>
                        <td>Description</td>
                        <td>CGPA Required</td>
                        <td>Salary Package</td>
                        <td>Last Date For Applying</td>
                    </thead>
                    <tbody>
                        {
                            jobData.map((user, index) => {
                                return <tr key={index}>
                                    <td>{user.designation}</td>
                                    <td>{user.description}</td>
                                    <td>{user.cgpa}</td>
                                    <td>{user.salary}</td>
                                    <td>{new Date(user.date).toLocaleDateString()}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}
export default UploadedJob