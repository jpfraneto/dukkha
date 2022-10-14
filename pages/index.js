import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dukkha DAO</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <h1>DUKKHA</h1>
          <h2>· the end of depression ·</h2>
        </div>
        <div className={styles.middleText}>
          <p>
            The aim of this place is to create collective experiences that will
            take you out of the maze of your own mind.
          </p>
        </div>{' '}
        <Link href='/transformational-journeys'>
          <a>Transformational Journeys</a>
        </Link>
        <div>
          {' '}
          <Link href='/manifesto'>
            <a>Manifesto </a>
          </Link>{' '}
          ({' '}
          <a
            href={`https://jpfraneto.gumroad.com/l/dukkha`}
            target='_blank'
            rel='noreferrer'
            className={styles.paywallBtn}
          >
            Get the book
          </a>{' '}
          |{' '}
          <a
            href={`https://github.com/jpfraneto/dukkha/tree/main/data/manifesto`}
            target='_blank'
            rel='noreferrer'
            className={styles.paywallBtn}
          >
            Edit on Github
          </a>
          )
        </div>
      </div>
    </>
  );
}
