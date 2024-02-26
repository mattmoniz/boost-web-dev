import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const pageExistingSite = props => (
  <Layout>
    <Helmet>
      <title> Existing Pages</title>
      <meta name="projects" content="Project Examples" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="">
            <h1>How we can improve your existing sites</h1>
          </header>
          <span className="image main"></span>
          <p>More information to come.</p>
          {/* add ways we can create a new site */}


        </div>
      </section>
    </div>
  </Layout>
)

export default pageExistingSite;