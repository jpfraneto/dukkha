import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const ManifestoIndex = () => {
  const manifestosDays = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
  ];
  return (
    <>
      <Head>
        <title>Dukkha · Manifesto Index</title>
      </Head>{' '}
      <div>
        <p>
          This document is being written every day, until there are 88
          documents. Each of these documents is{' '}
          <a
            href='https://github.com/jpfraneto/dukkha/tree/main/data/manifesto'
            target='_blank'
            rel='noreferrer'
            style={{ color: 'lightblue' }}
          >
            open source
          </a>
          , waiting for you to edit it.
        </p>
        {manifestosDays.map((x, i) => (
          <div key={i}>
            <Link href={`/manifesto/day-${x}`}>
              <a>{`Day ${x}`}</a>
            </Link>
          </div>
        ))}
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
