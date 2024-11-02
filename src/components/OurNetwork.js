import React from 'react';
import styles from './OurNetwork.module.css';

const NetworkItem = ({ name, image, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className={styles.networkItem}>
    <div className={styles.networkImageWrapper}>
      <img src={image} alt={name} className={styles.networkImage} />
    </div>
    <span className={styles.networkName}>{name}</span>
  </a>
);

const SocialLink = ({ name, image, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
    <img src={image} alt={name} className={styles.socialIcon} />
  </a>
);

const OurNetwork = () => {
  const networks = [
    { name: "CoinMarketCap", image: "/images/coinmarketcap.png", link: "https://coinmarketcap.com/" },
    { name: "Coin Gecko", image: "/images/coingecko.webp", link: "https://www.coingecko.com/" },
    { name: "Radium Swap", image: "/images/raydium.png", link: "https://raydium.io/swap/" },
    { name: "PinkSale", image: "/images/pinksale.png", link: "https://www.pinksale.finance/" },
    { name: "Solana", image: "/images/solana.png", link: "https://solana.com/" },
    { name: "Dex Screener", image: "/images/Dex_Screener.png", link: "https://dexscreener.com/" }
  ];

  const socialLinks = [
    // { name: "Discord", image: "/images/discord.png", link: "https://discord.com" },
    { name: "Telegram", image: "/images/telegram.png", link: "https://telegram.org" },
    { name: "X", image: "/images/x.png", link: "https://x.com" }
  ];

  return (
    <section id="network" className={styles.network}>
      <div className="container">
        <h2 className={`section-title ${styles.networkTitle}`}>SuiSeidon Network</h2>
        <div className={styles.networkGrid}>
          {networks.map((item, index) => (
            <NetworkItem key={index} {...item} />
          ))}
        </div>
        <div className={styles.community}>
          <h3 className={styles.subtitle}>JOIN THE COMMUNITY</h3>
          <p className={styles.description}>
            Follow us on our Official Channels to never miss important updates and announcements!
          </p>
          <div className={styles.socialLinks}>
            {socialLinks.map((item, index) => (
              <SocialLink key={index} {...item} />
            ))}
          </div>
        </div>
        {/* <p className={styles.disclaimer}>
          <strong>Disclaimer:</strong> Information on this site is for entertainment purposes only and does not constitute financial or investment advice. Always conduct your own research and consult a financial advisor.
        </p> */}
      </div>
    </section>
  );
};

export default OurNetwork;