const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const salt = 10;


const app = express();
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
}));
app.use(cookieParser());

const port = 8081;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "placement"
})

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  const token1 = req.cookies.token1;
  if (!token) {
    return res.json({ Error: "You are not authenticated" });
  }
  else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ Error: "token is not okey" });
      }
      else {
        req.email = decoded.email;
       
        jwt.verify(token1, "jwt-secret-key1", (err1, decoded1) => {
          if (err1) {
            return res.json({ Error: "token is not okey" });
          }
          else {
            req.role = decoded1.role;
            next();
          }
  
      });
      }
    })
  }
};

app.post('/signup', (req, res) => {
  const sql = "INSERT INTO company(role, name, address, email, contactNumber, password) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [
    req.body.role,
    req.body.name,
    req.body.address,
    req.body.email,
    req.body.contactNumber,
    req.body.password // Store the plaintext password directly
  ];
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json({ Error: "Inserting data Error in server" });
    }
    else {
      const email = req.body.email;
      const token = jwt.sign({ email }, "jwt-secret-key", { expiresIn: '1d' });
      res.cookie('token', token);

      const role = req.body.role;
      const token1 = jwt.sign({ role }, "jwt-secret-key1", { expiresIn: '1d' });
      res.cookie('token1', token1);

      return res.json({ Status: "Success" });
    }
  });
});


app.post('/studentsignup', (req, res) => {
  const sql ="INSERT INTO student(role,name,rollno,branch,graduationYear,email,ten,twel,dropper,backlog,gender,cgpa,mobileNumber,password) VALUES (?)";
    const values =[
      req.body.role,
        req.body.name,
        req.body.rollno,
        req.body.branch,
        req.body.graduationYear,
        req.body.email,
        req.body.ten,
        req.body.twel,
        req.body.dropper,
        req.body.backlog,
        req.body.gender,
        req.body.cgpa,
        req.body.mobileNumber,
        req.body.password
    ]
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json({ Error: "Inserting data Error in server" });
    }
    else {
      const email = req.body.email;
      const token = jwt.sign({ email }, "jwt-secret-key", { expiresIn: '1d' });
      res.cookie('token', token);
    
      const role = req.body.role;
      const token1 = jwt.sign({ role }, "jwt-secret-key1", { expiresIn: '1d' });
      res.cookie('token1', token1);

      return res.json({ Status: "Success" });
    }
  })
})


app.post('/adminsignup', (req, res) => {
  const sql = "INSERT INTO admin(role,name,instituteid,email,mobileNumber,password) VALUES (?)";
  const values = [
    req.body.role,
    req.body.name,
    req.body.instituteid,
    req.body.email,
    req.body.mobileNumber,
    req.body.password
  ]
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json({ Error: "Inserting data Error in server" });
    }
    else {
      const email = req.body.email;
      const token = jwt.sign({ email }, "jwt-secret-key", { expiresIn: '1d' });
      res.cookie('token', token);

     
      const role = req.body.role;
      const token1 = jwt.sign({ role }, "jwt-secret-key1", { expiresIn: '1d' });
      res.cookie('token1', token1);

      return res.json({ Status: "Success" });
    }
  })
})



app.post('/deletecompany', (req, res) => {
  const { roll } = req.body;

  // Check if roll number is provided
  if (!roll) {
    return res.status(400).json({ error: 'Company Name is required' });
  }

  // Perform deletion query
  db.query('DELETE FROM company WHERE name = ?', [roll], (err, result) => {
    if (err) {
      console.error("Error deleting company:", err);
      return res.status(500).json({ error: "Error deleting company in server" });
    }
    // Check if any rows were affected
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Company not found" });
    }
    // Send success response
    return res.json({ status: "Success" });
  });
});

app.post('/deletestudent', (req, res) => {
  const { roll } = req.body;

  // Check if roll number is provided
  if (!roll) {
    return res.status(400).json({ error: 'Roll number is required' });
  }

  // Perform deletion query
  db.query('DELETE FROM student WHERE rollno = ?', [roll], (err, result) => {
    if (err) {
      console.error("Error deleting student:", err);
      return res.status(500).json({ error: "Error deleting student in server" });
    }
    // Check if any rows were affected
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Student not found" });
    }
    // Send success response
    return res.json({ status: "Success" });
  });
});


