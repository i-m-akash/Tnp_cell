function SignValidation(values){
    let error={}
    //const password_pattern=/^(?=.*d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    const contactNumber_pattern=/[0-9]{10}$/

    if (values.name === ""){
        error.name="Name should not be empty"
    }else {
        error.name=""
    }

    if (values.address === ""){
        error.address="Address should not be empty"
    }else {
        error.address=""
    }
    
    if (values.contactNumber === ""){
        error.contactNumber="Contact Number should not be empty"
    }
    else{
        if(!contactNumber_pattern.test(values.contactNumber)){
        error.contactNumber="Contact Number not in correct format"
        } else {
            error.contactNumber=""
        }
    }

    if (values.email === ""){
        error.email="Email should not be empty"
    }
    else
    {
            error.email=""
    }

    if (values.password === ""){
        error.password="Password should not be empty"
    }
    else{
        /*if(!password_pattern.test(values.password)){
        error.password="Password not in correct format"
        } else {*/
            error.password=""
        //}
    }
    return error;
}

export default SignValidation;