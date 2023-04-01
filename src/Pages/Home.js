import React from 'react'
import classes from '../Styles/home.module.css'
// import logo from '.../public/images/'

const Home = () => {
  return (
    <div>
      <div className={classes.slideshow}>
        <figure>
            <img src="images/forest.webp" alt="arial view of forest at dawn" />
            <img src="images/nursery-worker.webp" alt="nursery worker clipping plant" />
            <img src="images/watering.jpeg" alt="woman watering houseplants" />
            
            </figure>
        </div>
   
    
    <h2 className={classes.about}>About Us</h2>
    

  <div className={classes.centerGridContainer}>
  <div className={classes.gridContainer}>
    <section className={classes.gridCard}>
        <img className={classes.cardImage} src="images/indoor-plants.jpeg" alt="group of indoor plants" />
        <h2 className={classes.contentTitle}>What is Peace of Paradise?</h2>
        <p className={classes.content}>Peace of Paradise is a plant nursery and retailer that provides ethically sourced indoor plants straight to your door. We also
            believe in rehabilitating unwanted plants therefore reducing waste and our carbon footprint on the planet.
        </p>
    </section>
    <section className={classes.gridCard}>
        <img className={classes.cardImage} src="images/trees.webp" alt="trees in a forest" />
        <h2 className={classes.contentTitle}>Why Peace of Paradise?</h2>
        <p className={classes.content}>At Peace of Paradise we believe in sustainable business practices. Plants play a crucial role in their ecosystem and 
           completely uprooting them is unethical and environmentally unsafe. Each of our products are propogations sourced from domesticated plants to provide 
           customers not only with a piece of paradise, but also peace of mind.</p>
    </section>
    <section className={classes.gridCard}>
        <img className={classes.cardImage} src="images/plant-person.webp" alt="person watering houseplants" />
        <h2 className={classes.contentTitle}>How does it work?</h2>
        <p className={classes.content}>Depending on conditions in your home, you choose the indoor plant that best suits you. Once your order is placed, we send your 
           new addition freshly watered and meticulously packaged to prevent shipment damages.</p>
    </section>
    <section className={classes.gridCard}>
        <img className={classes.cardImage} src="images/rehab.jpeg" alt="seedlings being watered" />
        <h2 className={classes.contentTitle}>Do you allow returns?</h2>
        <p className={classes.content}>If for whatever reason you are unhappy with your product, send us a picture of how it arrived and your reason for return and if 
            eligible, you will recieve a full refund. Peace of Paradise will then rehabilitate the product until fit to adopt again.</p>
    </section>
    
</div>
</div>

    </div>
  )
}

export default Home
