import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

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
          Im looking for funding for this project. I just need 10k usd to
          survive for the next 6 months and I will create something amazing that
          will help a lot of people. If you are interested in supporting this
          journey, please reach me out at jpfraneto@gmail.com
        </small>
      </div>
    </>
  );
}
