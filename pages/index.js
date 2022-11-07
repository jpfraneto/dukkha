import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dukkha</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <h1>DUKKHA</h1>
          <h2>· the only way in is through ·</h2>
        </div>
        <div className={styles.middleText}>
          <p>
            I write so that I can better understand what is going on inside me.
          </p>
          <p>I write to stop trying to make sense.</p>
          <p>I write so that I can embody who I am.</p>
          <p>I write so that I can help others.</p>
          <p>I write to be more of myself.</p>
          <p>I write to share my truth.</p>
        </div>{' '}
        <div className={styles.bookLinks}>
          {' '}
          <Link href='/manifesto'>
            <a>Read</a>
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
