import React from 'react';
import Articles from '../components/Articles';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Seo from '../components/Seo';
import './index.css';

export default function Index() {
  return (
    <Layout>
      <Seo />
      <header>
        <h1>Andrew Huth</h1>
        <div>
          <Bio />
          <a href="https://github.com/ahuth">github.com/ahuth</a>
          <br />
          <a href="mailto:andrew@huth.me">andrew@huth.me</a>
        </div>
      </header>
      <main className="auto-grid">
        <Projects />
        <Articles />
      </main>
    </Layout>
  );
}
