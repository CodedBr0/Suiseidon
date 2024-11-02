import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import About from '../components/About'
import Tokenomics from '../components/Tokenomics'
import Roadmap from '../components/Roadmap'
import OurNetwork from '../components/OurNetwork'
import Footer from '../components/Footer'
import dynamic from 'next/dynamic'
import styles from './page.module.css'

const Bubbles = dynamic(() => import('../components/Bubbles'), { ssr: false })
const ScrollEffects = dynamic(() => import('../components/ScrollEffects'), { ssr: false })

export default function Home() {
  return (
    <div className={styles.container}>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="turbulence">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 0.005" numOctaves="2" seed="2" />
          <feDisplacementMap in="SourceGraphic" scale="10" />
        </filter>
      </svg>
      <Bubbles />
      <ScrollEffects />
      <Navbar />
      <main className={styles.main}>
        <Banner />
        <About />
        <Tokenomics />
        <Roadmap />
        <OurNetwork />
      </main>
      <Footer />
    </div>
  )
}