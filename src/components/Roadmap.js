import React from 'react';
import styles from './Roadmap.module.css';

const RoadmapItem = ({ stage, title, content, isLast }) => (
  <div className={styles.roadmapItem}>
    <div className={styles.stageContainer}>
      <span className={styles.stage}>{stage}</span>
      {!isLast && <div className={styles.connector}></div>}
    </div>
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Roadmap = () => {
  const roadmapData = [
    {
      stage: "I",
      title: "Mediterranean Sea",
      content: [
        "Launch our website publicly",
        "Token mint, program deployment and initialization",
      ]
    },
    {
      stage: "II",
      title: "Adriatic Sea",
      content: [
        "Token Sales Marketing",
        "Official PRE-SALE launch on Pinksale",
      ]
    },
    {
      stage: "III",
      title: "Black Sea",
      content: [
        "$SuiSeidon initial token burn",
        "Initial listing on major Centralised Exchanges (CEXs)",
      ]
    },
    {
      stage: "IV",
      title: "Red Sea",
      content: [
        "Initiation of $SuiSeidon weekly token buyback and burn",
        "Ongoing updates and improvements to maintain momentum and relevance",
      ]
    },
    {
      stage: "V",
      title: "Arabian Sea",
      content: [
        "Development of a meme-themed cult NFT collection",
        "Continued partnerships and collaborations to enhance ecosystem growth",
      ]
    },
    {
      stage: "VI",
      title: "Persian Gulf",
      content: [
        "Achieving Immortality",
        "Continued partnerships and collaborations to enhance ecosystem growth",
      ]
    },
    {
      stage: "VII",
      title: "Caspian Sea",
      content: [
        "Achieving Immortality",
        "Continued partnerships and collaborations to enhance ecosystem growth",
      ]
    }
  ];

  return (
    <section id="roadmap" className={styles.roadmap}>
      <div className="container">
        <h2 className={`section-title ${styles.roadmapTitle}`}>Map the 7 Seas (RoadMap)</h2>
        <div className={styles.roadmapContainer}>
          {roadmapData.map((item, index) => (
            <RoadmapItem key={index} {...item} isLast={index === roadmapData.length - 1} />
          ))}
        </div>
        <p className={styles.note}>
          <strong>Note:</strong> Our floating roadmap is flexible to ensure agility and responsiveness to industry, technological, and community needs. As many of our existing and future features stem from community requests, please understand that our roadmap, particularly for items beyond imminent release, is subject to change.
        </p>
      </div>
    </section>
  );
};

export default Roadmap;