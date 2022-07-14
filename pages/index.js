import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
// import CustomNavbar from './CustomNavbar';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <CustomNavbar /> */}
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Hunting Coder</a>
        </h1>

        <div className="imgdiv">
          <img src="./prog.webp" width={300} height={200} />
        </div>

        <p className={styles.description}>
          Learn Anything About Any Code{" "}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className={styles.grid}>
          <Link href="./routerdemo/javascript_content">
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>JavaScript &rarr;</h2>
              <p>this blog we are learning about new things </p>
            </a>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>EcmaScript &rarr;</h2>
            <p>this blog we are learning about new things </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Reactjs &rarr;</h2>
            <p>this blog we are learning about new things </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Nextjs &rarr;</h2>
            <p>this blog we are learning about new things </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}