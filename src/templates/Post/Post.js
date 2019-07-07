import React from 'react'
import MainLayout from '../../layouts/Main/Main'
import {graphql} from 'gatsby'
import PostStyles from './Post.module.scss'

export default ({data}) =>{
   const post = data.markdownRemark
   return (
      <MainLayout>

         <main className={PostStyles.post}>

            <header>
               <h2 className={PostStyles.title}>{post.frontmatter.title}</h2>
               <p className={PostStyles.date}>{post.frontmatter.date}</p>
            </header>

            <img src={post.frontmatter.image} alt="post image"/>

            <div dangerouslySetInnerHTML={{__html: post.html}}>
            </div>

         </main>
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
        image
      }
    }
  }
`