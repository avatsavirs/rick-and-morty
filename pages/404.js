import Head from 'next/head';
import Link from 'next/link';
import styles from 'styles/404.module.css';

export default function PageNotFound() {
  return (
    <>
      <Head><title> 404 | Rick and Morty</title> </Head>
      <div className={styles.container}>
        <h1> Oops... </h1>
        <h1> That page could not be found </h1>
        <Link href="/">
          <a><b>Go back Home</b></a>
        </Link>
      </div>
    </>
  )
}
