import React, { useState, useEffect } from 'react'
import classes from '../Styles/contact.module.css'
import image from '../img/monsteraRain.jpeg'
// import Navbar from '../Components/Navbar'
// import Footer from '../Components/Footer'

const Contact = () => {
    const initialValues = { email: ""}
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)


    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValues({...formValues, [name]:value})
        console.log(formValues)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

    useEffect(() => {
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {}
        const regex = (/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)
        if (!values.email){
            errors.email = "Email is required!"
        } else if(!regex.test(values.email)){
            errors.email = "Email address is not valid"
        }

        return errors;
    }
    return (
        <div>
            {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
            <div className={classes.contactForm} style={{ backgroundImage:`url(${image})`}}>
            <form className={classes.formBox} onSubmit={handleSubmit}>
                <h3 className={classes.contactTitle}>Contact Us</h3>
                <label className={classes.inputLabel}>First Name</label>
                <input 
                type="text" 
                className={classes.formSection} 
                name="firstName" 
                placeholder="Enter first name" 
                value={formValues.firstName} 
                onChange={handleChange}
                required 
                />
                <label className={classes.inputLabel}>Last Name</label>
                <input 
                type="text" 
                className={classes.formSection} 
                name="lastName" 
                placeholder="Enter last name" 
                required 
                value={formValues.lastName} 
                onChange={handleChange}
                />
                <label className={classes.inputLabel}>Email</label>
                <input 
                type="text" 
                className={classes.formSection} 
                name="email" 
                placeholder="johndoe@somewhere.com" 
                value={formValues.email} 
                onChange={handleChange}
                required 
                />
                <p className={classes.errorMessage}>{formErrors.email}</p>
                <label className={classes.inputLabel}>Message</label>
                <textarea 
                name="message" 
                className={classes.formSection} 
                placeholder="Type something" 
                cols="34" rows="4" 
                value={formValues.message} 
                onChange={handleChange}
                required 
                />
                <button className={classes.atcButton}>Send Message</button>

                </form>
                </div>
              

                </div>
                )
}


                export default Contact
