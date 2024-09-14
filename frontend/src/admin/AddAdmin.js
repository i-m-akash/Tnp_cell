import React, {useState} from 'react'
import './AdminSignup.css';
import { Link, useNavigate } from 'react-router-dom'
import AdminSignValidation from '../AdminSignValidation'
import axios from 'axios'
//import nit from './nit.png'

function AddAdmin(){

    const[values,setValues] = useState({
        role:'admin',
        name:'',
        instituteid:'',
        email:'',
        mobileNumber:'',
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
        seterrors(AdminSignValidation(values));
        if(errors.name==="" && errors.instituteid==="" && errors.email==="" && errors.mobileNumber==="" && errors.password===""){
            axios.post('http://localhost:8081/adminsignup',values)
            .then(res=>{
                navigate('/admin');
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
        <div className='forml'>
            <div className='loginSl'>
                <div className='loginS1l'>Add Admin</div>
                <div className='loginS2l'>
                <form action="" onSubmit={handleSubmit}>
                    <div >
                        <label htmlFor="name" className='labelSl'>Name</label>
                        <input type="text" placeholder='Enter Name' name='name' onChange={handleInput} className='inputSl'/>
                        {errors.name && <span className='dangerl' style={{color:'red'}}> {errors.name}</span>}
                    </div>

                    <div>
                        <label htmlFor="instituteid" className='labelSl'>Institute ID</label>
                        <input type="text" placeholder='Enter Institute ID' name='instituteid' onChange={handleInput} className='inputSl'/>
                        {errors.instituteid && <span className='dangerl' style={{color:'red'}}> {errors.instituteid}</span>}
                    </div>

                    <div>
                        <label htmlFor="email" className='labelSl'>Email</label>
                        <input type="email" placeholder='Enter Email' name='email' onChange={handleInput} className='inputSl'/>
                        {errors.email && <span className='dangerl' style={{color:'red'}}> {errors.email}</span>}
                    </div>

                    <div>
                        <label htmlFor="mobileNumber" className='labelSl'>Mobile Number</label>
                        <input type="tel" placeholder='Enter Mobile Number' name='mobileNumber' onChange={handleInput} className='inputSl'/>
                        {errors.mobileNumber && <span classname='dangerl' style={{color:'red'}}> {errors.mobileNumber}</span>}
                    </div>

                    <div>
                        <label htmlFor="password" className='labelSl'>Password</label>
                        <input type="password" placeholder='Enter Password' name='password' onChange={handleInput} className='inputSl'/>
                        {errors.password && <span className='dangerl' style={{color:'red'}}> {errors.password}</span>}
                    </div>
                    <p></p>
                    <button type='submit' className='btnSl'>Save</button>
                    
                </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AddAdmin