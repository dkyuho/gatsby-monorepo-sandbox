import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const data = useStaticQuery(
    graphql`
      query PrivacyJsonQuery {
        allFile(filter: { name: { eq: "privacy-data" } }) {
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