app.post('/deleteadmin', (req, res) => {
  const { roll } = req.body;

  // Check if roll number is provided
  if (!roll) {
    return res.status(400).json({ error: 'ID is required' });
  }

  // Perform deletion query
  db.query('DELETE FROM admin WHERE instituteid = ?', [roll], (err, result) => {
    if (err) {
      console.error("Error deleting admin:", err);
      return res.status(500).json({ error: "Error deleting admin in server" });
    }
    // Check if any rows were affected
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Admin not found" });
    }
    // Send success response
    return res.json({ status: "Success" });
  });
});




app.post('/login', (req, res) => {
  const role = req.body.role;
  let sql;
  if(role == 'recruiter' ) {
    sql = 'SELECT * FROM  company WHERE email = ?';
  } else if (role == 'student') {
    sql = 'SELECT * FROM student WHERE email = ?';
  } else if (role == 'admin') {
    sql = 'SELECT * FROM admin WHERE email = ?';
  } else {
    return res.json({ Error: "Invalid role" });
  }
  db.query(sql, [req.body.email], (err, data) => {
    if (err) {
      console.log(sql);
            return res.json({ Error: "Login error in server" });
          }
          else {
            if (data.length > 0) {
              if (req.body.password == data[0].password) { // Compare plaintext passwords
                const email = data[0].email;
                const token = jwt.sign({ email }, "jwt-secret-key", { expiresIn: '1d' });
                res.cookie('token', token);
      
                const role = data[0].role;
                const token1 = jwt.sign({ role }, "jwt-secret-key1", { expiresIn: '1d' });
                res.cookie('token1', token1);
      
                return res.json({ Status: "Success" });
              } else {
                return res.json({ Error: "Password not matched" });
              }
            } else {
              return res.json({ Error: "No email existed" });
            }
          }
  });
});





app.get('/profile', verifyUser, (req, res) => {
  const role =req.role;
  const email = req.email;
  let sql; 
  
  if (role == 'student') {
    sql = 'SELECT * FROM student WHERE email = ?';
  } else if (role == 'recruiter') {
    sql = 'SELECT * FROM company WHERE email = ?';
  } else if (role == 'admin') {
    sql = 'SELECT * FROM admin WHERE email = ?';
  } else {
    return res.json({ Error: "Invalid role" });
  }
  
  db.query(sql, email, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Internal Server Error');
    } else {
      if (results.length > 0) {
        res.status(200).json(results[0]);
      } else {
        res.status(404).send('User not found');
      }
    }
  });
  
});

app.get('/', verifyUser, (req, res) => {
  return res.json({ Status: "Success", email: req.email ,role: req.role});
})

app.get('/opening',(req,res)=>{
  const sql = "SELECT company.name, job.designation, job.description, job.cgpa, job.salary, job.date FROM job LEFT OUTER JOIN company ON job.email=company.email";
  db.query(sql,(err, data)=>{
      if(err){
          return res.json(err);
      }else{
          return res.json(data); 
      }
     
  })
})

app.post('/uploadJob',verifyUser,(req,res)=>{
  const email =req.email;
  const sql ="INSERT INTO job(designation,description,cgpa,salary,date,email) VALUES (?)";
  const values =[
      req.body.designation,
      req.body.description,
      req.body.cgpa,
      req.body.salary,
      req.body.date,
      email
      
  ]
  db.query(sql, [values], (err, data)=>{
      if(err){
          return res.json("Error");
      }
      return res.json(data);
  })
})

app.get('/uploadedJob', verifyUser,(req,res)=>{
  const email =req.email;
  const sql = 'SELECT * FROM job WHERE email = ?';
  db.query(sql,email,(err, data)=>{
      if(err){
          return res.json(err);
      }else{
          return res.json(data); 
      }
     
  })
})

app.get('/cStudentInfo',(req,res)=>{
  const sql = "SELECT * FROM student ";
  db.query(sql,(err, data)=>{
      if(err){
          return res.json(err);
      }else{
          return res.json(data); 
      }
     
  })
})
app.get('/company',(req,res)=>{
  const sql = "SELECT * FROM company ";
  db.query(sql,(err, data)=>{
      if(err){
          return res.json(err);
      }else{
          return res.json(data); 
      }
     
  })
})
app.get('/admin',(req,res)=>{
  const sql = "SELECT * FROM admin ";
  db.query(sql,(err, data)=>{
      if(err){
          return res.json(err);
      }else{
          return res.json(data); 
      }
     
  })
})
app.get('/logout', (req, res) => {
  res.clearCookie('token');
  return res.json({ Status: 'Success' })
})

// Close MySQL connection on process exit
process.on('exit', () => {
  connection.end();
  console.log('MySQL connection closed');
});

app.listen(port, () => {
  console.log("listening...");
})