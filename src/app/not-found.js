'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Bubbles from '../components/Bubbles';
import styles from './not-found.module.css';

export default function NotFound() {
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    const images = ['404-1.png', '404-2.png', '404-3.png', '404-4.png', '404-5.png'];
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  return (
    <div className={styles.container}>
      <Bubbles />
      <Navbar />
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>UNDER MAINTENANCE !!!</h1>
            <p className={styles.message}>
              Hello Seafarer,<br />
              This region of Suiseidon&apos;s domain is currently being maintained or under construction.<br />
              Please check back later.
            </p>
            <Link href="/" className={styles.backButton}>
              Back to Main Page
            </Link>
          </div>
          {randomImage && (
            <div className={styles.imageContainer}>
              <Image 
                src={`/images/${randomImage}`} 
                alt="404 Image" 
                width={400} 
                height={400} 
                className={styles.image}
              />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}