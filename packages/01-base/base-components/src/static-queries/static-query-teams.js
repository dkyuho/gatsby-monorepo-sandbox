import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const data = useStaticQuery(
    graphql`
      query TeamsJsonQuery {
        allFile(filter: { name: { eq: "team-members-data" } }) {
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
