import Head from "next/head";
import styles from "../../styles/Home.module.css";
import FormApp from "../../src/redux-manager/FormApp";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux state manager experiment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <FormApp />
      </main>

      <footer className={styles.footer} />
    </div>
  );
}
