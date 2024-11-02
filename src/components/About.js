// File: src/components/About.js
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className={`section-title ${styles.aboutTitle}`}>SuiSeidon - The Sui Sea God</h2>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.description}>
              SuiSeidon is a community-driven meme project on Sui, featuring a deflationary token model with a 2% buy/sell tax. 
              This tax will be used solely for the subsequent buyback and burning of the $SuiSeidon token, which will explicitly lead to a reduction in token circulation over time. 
              SuiSeidon will prioritize community engagement through regular events. Leveraging the Sui blockchain, the project will ensure transparency and accountability.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img src="/images/about_chart.png" alt="About Chart" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;