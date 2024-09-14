import React, { useEffect, useState } from 'react';
import './StudentHome.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function StudentHome() {
  const [data, setData] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8081/profile')
      .then(response => {
        setData(response.data);
        setUserRole(response.data.role);
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });
  }, []);
  const handleDelete = () => {
    axios.get('http://localhost:8081/logout')
        .then(res => {
            window.location.reload(true);
        }).catch(err => console.log(err));
}
  if (!data) {
    return <p>Loading...</p>;
  }

  let links = null;
  let profileSection = null;

  switch (userRole) {
    case 'student':
      links = (
        <div className='SH2'>
          <Link to="/opening" className='SH3'>Openings</Link>
        </div>
      );
      profileSection = (
        <div>
          <div className='SH'>Profile</div>
          <div className='SH5'>Name : {data.name}</div>
          <div className='SH5'>Roll No. : {data.rollno}</div>
          <div className='SH5'>Branch : {data.branch}</div>
          <div className='SH5'>10th Percentage: {data.ten}</div>
          <div className='SH5'>12th Percentage: {data.twel}</div>
          <div className='SH5'>CGPA: {data.cgpa}</div>
          <div className='SH5'>Graduation Year: {data.graduationYear}</div>
          <div className='SH5'>Gender: {data.gender}</div>
         {/* <div className='SH5'>Dropper: {data.dropper}</div> */}
          <div className='SH5'>Backlog: {data.backlog}</div>
          <div className='SH5'>Email: {data.email}</div>
          <div className='SH5'>Mobile Number: {data.mobileNumber}</div>
        </div>
      );
      break;
    case 'recruiter':
      links = (
        <>
          <div className='SH2'>
            <Link to="/cstudentinfo" className='SH3'>Student</Link>
          </div>
          <div className='SH2'>
            <Link to="/uploadjob" className='SH3'>Upload Jobs</Link>
          </div>
          <div className='SH2'>
            <Link to="/uploadedjob" className='SH3'>Uploaded Jobs</Link>
          </div>
        </>
      );
      profileSection = (
        <div>
          <div className='SH'>Profile</div>
          <div className='SH5'>Company Name : {data.name}</div>
          <div className='SH5'>Address : {data.address}</div>
          <div className='SH5'>Email: {data.email}</div>
          <div className='SH5'>Contact Number: {data.contactNumber}</div>
        </div>
      );
      break;
    case 'admin':
      links = (
        <>
          <div className='SH2'>
            <Link to="/student" className='SH3'>Student</Link>
          </div>
          <div className='SH2'>
            <Link to="/company" className='SH3'>Companies</Link>
          </div>
          <div className='SH2'>
            <Link to="/admin" className='SH3'>Admin</Link>
          </div>
          <div className='SH2'>
            <Link to="/aopening" className='SH3'>Openings</Link>
          </div>
        </>
      );
      profileSection = (
        <div>
          <div className='SH'>Profile</div>
          <div className='SH5'>Name : {data.name}</div>
          <div className='SH5'>Institute ID : {data.instituteid}</div>
          <div className='SH5'>Email: {data.email}</div>
          <div className='SH5'>Mobile Number: {data.mobileNumber}</div>
        </div>
      );
      break;
    default:
      break;
  }

  return (
    <div className='S'>
      <div className='SH1'>
        <div className='SH2'>
          <Link to="/" className='SH3'>Home</Link>
        </div>
        <div className='SH2'>
          <Link to="/studentHome" className='SH3'>Profile</Link>
        </div>
        {links}
        <div className='SH2' >
          <Link to="/" onClick={handleDelete} className='SH3'>Logout</Link>
        </div>
      </div>
      <div className='SH4'>
        {profileSection}
      </div>
    </div>
  );
}

export default StudentHome;
