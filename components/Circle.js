import React from 'react';
import styles from './Circle.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Circle = ({ i, el, changeChosenDay }) => {
  const router = useRouter();
  return (
    <span
      key={i}
      onClick={() => changeChosenDay(el)}
      className={`${styles.indexCircle}`}
    >
      {i}
    </span>
  );
};

export default Circle;
