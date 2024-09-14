
import './App.css';
import Home from './Home';
import Signup from './signup.js';
import Login from './login.js';
import Role from './Role.js';
import AdminSignup from './AdminSignup.js';
import StudentSignup from './StudentSignup.js';
import StudentHome from './StudentHome.js';
import Student from './admin/Student.js';
import AOpening from './admin/AOpening';
import Admin from './admin/Admin';
import Opening from './student/Opening.js';
import CStudentInfo from './company/CStudentInfo';
import UploadJob from './company/UploadJob';
import UploadedJob from './company/UploadedJob';
import AddStudent from './admin/AddStudent';
import AddAdmin from './admin/AddAdmin';
import AddCompany from './admin/AddCompany'
import Company from './admin/company.js';
import DeleteStudent from './admin/DeleteStudent.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DeleteCompany from './admin/DeleteCompany.js';
import DeleteAdmin from './admin/DeleteAdmin.js';
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/role' element={<Role />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/adminSignup' element={<AdminSignup />} />
      <Route path='/studentSignup' element={<StudentSignup />} />
      <Route path='/studentHome' element={<StudentHome />} />
      <Route path='/student' element={<Student />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/aopening' element={<AOpening />} />
      <Route path='/opening' element={<Opening />} />
      <Route path='/cstudentinfo' element={<CStudentInfo />} />
      <Route path='/uploadjob' element={<UploadJob />} />
      <Route path='/uploadedjob' element={<UploadedJob />} />
      <Route path='/addstudent' element={<AddStudent />} />
      <Route path='/addadmin' element={<AddAdmin />} />
      <Route path='/addcompany' element={<AddCompany />} />
      <Route path='/company' element={<Company />} />
      <Route path='/deletestudent' element={<DeleteStudent />} />
      <Route path='/deletecompany' element={<DeleteCompany />} />
      <Route path='/deleteadmin' element={<DeleteAdmin />} />
    
      </Routes>
      </Router>
  );
}

export default App;
