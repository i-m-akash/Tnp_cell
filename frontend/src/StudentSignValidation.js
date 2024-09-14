function StudentSignValidation(values){
    let error={}
    const rollno_pattern=/[a-zA-Z0-9]{8}$/
    const mobileNumber_pattern=/[0-9]{10}$/

    if (values.name === ""){
        error.name="Name should not be empty"
    }else {
        error.name=""
    }
    
    if (values.rollno === ""){
        error.rollno="Roll No. should not be empty"
    }
    else{
        if(!rollno_pattern.test(values.rollno)){
        error.rollno="Roll No. not in correct format"
        } else {
            error.rollno=""
        }
    }

    if (values.branch === ""){
        error.branch="Branch should not be empty"
    }
    else{
        
            error.branch=""
        
    }

    if (values.graduationYear === ""){
        error.graduationYear="Graduation Year should not be empty"
    }
    else
    {
            error.graduationYear=""
    }

    if (values.email === ""){
        error.email="Email should not be empty"
    }
    else
    {
        error.email=""
    }

    if (values.cgpa === ""){
        error.cgpa="CGPA should not be empty"
    }
    else
    {
            error.cgpa=""
    }

    if (values.mobileNumber === ""){
        error.mobileNumber="Mobile Number should not be empty"
    }
    else{
        if(!mobileNumber_pattern.test(values.mobileNumber)){
        error.mobileNumber="Mobile Number not in correct format"
        } else {
            error.mobileNumber=""
        }
    }

    if (values.password === ""){
        error.password="Password should not be empty"
    }
    else{
            error.password="" 
    }
    if (values.ten === ""){
        error.ten="This Field should not be empty"
    }else {
        error.ten=""
    }
    if (values.twel === ""){
        error.twel="This Field should not be empty"
    }else {
        error.twel=""
    }
    if (values.dropper === ""){
        error.dropper="This Field should not be empty"
    }else {
        error.dropper=""
    }
    if (values.gender === ""){
        error.gender="This Field should not be empty"
    }else {
        error.gender=""
    }

    if (values.backlog === ""){
        error.backlog="This Field should not be empty"
    }else {
        error.backlog=""
    }

    return error;
}


export default StudentSignValidation;