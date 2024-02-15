import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Pricing = props => (
  <Layout>
    <Helmet>
      <title>APricing Information</title>
      <meta name="pricing" content="Pricing Information" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="">
            <h1>Pricing</h1>
          </header>
          <span className="image main"></span>
          <p>More information to come.</p>

        </div>
      </section>
    </div>
  </Layout>
)

export default Pricing