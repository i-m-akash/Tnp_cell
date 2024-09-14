import React, {useState} from 'react'
import './StudentSignup.css';
import { Link, useNavigate } from 'react-router-dom'
import StudentSignValidation from './StudentSignValidation'
import axios from 'axios'
import nit from './nit.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
function StudentSignup(){
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const[values,setValues] = useState({
        role:'student',
        name:'',
        rollno:'',
        branch:'',
        graduationYear:'',
        gender:'',
        email:'',
        ten:'',
        twel:'',
        dropper:'',
        backlog:'',
        cgpa:'',
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
        seterrors(StudentSignValidation(values));
        if(errors.name==="" && errors.ten==="" && errors.gender==="" &&  errors.dropper==="" && errors.backlog==="" && errors.twel==="" && errors.rollno==="" && errors.branch==="" && errors.graduationYear==="" && errors.email==="" && errors.cgpa==="" && errors.mobileNumber==="" && errors.password===""){
            axios.post('http://localhost:8081/studentsignup',values)
            .then(res=>{
                if(res.data.Status === "Success"){
                   navigate('/');
                   
                }else{
                    alert("Error");
                }
            })
            .catch(err=>console.log(err));
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
                        
            </div>
        <div className='forml'>
            <div className='loginSl'>
                <div className='loginS1l'>Signup</div>
                <div className='loginS2l'>
                <form action="" onSubmit={handleSubmit}>
                    <div >
                        <label htmlFor="name" className='labelSl'>Name</label>
                        <input type="text" placeholder='Enter Name' name='name' onChange={handleInput} className='inputSl'/>
                        {errors.name && <span className='dangerl' style={{color:'red'}}> {errors.name}</span>}
                    </div>

                    <div>
                        <label htmlFor="rollno" className='labelSl'>Roll No.</label>
                        <input type="text" placeholder='Enter Roll No.' name='rollno' onChange={handleInput} className='inputSl'/>
                        {errors.rollno && <span className='dangerl' style={{color:'red'}}> {errors.rollno}</span>}
                    </div>

                    <div>
                        <label htmlFor="branch" className='labelSl'>Branch</label>
                        <input type="text" placeholder='Enter Branch(CSE,MEC,ECE etc.)' name='branch' onChange={handleInput} className='inputSl'/>
                        {errors.branch && <span classname='dangerl' style={{color:'red'}}> {errors.branch}</span>}
                    </div>

                    <div>
                        <label htmlFor="graduationYear" className='labelSl'>Graduation Year</label>
                        <input type="number" min="2023" max="2028"  placeholder='Enter Graduation Year' name='graduationYear' onChange={handleInput} className='inputSl'/>
                        {errors.graduationYear && <span classname='dangerl' style={{color:'red'}}> {errors.graduationYear}</span>}
                    </div>
                    <div >
                        <label htmlFor="gender" className='labelSl'>Gender</label>
                        <select onChange={handleInput} className='inputSl' name='gender'>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                            <option value='other'>Other</option>
                        </select>
                        {errors.gender && <span className='dangerl' style={{color:'red'}}> {errors.gender}</span>}
                    </div>

                    <div>
                        <label htmlFor="email" className='labelSl'>Email</label>
                        <input type="email" placeholder='Enter Email' name='email' onChange={handleInput} className='inputSl'/>
                        {errors.email && <span className='dangerl' style={{color:'red'}}> {errors.email}</span>}
                    </div>

                    <div >
                        <label htmlFor="ten" className='labelSl'>10th Percentage</label>
                        <input type="float" min="0" max="100" placeholder='Enter 10th Percentage' name='ten' onChange={handleInput} className='inputSl'/>
                        {errors.ten && <span className='dangerl' style={{color:'red'}}> {errors.ten}</span>}
                    </div>

                    <div >
                        <label htmlFor="twel" className='labelSl'>12th Percentage</label>
                        <input type="float" min="0" max="100" placeholder='Enter 12th Percentage' name='twel' onChange={handleInput} className='inputSl'/>
                        {errors.twel && <span className='dangerl' style={{color:'red'}}> {errors.twel}</span>}
                    </div>

                    <div >
                        <label htmlFor="dropper" className='labelSl'>Dropper</label>
                        <select onChange={handleInput} className='inputSl' name='dropper'>
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                        </select>
                        {errors.dropper && <span className='dangerl' style={{color:'red'}}> {errors.dropper}</span>}
                    </div>

                    <div >
                        <label htmlFor="backlog" className='labelSl'>Any Backlog</label>
                        <select onChange={handleInput} className='inputSl' name='backlog'>
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                        </select>
                        {errors.backlog && <span className='dangerl' style={{color:'red'}}> {errors.backlog}</span>}
                    </div>

                    <div>
                        <label htmlFor="cgpa" className='labelSl'>CGPA     </label>
                        <input type="number" min="0" max="10" step="any" placeholder='Enter CGPA' name='cgpa' onChange={handleInput} className='inputSl'/>
                        {errors.cgpa && <span classname='dangerl' style={{color:'red'}}> {errors.cgpa}</span>}
                    </div>
                    
                    <div>
                        <label htmlFor="mobileNumber" className='labelSl'>Mobile Number</label>
                        <input type="tel" maxLength={10} placeholder='Enter Mobile Number' name='mobileNumber' onChange={handleInput} className='inputSl'/>
                        {errors.mobileNumber && <span classname='dangerl' style={{color:'red'}}> {errors.mobileNumber}</span>}
                    </div>

                    <div>
                        <label htmlFor="password" className='labelSl'>Password</label>
                        <input type={showPassword ? "text" : "password"} minLength={7} 
                                    title="Password must contain at least one uppercase letter, one lowercase letter, one special character, and one numeric digit." placeholder='Enter Password' name='password' onChange={handleInput} className='inputSl'/>
                                                       <FontAwesomeIcon
                                    icon={showPassword ? faEyeSlash : faEye}
                                    className="eye-icon"
                                    onClick={togglePasswordVisibility}
                                />
                        {errors.password && <span className='dangerl' style={{color:'red'}}> {errors.password}</span>}
                    </div>

                    <button type='submit' className='btnSl'>Signup</button>
                    <p></p>
                    <Link to ="/login" style={{ color: 'black', textAlign:'center' }}><p className='btnS1l'>Login</p></Link>
                </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default StudentSignup