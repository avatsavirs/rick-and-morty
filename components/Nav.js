import Link from 'next/link';
import styles from 'styles/Nav.module.css';
import Logo from './Logo';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      {/* <Link href="/"><a under="none" className={styles.fulltitle}><h1>Rick and Morty</h1></a></Link> */}
      {/* <Link href="/"><a under="none" className={styles.shorttitle}><h1>R&M</h1></a></Link> */}
      <Link href="/">
        <a under="none"><Logo /></a>
      </Link>
      <ul>
        <li><Link href="/"><a under="white">Home</a></Link></li>
        <li><Link href="/about"><a under="white">About</a></Link></li>
      </ul>
    </nav>
  )
}
