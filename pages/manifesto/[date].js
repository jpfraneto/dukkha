import Link from 'next/link';
import components from '../../components/MDXcomponents';
import { allManifestoEntries } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import styles from '../../styles/ManifestoDay.module.css';
import Head from 'next/head';

export async function getStaticPaths() {
  const paths = allManifestoEntries.map(entry => {
    return { params: { date: entry.slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const thisElement = allManifestoEntries.find(
    entry => entry.slug === params.date
  );
  return { props: { entry: JSON.parse(JSON.stringify(thisElement)) } };
}

const ManifestoDay = ({ entry }) => {
  return (
    <>
      <Head>
        <title>Dukkha · Manifesto · Day {entry.index}</title>
      </Head>
      <div className={styles.container}>
        <h1>{entry.title}</h1>
        {entry.body.raw.split('\n').map((x, i) => (
          <p key={i} className={styles.paragraphElement}>
            {x}
          </p>
        ))}
        <Link href='/manifesto'>
          <a>Go Back</a>
        </Link>
      </div>
    </>
  );
};

export default ManifestoDay;
