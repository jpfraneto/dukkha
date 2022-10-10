import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dukkha · Human Evolution</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <h1>DUKKHA</h1>
          <h2>human evolution</h2>
        </div>
        <div className={styles.middleText}>
          <p>
            The aim of this place is to create transformational journeys that
            will help the transition of humanity into an awakened species.
          </p>
        </div>
        <a
          href={`https://jpfraneto.gumroad.com/l/dukkha`}
          target='_blank'
          rel='noreferrer'
          className={styles.paywallBtn}
        >
          Get the book
        </a>{' '}
        <a href='https://discord.gg/gusNPyAg' target='_blank' rel='noreferrer'>
          Join the community
        </a>
        <Link href='/manifesto'>
          <a>Manifesto</a>
        </Link>
      </div>
    </>
  );
}
