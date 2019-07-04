import React from 'react'
import {Link, navigate} from "gatsby"
import PostStyle from './Post.module.scss'

export default ({post}) =>{



   return (
      <article className={PostStyle.post}>

         <section className={PostStyle.image} style={
            {backgroundImage: `url(${post.frontmatter.image})`}
         }>
         </section>

         <section className={PostStyle.info}>
            <Link to={post.fields.slug}>
               <h2>{post.frontmatter.title}</h2>
            </Link>

            <small>{post.frontmatter.date}</small>

            <div dangerouslySetInnerHTML={{__html: post.excerpt}}>
            </div>
         </section>

         <section className={PostStyle.read} onClick={() => navigate(post.fields.slug)}>
            <p>Czas czytania: {post.timeToRead}</p>
         </section>
      </article>
   )
}