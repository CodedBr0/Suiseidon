import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.imageContainerMobile}>
          <img src="/images/logo.png" alt="SuiSeidon Mobile" className={styles.imageMobile} />
        </div>
        <h1 className={styles.title}>SuiSeidon</h1>
        <p className={styles.description}>
          A Slumbering sea god awakens. The noise across the Sui Blockchain has roused the titan of legend to flight. 
          SuiSeidon, a community meme coin of Sui, aims to capitalize on the current market sentiment 
          with its deflationary token, once again proving why it is the greatest living dragon.
        </p>
        <div className={styles.tokenInfo}>
          <p className={styles.tokenAddress}>
            Token address: 
            <a href="/" 
               target="_blank" 
               rel="noopener noreferrer">
              4UvV46RjhL4Xvy1DeGWBHJ2EWUwzgNN2EzUumMqMVDQA
            </a>
          </p>
          <p className={styles.totalSupply}>Total Supply: 100 BILLION</p>
        </div>
        <div className={styles.buttons}>
          <a href="/" target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.primaryButton}`}>
            Get SDN
          </a>
          {/* <a href="/" target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.secondaryButton}`}>
            Airdrop Form
          </a> */}
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="/images/logo.png" alt="SuiSeidon" className={styles.image} />
      </div>
    </div>
  );
};

export default Banner;