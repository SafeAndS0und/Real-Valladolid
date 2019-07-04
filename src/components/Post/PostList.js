import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Post from './Post'

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
         {posts.map(({node: post}) =>{
            return (
               <Post post={post} key={post.frontmatter.date}/>
            )
         })}
      </div>
   )

}
