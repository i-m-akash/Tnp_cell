function JobValidation(values) {
    let error = {}
    if (values.salary === "") {
        error.salary = "This field should not be empty"
    }
    else {
        error.salary = ""
    }
    if (values.designation === "") {
        error.designation = "This field should not be empty"
    }
    else {
        error.designation = ""
    }
    if (values.description === "") {
        error.description = "This field  should not be empty"
    }
    else {
        error.description = ""
    }
    if (values.date === "") {
        error.date = "This field  should not be empty"
    }
    else {
        error.date = ""
    }
    if (values.cgpa === "") {
        error.cgpa = "This field  should not be empty"
    }
    else {
        error.cgpa = ""
    }
   return error
}

export default JobValidation