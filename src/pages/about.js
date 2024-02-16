import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


const Generic = props => (
  <Layout>
    <Helmet>
      <title>About Boost Web</title>
      <meta name="About" content="About Section" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="">
            <h1>About Me</h1>
          </header>
          <span className="image main"></span>
          <p>
            Hey there, I'm Matt, and I'm thrilled to welcome you to Boost Web
            Development! I'm a web developer based out of Mansfield,
            Massachusetts. I founded this company with one simple goal: to
            empower small businesses like yours to thrive in the online world.
          </p>

          <p>
            At Boost Web Development, we're passionate about building responsive
            websites and helping businesses grow. That's why I've chosen to work
            with the modern technologies like React, primarily Gatsby. These
            tools help with crafting powerful, modern, and lightning-fast online
            experiences that captivate your audience from the get-go.
          </p>

          <p>
            Whether you're a local bakery, boutique shop, or service provider,
            we're here to help you build and establish a strong presence online.
            I'll not only build you a beautiful website but can also provide
            ongoing support and maintenance to ensure that it continues to
            perform at its best.
          </p>

          <p>
            So if you have an existing website that you would like to work on,
            need a brand new website, or just need some technical maintenance
            and support. Please feel free to react out. Let's see how we can
              {" "}<strong style={{ color: "white" }}>BOOST</strong>{" "}
            your web presence together.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic