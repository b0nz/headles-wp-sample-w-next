import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to our demo blog!</h1>
        <ul>
          <li>
            <Link href="/blog">
              <a>blog articles page</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  )
}
