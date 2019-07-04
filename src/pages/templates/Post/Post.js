import React from 'react'
import MainLayout from '../../../layouts/Main/Main'

export default ({data}) => {
   const post = data.markdownRemark
   return (
      <MainLayout>
         <h2>{post.frontmatter.title}</h2>
         <small>{post.frontmatter.date}</small>
         {/* html content will go here */}
         <div dangerouslySetInnerHTML={{__html: post.html}}>
         </div>
      </MainLayout>
   )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`