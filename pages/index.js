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
        <h1>DUKKHA</h1>
        <h2>human evolution</h2>
        <p>This universe is coming into being...</p>
        <small>
          I&apos;m looking for funding for this project. I just need 10k usd to
          survive for the next 6 months and I will create something amazing that
          will help a lot of people. If you are interested in supporting this
          journey, please reach me out at jpfraneto@gmail.com with the subject
          [DUKKHA]@yourrequestedusernameforthisproject. Thank you for being who
          you are.
        </small>

        <Link href='/manifesto'>
          <h2>Manifesto</h2>
        </Link>
      </div>
    </>
  );
}
