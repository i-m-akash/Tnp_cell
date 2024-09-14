import React, { useState, useEffect } from "react";
import './AdminHome.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Company(){
    const [companyData, setCompanyData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8081/company`)
            .then(response => {
                setCompanyData(response.data);
            })
            .catch(error => {
                console.error('Error fetching company data:', error);
            });
    }, []);
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
                    <Link to="/student" className='SH3'>Student</Link></div>
                <div className='SH2'>
                    <Link to="/company" className='SH3'>Companies</Link></div>
                <div className='SH2'>
                    <Link to="/admin" className='SH3'>Admin</Link></div>
                <div className='SH2'>
                    <Link to="/aopening" className='SH3'>Openings</Link></div>
                    <div className='SH2' >
                    <Link to="/" onClick={handleDelete} className='SH3'>Logout</Link></div>
            </div>
            <div className="SHT">
                <table >
                    <thead >
                        
                        <td>Company Name</td>
                        <td>Address</td>
                        <td>Email ID</td>
                        <td>Contact Number</td>
                    </thead>
                    <tbody>
                        {
                            companyData.map((user, index) => {
                                return <tr key={index}>
                                    
                                    <td>{user.name}</td>
                                    <td>{user.address}</td>
                                    <td>{user.email}</td>
                                    <td>{user.contactNumber}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="newd"><Link to="/addcompany"style={{ color: 'white'}} className="new">Add New</Link></div>
            <div className="newd"><Link to="/deletecompany"style={{ color: 'white'}} className="new">Delete </Link></div>

            </div>
    )
}


export default Company