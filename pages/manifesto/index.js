import React from 'react';
import Link from 'next/link';

const ManifestoIndex = () => {
  const manifestosDays = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      <p>
        This document is being written every day, until there are 88 documents.
        Each of these documents is open to editing and is open source. Help.
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
  );
};

export default ManifestoIndex;
