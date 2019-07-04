import React from 'react'
import ArchivesStyles from './Archives.module.scss'

export default () =>{

   return (
      <aside>

         <div className={ArchivesStyles.month}>
            <h3>Lipiec</h3>
            <p>Brak postów</p>
         </div>

         <div className={ArchivesStyles.month}>
            <h3>Czerwiec (2)</h3>
            <p>Pierwszy Post</p>
            <p>Drugi Pościk</p>
         </div>

         <div className={ArchivesStyles.month}>
            <h3>Maj (5)</h3>
            <p>Pierwszy Post</p>
            <p>Cos tam gdzies tam</p>
            <p>Lorem ipsum</p>
            <p>Drugi Pościk</p>
            <p>Whoooops </p>
         </div>

      </aside>
   )
}