const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
   const { createNodeField } = actions
   if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode, basePath: `pages` }) // create slug
      createNodeField({ // add slug field to graphql
         node,
         name: `slug`,
         value: slug,
      })
   }
}

exports.createPages = ({ graphql, actions }) => {
   const { createPage } = actions
   return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
         console.log(node)
         createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/Post/Post.js`),
            context: {
               // Data passed to context is available
               // in page queries as GraphQL variables.
               slug: node.fields.slug,
            },
         })
      })
   })
}