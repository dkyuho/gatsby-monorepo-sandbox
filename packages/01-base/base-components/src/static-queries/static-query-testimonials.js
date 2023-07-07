import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const data = useStaticQuery(
    graphql`
      query TestimonialsJsonQuery {
        allFile(filter: { name: { eq: "testimonials-data" } }) {
          nodes {
            internal {
              content
            }
            name
          }
        }
      }
    `
  )
  return data.allFile.nodes[0]
}
