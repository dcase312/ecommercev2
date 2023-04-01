import React from 'react'
import classes from '../Styles/contact.module.css'
import image from '../img/monsteraRain.jpeg'
// import Navbar from '../Components/Navbar'
// import Footer from '../Components/Footer'

const Contact = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <div className={classes.contactForm} style={{ backgroundImage:`url(${image})`}}>
            <form className={classes.formBox}>
                <h3 className={classes.contactTitle}>Contact Us</h3>
                <label className={classes.inputLabel}>First Name</label>
                <input type="text" className={classes.formSection} name="firstName" placeholder="Enter first name" required />
                <label className={classes.inputLabel}>Last Name</label>
                <input type="text" className={classes.formSection} name="lastName" placeholder="Enter last name" required />
                    <label className={classes.inputLabel}>Email</label>
                    <input type="text" className={classes.formSection} name="email" placeholder="johndoe@somewhere.com" required />
                        <label className={classes.inputLabel}>Message</label>
                        <textarea name="message" className={classes.formSection} placeholder="Type something" cols="34" rows="4" required></textarea>
                        <button className={classes.atcButton}>Send Message</button>

                    </form>
                    </div>
              

                </div>
                )
}


                export default Contact
