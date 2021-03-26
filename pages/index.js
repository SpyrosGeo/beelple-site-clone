import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <div className={styles.sidebar}>
        <ul>
          <li><Link href="/weatherapp"><a> Weather</a></Link></li>
          <li><Link href="/covid"><a>Covid</a></Link></li>
          <li><Link href="/weatherapp"><a> Weather App</a></Link></li>
        
        </ul>
      </div>
      <div>

        <video type="video/mp4" autoPlay muted loop className={styles.backgroundvideo} src="/bg2.mp4"></video>
      </div>
    </div>
  )
}
