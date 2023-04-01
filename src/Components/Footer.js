import React from 'react'
import classes from '../Styles/footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTiktok, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faLeaf } from "@fortawesome/free-solid-svg-icons"


const Footer = () => {
  return (
    <div>
      <footer>
    
    <section className={classes.newsletterSubscription}>
        <h2 className={classes.newsletterTitle}><i class="fa-solid fa-leaf"><FontAwesomeIcon icon={faLeaf} /></i>Peace of Paradise News</h2>
        <h3 className={classes.newsletterDescription}>Get the deets on everything promotions, sales, and new products!</h3>
        <input type="text" className={classes.subscribeField} name="Subscribe" placeholder="Enter email" required />
        <button className={classes.subscribeButton}>Subscribe</button>
    </section>
    <section className={classes.footerlinks}>
        <h3 className={classes.newsletterDescription}>Follow us on socials!</h3>
        <a href="https://www.instagram.com" target="_blank" aria-label="Company instagram page"><FontAwesomeIcon icon={faInstagram} className={classes.icon} /><i class="fa-brands fa-instagram fa-2x"></i></a>
        <a href="https://www.tiktok.com" target="_blank" aria-label="Company tiktok page"><FontAwesomeIcon icon={faTiktok} className={classes.icon}/><i class="fa-brands fa-tiktok fa-2x"></i></a>
        <a href="https://www.facebook.com" target="_blank" aria-label="Company facebook page"><FontAwesomeIcon icon={faFacebook} className={classes.icon}/><i class="fa-brands fa-facebook fa-2x"></i></a>
        <a href="https://www.linkedin.com" target="_blank" aria-label="Company linkedin page"><FontAwesomeIcon icon={faLinkedin} className={classes.icon}/><i class="fa-brands fa-linkedin fa-2x"></i></a>
      </section>
    
</footer>
    </div>
  )
}

export default Footer
