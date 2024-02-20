import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Projects = props => (
  <Layout>
    <Helmet>
      <title> Projects</title>
      <meta name="projects" content="Project Examples" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="">
            <h1>Sample Projects</h1>
          </header>
          <span className="image main"></span>
          <p>More information to come.</p>
          {/* Add sample projects here */}

        </div>
      </section>
    </div>
  </Layout>
)

export default Projects;