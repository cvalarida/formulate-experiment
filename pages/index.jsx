import Head from "next/head";
import styles from "../styles/Home.module.css";
import StateManager from "../src/StateManager";
import ReduxManager from "../src/redux-manager";
import InputField from "../src/InputField";
import StateViewer from "../src/StateViewer";

import { Router, Page, Link, Chapter } from "../src/routing";

import { matches } from "../src/validations";

const pageOne = (
  <>
    <InputField label="First Name" data={"name.first"} required />
    <InputField label="Last Name" data={"name.last"} required />
    <InputField
      label="How many children do you have?"
      type="number"
      data="childrenCount"
      required
    />
    <StateViewer />
  </>
);

const pageTwo = (
  <>
    <InputField label="Age" data="age" required />
    <StateViewer />
  </>
);

const navigation = (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/personal-information/name">Name</Link>
    </li>
    <li>
      <Link to="/personal-information/age">Age</Link>
    </li>
    <li>
      <Link to="/whatever">Whatever</Link>
    </li>
  </ul>
);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>State manager experiment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <StateManager manager={ReduxManager}>
          <Router>
            {navigation}
            <Page path="/" title="Introduction">
              In the beginning...
            </Page>
            <Chapter path="/personal-information" title="Personal information">
              <Page route="/personal-information/name" title="Name">
                {pageOne}
              </Page>
              <Page route="/personal-information/age" title="Age">
                {pageTwo}
              </Page>
            </Chapter>
            <Page path="/whatever">
              <p>Well, I'm here...</p>
            </Page>
          </Router>
        </StateManager>
      </main>

      <footer className={styles.footer} />
    </div>
  );
}
