import React, {useState} from 'react'
import '../Signup.css';
import { Link, useNavigate } from 'react-router-dom'
import SignValidation from '../SignupValidation'
import axios from 'axios'
//import nit from './nit.png'

function AddCompany(){

    const[values,setValues] = useState({
        role:'company',
        name:'',
        address:'',
        email:'',
        contactNumber:'',
        password:''
    })
    const navigate = useNavigate();
    const[errors,seterrors] = useState({
        
    })
    const handleInput=(event)=>{
        setValues(prev=> ({...prev,[event.target.name]: [event.target.value]}))
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        seterrors(SignValidation(values));
        if(errors.name==="" && errors.email==="" && errors.password==="" && errors.address==="" && errors.contactNumber===""){
            axios.post('http://localhost:8081/signup',values)
            .then(res=>{
                navigate('/company');
            })
            .catch(err=>console.log(err));
        }

    }
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
                    <Link to="/" onClick={handleDelete} className='SH3'>Logout</Link>
                </div>
            </div>
        <div className='form '>
            <div className='loginSl'>
                <div className='loginS1 '>Add Company</div>
                <div className='loginS2 '></div>
                <form action="" onSubmit={handleSubmit}>
                <div>
                        <label htmlFor="name" className='labelS '>Company Name</label>
                        <input type="text" placeholder='Enter Company Name' name='name' onChange={handleInput} className='inputS '/>
                        {errors.name && <span className='danger'> {errors.name}</span>}
                    </div>
                    <div>
                        <label htmlFor="address" className='labelS '>Address</label>
                        <input type="text" placeholder='Enter Address' name='address' onChange={handleInput} className='inputS '/>
                        {errors.address && <span className='danger'> {errors.address}</span>}
                    </div>
                    <div>
                        <label htmlFor="email" className='labelS '>Email</label>
                        <input type="email" placeholder='Enter Email' name='email' onChange={handleInput} className='inputS '/>
                        {errors.email && <span className='danger'> {errors.email}</span>}
                    </div>
                    <div>
                        <label htmlFor="contactNumber" className='labelS '>Contact Number</label>
                        <input type="tel" placeholder='Enter Contact Number' name='contactNumber' onChange={handleInput} className='inputS '/>
                        {errors.contactNumber && <span className='danger'> {errors.contactNumber}</span>}
                    </div>
                    <div>
                        <label htmlFor="password" className='labelS '>Password</label>
                        <input type="password" placeholder='Enter Password' name='password' onChange={handleInput} className='inputS '/>
                        {errors.password && <span className='danger'> {errors.password}</span>}
                    </div>
                    <button type='submit' className='btnS'>Save</button>
                    
                </form>
            </div>
        </div>
        </div>
    )
}

export default AddCompany