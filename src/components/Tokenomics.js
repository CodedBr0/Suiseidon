import React from 'react';
import styles from './Tokenomics.module.css';

const TokenAllocation = () => (
  <div className={styles.tableContainer}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>SEGMENT</th>
          <th>TOKEN</th>
          <th>PERCENTAGE</th>
          <th>VESTING</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Public Sale</td>
          <td>600,000,000</td>
          <td>40%</td>
          <td>No Vesting</td>
        </tr>
        <tr>
          <td>Liquidity</td>
          <td>300,000,000</td>
          <td>20%</td>
          <td>Locked and Burned forever</td>
        </tr>
        <tr>
          <td>SuiSeidon Lock/Stake Reward</td>
          <td>300,000,000</td>
          <td>20%</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Marketing, CEX and Development</td>
          <td>300,000,000</td>
          <td>20%</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Tokenomics = () => {
  return (
    <section id="tokenomics" className={styles.tokenomics}>
      <div className="container">
        <h2 className={`section-title ${styles.tokenomicsTitle}`}>TOKEN ECONOMICS</h2>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <span className={styles.label}>Token Name:</span>
            <span className={styles.value}>SuiSeidon</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>Token Symbol:</span>
            <span className={styles.value}>SDN</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>Total Supply:</span>
            <span className={styles.value}>100,000,000,000</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>Token Decimal:</span>
            <span className={styles.value}>6</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>Network:</span>
            <span className={styles.value}>Sui</span>
          </div>
        </div>
        <h3 className={styles.subtitle}>TOKEN ALLOCATION</h3>
        <TokenAllocation />
      </div>
    </section>
  );
};

export default Tokenomics;