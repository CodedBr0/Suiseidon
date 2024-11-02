'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from './Bubbles.module.css';

const Bubble = ({ size, position, speed }) => {
  const [pos, setPos] = useState(position);

  useEffect(() => {
    const animateBubble = () => {
      setPos(prevPos => ({
        x: prevPos.x + Math.sin(prevPos.y * 0.1) * 0.2, // Slight horizontal movement
        y: prevPos.y - speed
      }));
    };

    const intervalId = setInterval(animateBubble, 50);

    return () => clearInterval(intervalId);
  }, [speed]);

  return (
    <div
      className={styles.bubble}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${pos.x}%`,
        top: `${pos.y}%`,
      }}
    />
  );
};

const Bubbles = () => {
  const [bubbles, setBubbles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const createBubble = useCallback(() => {
    const size = Math.random() * 20 + 5; // Smaller bubbles
    const position = {
      x: Math.random() * 100,
      y: 110
    };
    const speed = (Math.random() * 0.3 + 0.1) * (30 / size); // Smaller bubbles move faster
    return { size, position, speed, id: Math.random() };
  }, []);

  useEffect(() => {
    const initialBubbles = Array(20).fill().map(createBubble);
    setBubbles(initialBubbles);

    const intervalId = setInterval(() => {
      setBubbles(prevBubbles => {
        const newBubbles = prevBubbles
          .filter(bubble => bubble.position.y > -10)
          .map(bubble => ({
            ...bubble,
            position: {
              x: bubble.position.x + Math.sin(bubble.position.y * 0.1) * 0.2,
              y: bubble.position.y - bubble.speed
            }
          }));

        // Always add a new bubble to keep the count constant
        newBubbles.push(createBubble());

        return newBubbles;
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, [createBubble]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    setBubbles(prevBubbles =>
      prevBubbles.map(bubble => {
        const dx = mousePos.x - bubble.position.x;
        const dy = mousePos.y - bubble.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 10) {
          const angle = Math.atan2(dy, dx);
          return {
            ...bubble,
            position: {
              x: bubble.position.x - Math.cos(angle) * 1,
              y: bubble.position.y - Math.sin(angle) * 1
            }
          };
        }
        return bubble;
      })
    );
  }, [mousePos]);

  return (
    <div className={styles.bubblesContainer}>
      {bubbles.map((bubble) => (
        <Bubble key={bubble.id} {...bubble} />
      ))}
    </div>
  );
};

export default Bubbles;