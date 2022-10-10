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
          <a>Back to Manifesto</a>
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
        {entry.body.raw
          .split('\n')
          .slice(0, Math.floor(totalArrayElements * 0.5))
          .map((x, i) => (
            <p key={i} className={styles.paragraphElement}>
              {x}
            </p>
          ))}
        <div className={styles.paywallContainer}>
          <p>
            This is where the free reading ends... For now. If you want to
            support what I'm doing here, you can go{' '}
            <a
              href={`https://jpfraneto.gumroad.com/l/dukkha`}
              target='_blank'
              rel='noreferrer'
              className={styles.paywallBtn}
            >
              here
            </a>{' '}
            and buy this whole book. You'll get a pdf every day with everything
            that has come through my writing. I'm very grateful for your help,
            it helps me keep going.
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
