import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/Artists.module.css';
import { allManifestoEntries } from 'contentlayer/generated';

const Artists = () => {
  const [chosenNumber, setChosenNumber] = useState(null);
  const words = allManifestoEntries.reduce((acc, val) => {
    return acc + val.words;
  }, 0);
  const manifestosDays = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
  ];

  return (
    <>
      <Head>
        <title>Dukkha · Artists</title>
      </Head>{' '}
      <div className={styles.manifestoIndexContainer}>
        <br />
        <div className={styles.daysList}>
          {manifestosDays.map((x, i) => (
            <div
              onClick={() => setChosenNumber(x)}
              className={styles.dayCircle}
              key={i}
            >
              {x}
            </div>
          ))}
        </div>
        <div>
          <h1>{chosenNumber}</h1>
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

export default Artists;
