function AdminSignValidation(values) {
    let error = {}
    //const password_pattern = /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    const instituteid_pattern = /[a-zA-Z0-9]{8}$/
    const mobileNumber_pattern = /[0-9]{10}$/

    if (values.name === "") {
        error.name = "Name should not be empty"
    } else {
        error.name = ""
    }

    if (values.instituteid === "") {
        error.instituteid = "Institute ID should not be empty"
    }
    else {
        if (!instituteid_pattern.test(values.instituteid)) {
            error.instituteid = "Institute ID not in correct format"
        } else {
            error.instituteid = ""
        }
    }
    if (values.email === "") {
        error.email = "Email should not be empty"
    }
    else {
        error.email = ""
    }


    if (values.mobileNumber === "") {
        error.mobileNumber = "Mobile Number should not be empty"
    }
    else {
        if (!mobileNumber_pattern.test(values.mobileNumber)) {
            error.mobileNumber = "Mobile Number not in correct format"
        } else {
            error.mobileNumber = ""
        }
    }

    if (values.password === "") {
        error.password = "Password should not be empty"
    }
    else {
        /*if (!password_pattern.test(values.password)) {
            error.password = "Password not in correct format"
        } else {*/
            error.password = ""
        //}
    }

    return error;
}


export default AdminSignValidation;