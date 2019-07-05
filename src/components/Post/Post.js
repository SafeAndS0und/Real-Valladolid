import React from 'react'
import {Link, navigate} from "gatsby"
import PostStyle from './Post.module.scss'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {IconContext} from "react-icons"


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
            <IconContext.Provider value={{color: 'white', size: '6em', className: PostStyle.icon}}>
               <MdKeyboardArrowRight/>
            </IconContext.Provider>
            <p>Czas czytania: {post.timeToRead}</p>
         </section>
      </article>
   )
}