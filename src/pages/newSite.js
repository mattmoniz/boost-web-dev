import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const NewSite = props => (
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

          Ways that Gatsby is better than site generators like wix and wordpress.
          Performance: Emphasize the importance of a fast-loading website for attracting and retaining customers. Explain that GatsbyJS generates static websites, resulting in quicker load times compared to dynamic sites created with Wix or WordPress. Faster loading speeds can lead to improved user experience, higher engagement, and better search engine rankings, ultimately driving more traffic to their site.

          Customization: Highlight GatsbyJS's flexibility and ability to create fully customized web experiences tailored to their brand and target audience. Unlike Wix or WordPress templates, which may have limitations in terms of design and functionality, Gatsby allows for complete control over the website's look and feel. This means they can create a unique online presence that sets them apart from competitors and resonates with their customers.

Security: Discuss the security advantages of using a static site generator like GatsbyJS. Explain that since Gatsby generates static files, there's no need for server-side processing or database interactions, reducing the risk of security vulnerabilities. This can provide peace of mind for the business owner, knowing that their website is less susceptible to hacking attempts or data breaches.

Cost-effectiveness: Highlight the cost-effectiveness of using GatsbyJS for their website. Unlike Wix or WordPress, which may involve ongoing subscription fees or maintenance costs, Gatsby allows for low-cost hosting solutions, as static sites can be served directly from a content delivery network (CDN). This means they can save money on hosting expenses while still enjoying the benefits of a high-performance website.

Scalability: Explain how GatsbyJS offers scalability and growth opportunities for their business. Whether they're looking to expand their product offerings, reach new markets, or handle increased website traffic, Gatsby can easily accommodate their needs without compromising performance or reliability. This scalability ensures that their website can grow with their business over time.

GatsbyJS is Built using secure coding practices. Any extra plugins and apps installed on the site are screened. This doesnt happen with wordpress.

Gatsby ensures better mobile responsiveness benefitting mobile users.


here are some famous examples that use gatsbyJS for there website.
https://www.gatsbysites.com/
        </div>
      </section>
    </div>
  </Layout>
)

export default NewSite;