import React from 'react';
import styles from './TransformationalJourneys.module.css';
import Link from 'next/link';

const TransformationalJourneys = () => {
  return (
    <div className={styles.container}>
      <h1>Transformational Journeys</h1>
      <p>
        Dukkha DAO is built on top of the impact that retreats have in the life
        of people that go to them, and as an answer to comes to life after you
        get back of them.
      </p>
      <p>
        There is always an aspect of integration that is needed, and a wanting
        to go back mentality.
      </p>
      <p>
        This place is an answer to that, by establishing the conditions needed
        to actually live as if life was a festival/retreat.
      </p>
      <p>
        Each TJ will bring the participants into a formal practice, a way of
        doing things, that will bring about stuff related to how to exist like
        that in normal life. This is achieved by understanding that you are
        already everything that you will ever be. You are complete.
      </p>
      <Link href='/'>
        <a> Back</a>
      </Link>
    </div>
  );
};

export default TransformationalJourneys;
