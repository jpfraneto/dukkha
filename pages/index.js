import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { allManifestoEntries } from 'contentlayer/generated';

export default function Home() {
  const [displayedRandomParagraph, setDisplayedRandomParagraph] =
    useState(null);
  const [displayedRandomEntryNumber, setDisplayedRandomEntryNumber] =
    useState(null);
  const getRandomParagraph = () => {
    const totalEntries = allManifestoEntries.length;
    const randomNumber = Math.floor(totalEntries * Math.random());
    const randomEntry = allManifestoEntries[randomNumber];
    const randomEntryBody = randomEntry.body.raw.split('\n');
    setDisplayedRandomEntryNumber(randomEntry.index);
    const newRandomNumber = Math.floor(randomEntryBody.length * Math.random());
    const randomParagraph = randomEntryBody[newRandomNumber];
    while (
      randomParagraph === '' ||
      randomParagraph === ' ' ||
      randomParagraph === '--'
    ) {
      newRandomNumber = Math.floor(randomEntryBody.length * Math.random());
      randomParagraph = randomEntryBody[newRandomNumber];
    }
    setDisplayedRandomParagraph(randomParagraph);
  };
  return (
    <>
      <Head>
        <title>Dukkha</title>
      </Head>
      <>
        <div className={styles.container}>
          <div className={styles.topContainer}>
            <h1>DUKKHA</h1>
            <h2>· the only way in is through ·</h2>
          </div>
          <div className={styles.middleText}>
            <p>
              All this writing has been done to clarify the idea of the project
              that I have been envisioning all my life. It is time to transform
              it into a reality, and everything that you will read here is me
              thinking about this. Transforming it as a reality in my world so
              that I can share it to yours.
            </p>
          </div>{' '}
          <div className={styles.bookLinks}>
            {' '}
            <Link href='/manifesto'>
              <a className={styles.getRandomParagraphBtn}>Read</a>
            </Link>{' '}
            <a
              className={styles.getRandomParagraphBtn}
              onClick={getRandomParagraph}
            >
              Random
            </a>
          </div>
        </div>
        {displayedRandomParagraph && (
          <div className={styles.randomParagraphContainer}>
            <h2>
              This is from{' '}
              <Link href={`/manifesto/day-${displayedRandomEntryNumber}`}>
                <a className={styles.dayLinkBtn}>
                  day {displayedRandomEntryNumber}
                </a>
              </Link>
            </h2>
            <p>{displayedRandomParagraph}</p>
          </div>
        )}
      </>
    </>
  );
}
