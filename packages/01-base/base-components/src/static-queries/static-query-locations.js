import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const data = useStaticQuery(
    graphql`
      query LocationsJsonQuery {
        allFile(filter: { name: { eq: "locations-data" } }) {
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
