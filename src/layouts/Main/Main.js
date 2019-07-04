import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Archives from '../../components/Archives/Archives'
import MainStyles from './Main.module.scss'


export default ({children}) =>{

   return (
      <div className={MainStyles.layout}>
         <Navbar/>

         <main>

            <Archives/>
            <div>
               {children}
            </div>

         </main>
      </div>
   )
}