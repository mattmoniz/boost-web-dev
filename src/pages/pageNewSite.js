import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const pageNewSite = props => (
  <Layout>
    <Helmet>
      <title> Build a Brand New Site</title>
      <meta name="projects" content="Project Examples" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="">
            <h1>Build a Brand New Site</h1>
          </header>
          <span className="image main"></span>
          <p>More information to come.</p>
          {/* add how a new site can improve outreach */}
        </div>
      </section>
    </div>
  </Layout>
)

export default pageNewSite;