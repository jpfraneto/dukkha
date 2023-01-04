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
  console.log(entry.body.raw.replace('\n', '').replace('\n', ''));
  const totalArrayElements = entry.body.raw.split('\n').length;
  return (
    <>
      <Head>
        <title>Dukkha · Manifesto · Day {entry.index}</title>
      </Head>
      <div className={styles.container}>
        <h1>{entry.title}</h1>
        <small>
          Average reading time: {Math.floor(entry.words / 250)} minutes
        </small>
        <br />
        <Link href='/manifesto'>
          <a>Back to Index</a>
        </Link>
        <br />{' '}
        <a
          href={`https://github.com/jpfraneto/dukkha/tree/main/data/manifesto/day${entry.index}.mdx`}
          target='_blank'
          rel='noreferrer'
        >
          Edit in Github
        </a>
        <hr />
        {entry.body.raw.split('\n').map((x, i) => (
          <p key={i} className={styles.paragraphElement}>
            {x}
          </p>
        ))}
        <div className={styles.paywallContainer}>
          <p>
            If you want to support this project, you can go{' '}
            <a
              href={`https://jpfraneto.gumroad.com/l/dukkha`}
              target='_blank'
              rel='noreferrer'
              className={styles.paywallBtn}
            >
              here
            </a>{' '}
            and buy this whole book. You&apos;ll get a pdf every day with
            everything that has come through my writing. I&apos;m very grateful
            for your help, it helps me keep going.
          </p>
        </div>
        <Link href='/manifesto'>
          <a>Go Back</a>
        </Link>
      </div>
    </>
  );
};

export default ManifestoDay;
