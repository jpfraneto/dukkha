import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/ManifestoIndex.module.css';
import { allManifestoEntries } from 'contentlayer/generated';
import Circle from '../../components/Circle';

const ManifestoIndex = () => {
  const [chosenDay, setChosenDay] = useState(null);
  const [chosenDayText, setChosenDayText] = useState(null);
  const words = allManifestoEntries.reduce((acc, val) => {
    return acc + val.words;
  }, 0);
  const changeChosenDay = num => {
    setChosenDay(num);
    const newChosenDay = allManifestoEntries.filter(x => x.index === num);
    setChosenDayText(newChosenDay[0]);
  };
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
        <title>Dukkha · Manifesto Index</title>
      </Head>{' '}
      <div className={styles.manifestoIndexContainer}>
        <p className={styles.manifestoTitleText}>
          I&apos;m writing this book every day until I get to day number 88.
          What you will find here is just the raw draft, without any kind of
          editing.
        </p>
        <br />
        <p className={styles.manifestoTitleText}>
          There have been {words} words written in this journey of deep
          exploration into myself. I&apos;m not doing this for you to read it, I
          know it is too much, I&apos;m just doing to process the unfolding that
          is happening within me.
        </p>
        <br />
        <div className={styles.circlesContainer}>
          {manifestosDays.map((x, index) => {
            return (
              <Circle
                i={x}
                key={index}
                el={x}
                changeChosenDay={changeChosenDay}
              />
            );
          })}
        </div>
        {chosenDayText && (
          <div className={styles.circlesContainer}>
            <h3>Day {chosenDay}</h3> <br />
            {chosenDayText?.body.raw.split('\n').map((x, i) => {
              if (x.length < 5) return;
              return (
                <p key={i} className={styles.paragraphElement}>
                  {x}
                </p>
              );
            })}
          </div>
        )}

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
