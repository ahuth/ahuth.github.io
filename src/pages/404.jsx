import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <nav>
        <Link to="/">← Home</Link>
      </nav>
      <main>
        <h1>NOT FOUND</h1>
        <p>You just hit a page that doesn&#39;t exist... the sadness.</p>
      </main>
    </Layout>
  );
}
