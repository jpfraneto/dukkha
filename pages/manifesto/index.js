import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/ManifestoIndex.module.css';
import { allManifestoEntries } from 'contentlayer/generated';

const ManifestoIndex = () => {
  const manifestosDays = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
  ];
  console.log(
    'here',
    allManifestoEntries.reduce((acc, val) => acc + val.words, 0)
  );
  return (
    <>
      <Head>
        <title>Dukkha · Manifesto Index</title>
      </Head>{' '}
      <div className={styles.manifestoIndexContainer}>
        <p className={styles.manifestoTitleText}>
          I&apos;m writing this book every day until I get to day number 88.
          What you will find here is just the raw draft, without any kind of
          editing. Each of these writings is{' '}
          <a
            href='https://github.com/jpfraneto/dukkha/tree/main/data/manifesto'
            target='_blank'
            rel='noreferrer'
            style={{ color: 'lightblue' }}
          >
            open source
          </a>
          , waiting for you to add your sauce to it.
        </p>
        <br />
        <div className={styles.daysList}>
          {manifestosDays.map((x, i) => (
            <div key={i}>
              <Link href={`/manifesto/day-${x}`}>
                <a>{`Day ${x}`}</a>
              </Link>
            </div>
          ))}
        </div>

        <br />
        <hr></hr>
        <Link href='/'>
          <a>Dukkha</a>
        </Link>
      </div>
    </>
  );
};

export default ManifestoIndex;
