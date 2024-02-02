import { Link } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import pic01 from "../assets/images/web-design-3411373_1280.jpg"
import pic02 from "../assets/images/gatsby-react-image.png"
import pic03 from "../assets/images/seo-896175_1280.png"
import pic04 from "../assets/images/ben-kolde-bs2Ba7t69mM-unsplash.jpg"
import pic05 from "../assets/images/pic05.jpg"
import pic06 from "../assets/images/pic06.jpg"
import Banner from "../components/Banner"
import Layout from "../components/layout"

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Gatsby Starter - Forty"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>Improve your existing site</h3>
                  <p>
                    If there is something you're not happy with on your current
                    site, let's take a look
                  </p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>Build a New Site</h3>
                  <p>
                    Using modern web development frameworks like ReactJS and
                    Gatsby{" "}
                  </p>
                  {/* onlinked pages you can still explain why this is beneficial */}
                  {/* Still connect it to any modern CMS */}
                  {/* https://snappywebdesign.net/blog/what-the-heck-is-gatsby-js-and-why-use-it/ */}
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>SEO Optimized Designs</h3>
                  <p>
                    {" "}
                    WE'LL HELP YOU ATTRACT MORE CUSTOMERS AND GROW YOUR BUSINESS
                  </p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>Portfolio</h3>
                  <p>
                    Here are some demo websites to show you what we can do for
                    you.{" "}
                  </p>
                </header>
              </Link>
            </article>
            {/* <article style={{ backgroundImage: `url(${pic05})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>Consequat</h3>
                  <p>Ipsum dolor sit amet</p>
                </header>
              </Link>
            </article> */}
            {/* <article style={{ backgroundImage: `url(${pic06})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>Etiam</h3>
                  <p>Feugiat amet tempus</p>
                </header>
              </Link>
            </article> */}
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Reach out today</h2>
              </header>
              <p>
                Ready to take your small business to new heights online?
                <br />
                <br />
                Don't let your website hold you back - let's work together to
                propel your business forward.
                <br />
                <br />
                Get in touch today
              </p>
              {/* <ul className="actions">
                <li>
                  <Link
                    aria-label="Link to Landing Page"
                    to="/landing"
                    className="button next"
                  >
                    Get Started
                  </Link>
                </li>
              </ul> */}
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
