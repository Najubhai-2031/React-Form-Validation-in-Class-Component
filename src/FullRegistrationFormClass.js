import React from 'react'

class FullRegistrationFormClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            mobile: '',
            semester: '',
            gender: '',
            message: '',
            password: '',
            cpassword: '',
            agree: '',
            errors: {}
        };
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();
        const isValid = this.formValidation();
        // console.log(this.state)
        if (isValid) {
            this.setState({
                name: '',
                email: '',
                mobile: '',
                semester: '',
                gender: '',
                message: '',
                password: '',
                cpassword: '',
                agree: '',
                errors: {}
            })
        }
    }


    formValidation() {
        const { name, email, mobile, semester, gender, message, password, cpassword, agree, } = this.state
        let isValid = true;
        const errors = {};
        var atposition = email.indexOf("@");
        var dotposition = email.lastIndexOf(".");

       

        //Name
        if (!name) {
            errors.name = "Enter Name"
            isValid = false
        }
        else if (name.length < 3 || name.length > 10) {
            errors.name = "Name Should Contain Min 3 Characters and Max 10 Characters"
            isValid = false
        }
        else if (isNaN(!name) || name < 1 || name > 10) {
            errors.name = "Name should only Contains Alphabates"
            isValid = false
        }

        // Email
        if (!email) {
            errors.email = "Enter Email"
            isValid = false
        }
        else if (atposition < 1) {
            errors.email = `Email id Must contain Atleat 1 character Before the @`
            isValid = false
        }
        else if (dotposition < atposition + 2) {
            errors.email = `There must be at least one character before and after the @`
            isValid = false
        }
        else if (dotposition + 2 >= email.length) {
            errors.email = `There must be at least two characters after . (dot)`
            isValid = false
        }

        // Mobile
        if (!mobile) {
            errors.mobile = "Enter Mobile Number"
            isValid = false
        }
        else if (mobile.length > 10) {
            errors.mobile = "Mobile Number Should be Less then 10 Digits"
            isValid = false
        }
        else if (mobile.length < 10) {
            errors.mobile = "Mobile Number Should be 10 Digits"
            isValid = false
        }

        // Semester
        if (!semester) {
            errors.semester = "Select Your Semester"
            isValid = false
        }

        // Gender
        if (!gender) {
            errors.gender = "Select Your Gender"
            isValid = false
        }

        //Message
        if (!message) {
            errors.message = "Enter Messege"
            isValid = false
        }
        else if (message.length <= 20) {
            errors.message = "The Messege Must Contain at least 20 Characters"
            isValid = false
        }


        //Password
        if (!password) {
            errors.password = `Enter Password and Password must contain the following: At least One lowercase lette, One capital (uppercase) letter, One number,One Special Charecter and Minimum 8 characters`
            isValid = false
        }
        else if (password.length < 8) {
            errors.password =
                isValid = false
        }

        //Confirm Password
        if (!cpassword) {
            errors.cpassword = "Confirm Password"
            isValid = false
        }
        else if (cpassword !== password) {
            errors.cpassword = "Password Did Not Match"
            isValid = false
        }

        //Checkbox
        if (!agree) {
            errors.agree = "Please Agree Term & Conditions"
            isValid = false
        }

        this.setState({ errors })
        console.log(errors.name)
        return isValid;
    }

    render() {
        const { name, email, mobile, semester, message, password, cpassword, errors } = this.state
        return (
            <React.Fragment>
                <h1>Registration Form With React Validation</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    {
                        Object.keys(errors).map(key => {
                            return <div style={{ color: 'red' }} key={key}>{errors[key]}</div>
                        })
                    }

                    Name:<input type='text' name='name' value={name} onChange={this.onChange.bind(this)} /><br /><br />
                    Email: <input type='email' name='email' value={email} onChange={this.onChange.bind(this)} /><br /><br />
                    Mobile:<input type='number' name='mobile' value={mobile} onChange={this.onChange.bind(this)} /><br /><br />
                    Semester:<select name='semester' value={semester} onChange={this.onChange.bind(this)}>
                        <option defaultValue={1}>-select option-</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select><br /><br />
                    Gender: &nbsp;<span>Male<input type='radio' name='gender' value='Male' onChange={this.onChange.bind(this)} /></span>
                    <span>Female<input type='radio' name='gender' value='Female' onChange={this.onChange.bind(this)} /></span><br /><br />


                    Message:<textarea name='message' onChange={this.onChange.bind(this)} value={message} /><br /><br />
                    Password:<input type='password' name='password' onChange={this.onChange.bind(this)} value={password} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" /><br /><br />
                    Confirm Password:<input type='password' name='cpassword' onChange={this.onChange.bind(this)} value={cpassword} /><br /><br />
                    I agree Term & Condition <input type='checkbox' name='agree' onChange={this.onChange.bind(this)} /><br /><br />
                    <button>Submit</button>
                </form>
            </React.Fragment>
        );
    }
}

export default FullRegistrationFormClass;