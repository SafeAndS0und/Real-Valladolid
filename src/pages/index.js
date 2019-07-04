import React from "react"
import './index.css'
import MainLayout from '../layouts/Main/Main'
import PostList from '../components/Post/PostList'

export default () => {

   return (
      <MainLayout>
         <PostList/>
      </MainLayout>
   )
}
