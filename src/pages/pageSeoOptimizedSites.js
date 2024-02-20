import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const pageSeoOptimizedSites = props => (
  <Layout>
    <Helmet>
      <title> SEO</title>
      <meta name="projects" content="Project Examples" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="">
            <h1>Optimize your sites for SEO</h1>
          </header>
          <span className="image main"></span>
          <p>More information to come.</p>
          {/* Examples How an SEO page helps  and why gatsby is the best*/}
        </div>
      </section>
    </div>
  </Layout>
)

export default pageSeoOptimizedSites