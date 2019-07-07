import React from 'react'
import ArchivesStyles from './Archives.module.scss'
import {useStaticQuery, graphql, Link} from 'gatsby'

export default () =>{

   const {allFile: {edges}} = useStaticQuery(graphql` 
      query {
        allFile {
          edges {
            node {
              name
              relativeDirectory
              childMarkdownRemark {
                frontmatter {
                  title
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      }
   `)

   const months = edges.map(({node: {relativeDirectory}}) => relativeDirectory)
   const uniqueMonths = Array.from(new Set(months))

   return (
      <aside>

         {uniqueMonths.map(month =>{
            return (
               <div className={ArchivesStyles.month} key={month}>
                  <h3>{month}</h3>
                  {edges.map(({node}) =>
                     node.relativeDirectory === month
                        ? (
                           <Link to={node.childMarkdownRemark.fields.slug} key={node.childMarkdownRemark.fields.slug}>
                              <p>{node.childMarkdownRemark.frontmatter.title}</p>
                           </Link>
                        )
                        : null
                  )}
               </div>
            )
         })}

         {/*<div className={ArchivesStyles.month}>*/}
         {/*<h3>Lipiec</h3>*/}
         {/*<p>Brak postów</p>*/}
         {/*</div>*/}

         {/*<div className={ArchivesStyles.month}>*/}
         {/*<h3>Czerwiec (2)</h3>*/}
         {/*<p>Pierwszy Post</p>*/}
         {/*<p>Drugi Pościk</p>*/}
         {/*</div>*/}

         {/*<div className={ArchivesStyles.month}>*/}
         {/*<h3>Maj (5)</h3>*/}
         {/*<p>Pierwszy Post</p>*/}
         {/*<p>Cos tam gdzies tam</p>*/}
         {/*<p>Lorem ipsum</p>*/}
         {/*<p>Drugi Pościk</p>*/}
         {/*<p>Whoooops </p>*/}
         {/*</div>*/}

         {/*<div className={ArchivesStyles.month}>*/}
         {/*<h3>Kwiecień (3)</h3>*/}
         {/*<p>Lorem ipsum</p>*/}
         {/*<p>Pierwszy Post</p>*/}
         {/*<p>Drugi Pościk</p>*/}
         {/*</div>*/}

      </aside>
   )
}