import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'


export default () =>{

   const {allMarkdownRemark: {edges: posts}} = useStaticQuery(graphql`
      query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              html
              frontmatter {
                title
                date
              }
               fields {
                  slug
               }
            }
          }
        }
      }
  `)

   return (
      <div>
         <ul>
            {posts.map(({node: post}) =>{
               return (
                  <li key={post.frontmatter.date}>

                     <Link to={post.fields.slug}>
                        <h2>{post.frontmatter.title}</h2>
                     </Link>

                     <small>{post.frontmatter.date}</small>

                     {/* html content will go here */}
                     <div dangerouslySetInnerHTML={{__html: post.html}}>
                     </div>

                  </li>
               )
            })}
         </ul>
      </div>
   )

}
