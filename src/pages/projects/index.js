import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const ProjectPage = ({data}) => {
    return (
        <Layout pageTitle="my Projects">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <Link to={`/projects/${node.slug}`}>
                          {node.frontmatter.title}
                        </Link>
                        <p>Posted: {node.frontmatter.datePublished}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query {
    allMdx(sort: {fields: frontmatter___datePublished, order: DESC}) {
      nodes {
        id
        frontmatter {
          title
          datePublished(formatString: "MMMM D, YYYY")
        }
        slug
      }
    }
  }
`

export default ProjectPage