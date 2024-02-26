import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import { projects } from "../constants"
const ProjectCard = ({
  name,
  description,
  image,
  source_code_link,
  project_url,
}) => {
  return (
    <div
      className="col-4 card"
      onClick={() => window.open(project_url, "_blank")}
    >
      <h3>{name}</h3>

      <img src={image} alt={name} className="card-items" />
      <p className="card-items">
        {description}
      </p>
    </div>
  )
}

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

          <div className="grid-wrapper">
            {/* [pass in title, image here] */}

            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Projects
