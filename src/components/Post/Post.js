import React from 'react'
import {Link} from "gatsby"
import PostStyle from './Post.module.scss'

export default ({post}) =>{

   return (
      <article className={PostStyle.post}>

         <section className={PostStyle.image}>

         </section>

         <section className={PostStyle.info}>
            <Link to={post.fields.slug}>
               <h2>{post.frontmatter.title}</h2>
            </Link>

            <small>{post.frontmatter.date}</small>

            {/* html content will go here */}
            <div dangerouslySetInnerHTML={{__html: post.html}}>
            </div>
         </section>

         <section className={PostStyle.read}>

         </section>
      </article>
   )
}