import Head from "next/head";
import styles from "../styles/Home.module.css";
import StateManager from "../src/StateManager";
import ReduxManager from "../src/redux-manager/ReduxManager";
import InputField from "../src/InputField";
import StateViewer from "../src/state-viewer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>State manager experiment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <StateManager manager={ReduxManager}>
          <InputField name={"first-name"} />
          <InputField name={"last-name"} />
          <StateViewer />
        </StateManager>
      </main>

      <footer className={styles.footer} />
    </div>
  );
}
