import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../Styles/navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faCartShopping, faAddressBook, faLeaf } from "@fortawesome/free-solid-svg-icons"


const Navbar = () => {
  return (
    <div>
       
       <h1 className={classes.businessTitle}><i className="fa-solid fa-leaf"><FontAwesomeIcon icon={faLeaf} /></i>Peace of Paradise</h1>

        <nav>
        <FontAwesomeIcon icon={faHouse} className={classes.rowIcons}/><Link to="/" className={classes.icon}><i className="fa-sharp fa-solid fa-house"></i>Home</Link>
        <FontAwesomeIcon icon={faCartShopping} className={classes.rowIcons}/><Link to="/products" className={classes.icon}><i className="fa-solid fa-cart-shopping"></i>Products</Link>
        <FontAwesomeIcon icon={faAddressBook} className={classes.rowIcons}/><Link to="/contact" className={classes.icon}><i className="fa-solid fa-address-book"></i>Contact</Link>
        </nav>
    </div>
  )
}

export default Navbar
